import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Popover } from "./Popover";

function Basic(props: React.ComponentProps<typeof Popover>) {
  return (
    <Popover {...props}>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Content>
        <p>Panel content</p>
      </Popover.Content>
    </Popover>
  );
}

describe("Popover", () => {
  it("is closed by default and opens on trigger click", () => {
    render(<Basic />);
    const trigger = screen.getByRole("button", { name: "Open" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Panel content")).not.toBeInTheDocument();

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Panel content")).toBeInTheDocument();
  });

  it("sets aria-haspopup and links trigger to content when open", () => {
    render(<Basic />);
    const trigger = screen.getByRole("button", { name: "Open" });
    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");

    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog");
    expect(trigger).toHaveAttribute("aria-controls", dialog.id);
    expect(dialog).toHaveAttribute("aria-labelledby", trigger.id);
  });

  it("closes on Escape", () => {
    render(<Basic />);
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByText("Panel content")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByText("Panel content")).not.toBeInTheDocument();
  });

  it("closes on outside pointer-down but stays open when clicking inside", () => {
    render(
      <div>
        <span data-testid="outside">outside</span>
        <Basic />
      </div>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    fireEvent.mouseDown(screen.getByText("Panel content"));
    expect(screen.getByText("Panel content")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByText("Panel content")).not.toBeInTheDocument();
  });

  it("supports controlled open via open / onOpenChange", () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(<Basic open={false} onOpenChange={onOpenChange} />);
    expect(screen.queryByText("Panel content")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    // Still closed because the parent controls `open`.
    expect(screen.queryByText("Panel content")).not.toBeInTheDocument();

    rerender(<Basic open onOpenChange={onOpenChange} />);
    expect(screen.getByText("Panel content")).toBeInTheDocument();
  });

  it("renders the trigger child via asChild", () => {
    render(
      <Popover>
        <Popover.Trigger asChild>
          <a href="#x">Link trigger</a>
        </Popover.Trigger>
        <Popover.Content>panel</Popover.Content>
      </Popover>,
    );
    const link = screen.getByRole("link", { name: "Link trigger" });
    expect(link).toHaveAttribute("aria-haspopup", "dialog");
    fireEvent.click(link);
    expect(screen.getByText("panel")).toBeInTheDocument();
  });

  it("portals the content to document.body so fixed positioning escapes transformed ancestors", () => {
    render(
      // A transformed ancestor would become the containing block for a
      // non-portaled position:fixed panel; the portal must escape it.
      <div style={{ transform: "scale(1)" }}>
        <Basic open />
      </div>,
    );
    const panel = screen.getByText("Panel content").closest('[role="dialog"]')!;
    expect(panel.parentElement).toBe(document.body);
    expect((panel as HTMLElement).className).toContain("z-[60]");
    expect((panel as HTMLElement).style.position).toBe("fixed");
  });

  it("composes a ref onto an asChild trigger (React 19 props.ref)", () => {
    const ref = { current: null as HTMLElement | null };
    render(
      <Popover>
        <Popover.Trigger asChild>
          <button ref={ref}>Trigger</button>
        </Popover.Trigger>
        <Popover.Content>panel</Popover.Content>
      </Popover>,
    );
    expect(ref.current).toBe(screen.getByRole("button", { name: "Trigger" }));
  });
});
