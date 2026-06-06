import { describe, it, expect, vi } from "vitest";
import { act, render } from "@testing-library/react";
import { memo, useEffect, useRef, useState } from "react";
import { UIColorProvider } from "./UIColorContext";
import { useUIColor } from "./useUIColor";

describe("UIColorProvider memoization", () => {
  it("keeps the wrapper style object reference stable across parent re-renders with the same color", () => {
    const styleRefs: React.CSSProperties[] = [];

    function Bumper({ bump }: { bump: number }) {
      return (
        <UIColorProvider initialColor="blue">
          <StyleCapture bump={bump} />
        </UIColorProvider>
      );
    }

    function StyleCapture({ bump }: { bump: number }) {
      // Grab the wrapper div's style on every render via a ref.
      const ref = useRef<HTMLDivElement>(null);
      useEffect(() => {
        if (ref.current) {
          // Read inline style as a stable snapshot string.
          styleRefs.push({ cssText: ref.current.style.cssText, bump } as React.CSSProperties);
        }
      });
      return <div ref={ref} data-testid="capture" data-bump={bump} />;
    }

    function Harness() {
      const [bump, setBump] = useState(0);
      return (
        <>
          <button onClick={() => setBump((b) => b + 1)}>bump</button>
          <Bumper bump={bump} />
        </>
      );
    }

    const { getByText, rerender } = render(<Harness />);
    act(() => getByText("bump").click());
    rerender(<Harness />);
    act(() => getByText("bump").click());

    // First render + two updates → at least 2 effect runs. Inline CSS text should be identical
    // since the color hasn't changed.
    const unique = new Set(styleRefs.map((s) => (s as { cssText: string }).cssText));
    expect(unique.size).toBe(1);
  });

  it("does not re-render context consumers that read color when only an unrelated parent prop changes", () => {
    const consumerRenders = vi.fn();

    const Consumer = memo(function Consumer() {
      const ctx = useUIColor();
      consumerRenders(ctx?.color);
      return <span>{ctx?.color}</span>;
    });

    function Wrapper({ bump }: { bump: number }) {
      return (
        <UIColorProvider initialColor="red">
          <div data-bump={bump}>
            <Consumer />
          </div>
        </UIColorProvider>
      );
    }

    const { rerender } = render(<Wrapper bump={0} />);
    rerender(<Wrapper bump={1} />);
    rerender(<Wrapper bump={2} />);

    // With memoization of contextValue, Consumer (wrapped in React.memo) should
    // not re-render when only Wrapper's bump prop changes.
    expect(consumerRenders).toHaveBeenCalledTimes(1);
    expect(consumerRenders).toHaveBeenCalledWith("red");
  });

  it("re-renders consumers when the color actually changes", () => {
    const consumerRenders = vi.fn();

    const Consumer = memo(function Consumer() {
      const ctx = useUIColor();
      consumerRenders(ctx?.color);
      return null;
    });

    function Wrapper({ color }: { color: "red" | "blue" }) {
      return (
        <UIColorProvider initialColor={color}>
          <Consumer />
        </UIColorProvider>
      );
    }

    const { rerender } = render(<Wrapper color="red" />);
    rerender(<Wrapper color="blue" />);

    expect(consumerRenders).toHaveBeenCalledWith("red");
    expect(consumerRenders).toHaveBeenCalledWith("blue");
  });
});
