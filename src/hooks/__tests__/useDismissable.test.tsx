import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRef, type ReactNode } from "react";

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

/**
 * Which layer gets the Escape when several are open?
 *
 * Every layer used to hear it, so dismissing a confirm dialog with the
 * keyboard took the dialog underneath it as well.
 */
describe("useDismissable: stacked layers", () => {
  function Layer({
    onDismiss,
    escape,
    children,
  }: {
    onDismiss: (reason: DismissReason) => void;
    escape?: boolean;
    children?: ReactNode;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    useDismissable({ enabled: true, escape, onDismiss, container: ref });
    return <div ref={ref}>{children}</div>;
  }

  it("closes only the inner layer when it opened later", () => {
    const outer = vi.fn();
    const inner = vi.fn();
    const { rerender } = render(<Layer onDismiss={outer} />);
    rerender(
      <Layer onDismiss={outer}>
        <Layer onDismiss={inner} />
      </Layer>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(inner).toHaveBeenCalledTimes(1);
    expect(outer).not.toHaveBeenCalled();
  });

  it("closes only the inner layer when both mount together", () => {
    // React runs a child's effect *before* its parent's, so the inner layer
    // registers first. Going by registration order alone would pick the outer.
    const outer = vi.fn();
    const inner = vi.fn();
    render(
      <Layer onDismiss={outer}>
        <Layer onDismiss={inner} />
      </Layer>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(inner).toHaveBeenCalledTimes(1);
    expect(outer).not.toHaveBeenCalled();
  });

  it("hands Escape back to the outer layer once the inner one is gone", () => {
    const outer = vi.fn();
    const inner = vi.fn();
    const { rerender } = render(
      <Layer onDismiss={outer}>
        <Layer onDismiss={inner} />
      </Layer>
    );
    rerender(<Layer onDismiss={outer} />);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(outer).toHaveBeenCalledTimes(1);
    expect(inner).not.toHaveBeenCalled();
  });

  it("gives Escape to the most recent of two layers that don't nest", () => {
    const first = vi.fn();
    const second = vi.fn();
    const { rerender } = render(<Layer onDismiss={first} />);
    rerender(
      <>
        <Layer onDismiss={first} />
        <Layer onDismiss={second} />
      </>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it("lets a layer that opted out of Escape be skipped over", () => {
    // `Combobox` opts out. Sitting on top of a modal, it must not swallow the
    // keypress the modal is waiting for.
    const modal = vi.fn();
    const combobox = vi.fn();
    render(
      <Layer onDismiss={modal}>
        <Layer onDismiss={combobox} escape={false} />
      </Layer>
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(modal).toHaveBeenCalledTimes(1);
    expect(combobox).not.toHaveBeenCalled();
  });
});
