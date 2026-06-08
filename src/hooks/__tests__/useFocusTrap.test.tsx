import { describe, it, expect } from "vitest";
import { useRef, type ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react";
import { useFocusTrap } from "../useFocusTrap";

function Trap({ children, active = true }: { children?: ReactNode; active?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, active);
  return (
    <div ref={ref} data-testid="trap">
      {children}
    </div>
  );
}

describe("useFocusTrap", () => {
  it("keeps focus on the container when there are no focusable children", () => {
    const { getByTestId } = render(<Trap />);
    const container = getByTestId("trap");
    fireEvent.keyDown(document, { key: "Tab" });
    expect(document.activeElement).toBe(container);
  });

  it("pulls focus back to the first element when focus escaped (Tab)", () => {
    const { getByText } = render(
      <div>
        <button>outside</button>
        <Trap>
          <button>first</button>
          <button>last</button>
        </Trap>
      </div>,
    );
    const outside = getByText("outside");
    outside.focus();
    expect(document.activeElement).toBe(outside);

    fireEvent.keyDown(document, { key: "Tab" });
    expect(document.activeElement).toBe(getByText("first"));
  });

  it("pulls focus back to the last element when focus escaped (Shift+Tab)", () => {
    const { getByText } = render(
      <div>
        <button>outside</button>
        <Trap>
          <button>first</button>
          <button>last</button>
        </Trap>
      </div>,
    );
    getByText("outside").focus();

    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(getByText("last"));
  });

  it("wraps from last to first on Tab and first to last on Shift+Tab", () => {
    const { getByText } = render(
      <Trap>
        <button>first</button>
        <button>last</button>
      </Trap>,
    );

    getByText("last").focus();
    fireEvent.keyDown(document, { key: "Tab" });
    expect(document.activeElement).toBe(getByText("first"));

    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(getByText("last"));
  });

  it("ignores non-Tab keys", () => {
    const { getByText } = render(
      <Trap>
        <button>first</button>
        <button>last</button>
      </Trap>,
    );
    getByText("last").focus();
    fireEvent.keyDown(document, { key: "ArrowDown" });
    // No trapping logic runs for other keys; focus stays put.
    expect(document.activeElement).toBe(getByText("last"));
  });
});
