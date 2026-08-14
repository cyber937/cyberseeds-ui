import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRef } from "react";

import { useDismissable, type DismissReason } from "../useDismissable";

function Probe({
  enabled = true,
  escape,
  withRefs = true,
  onDismiss,
}: {
  enabled?: boolean;
  escape?: boolean;
  withRefs?: boolean;
  onDismiss: (reason: DismissReason) => void;
}) {
  const inside = useRef<HTMLDivElement>(null);
  useDismissable({
    enabled,
    escape,
    refs: withRefs ? [inside] : undefined,
    onDismiss,
  });
  return (
    <div>
      <div ref={inside} data-testid="inside">
        <button>in</button>
      </div>
      <div data-testid="outside">out</div>
    </div>
  );
}

describe("useDismissable", () => {
  it("dismisses on Escape with reason 'escape'", () => {
    const onDismiss = vi.fn();
    render(<Probe onDismiss={onDismiss} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onDismiss).toHaveBeenCalledWith("escape");
  });

  it("ignores other keys", () => {
    const onDismiss = vi.fn();
    render(<Probe onDismiss={onDismiss} />);
    fireEvent.keyDown(document, { key: "Enter" });
    fireEvent.keyDown(document, { key: "a" });
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("dismisses on an outside press with reason 'outside'", () => {
    const onDismiss = vi.fn();
    render(<Probe onDismiss={onDismiss} />);
    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(onDismiss).toHaveBeenCalledWith("outside");
  });

  it("stays put for a press inside any registered ref", () => {
    const onDismiss = vi.fn();
    render(<Probe onDismiss={onDismiss} />);
    fireEvent.mouseDown(screen.getByTestId("inside"));
    fireEvent.mouseDown(screen.getByRole("button", { name: "in" }));
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("treats a touch press the same as a mouse press", () => {
    const onDismiss = vi.fn();
    render(<Probe onDismiss={onDismiss} />);
    fireEvent.touchStart(screen.getByTestId("outside"));
    expect(onDismiss).toHaveBeenCalledWith("outside");
  });

  it("does nothing while disabled", () => {
    const onDismiss = vi.fn();
    render(<Probe enabled={false} onDismiss={onDismiss} />);
    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("can opt out of Escape while keeping outside-press", () => {
    const onDismiss = vi.fn();
    render(<Probe escape={false} onDismiss={onDismiss} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onDismiss).not.toHaveBeenCalled();

    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(onDismiss).toHaveBeenCalledWith("outside");
  });

  it("listens for Escape only when no refs are given", () => {
    const onDismiss = vi.fn();
    render(<Probe withRefs={false} onDismiss={onDismiss} />);
    // No "inside" region is defined, so a press anywhere must not dismiss —
    // otherwise a modal would close the moment the user clicked its own body.
    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(onDismiss).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onDismiss).toHaveBeenCalledWith("escape");
  });

  it("detaches its listeners on unmount", () => {
    const onDismiss = vi.fn();
    const { unmount } = render(<Probe onDismiss={onDismiss} />);
    unmount();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it("calls the latest callback without re-attaching listeners", () => {
    const first = vi.fn();
    const second = vi.fn();
    const { rerender } = render(<Probe onDismiss={first} />);
    rerender(<Probe onDismiss={second} />);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledWith("escape");
  });
});
