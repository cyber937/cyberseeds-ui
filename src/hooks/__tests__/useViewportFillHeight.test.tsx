import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  useViewportFillHeight,
  type ViewportFillHeightOptions,
} from "../useViewportFillHeight";

/**
 * The hook measures during an effect, so the node — and the top edge it
 * reports — must already be in place by then. A ref callback runs before
 * effects, which is the only hook-visible moment early enough to stub the rect.
 * That also mirrors how a real component attaches the ref during render.
 */
function Probe({
  top,
  enabled = true,
  options,
}: {
  top: number;
  enabled?: boolean;
  options?: ViewportFillHeightOptions;
}) {
  const { ref, maxHeight } = useViewportFillHeight<HTMLDivElement>(enabled, options);
  return (
    <div
      data-testid="probe"
      data-max-height={maxHeight ?? ""}
      ref={(node) => {
        if (node) {
          vi.spyOn(node, "getBoundingClientRect").mockReturnValue({
            top,
            bottom: 0, left: 0, right: 0, width: 0, height: 0, x: 0, y: top,
            toJSON: () => ({}),
          } as DOMRect);
        }
        ref.current = node;
      }}
    />
  );
}

const measured = () => screen.getByTestId("probe").getAttribute("data-max-height");

describe("useViewportFillHeight", () => {
  const originalInnerHeight = window.innerHeight;

  beforeEach(() => {
    Object.defineProperty(window, "innerHeight", { value: 900, configurable: true });
  });

  afterEach(() => {
    Object.defineProperty(window, "innerHeight", {
      value: originalInnerHeight,
      configurable: true,
    });
    vi.restoreAllMocks();
  });

  it("returns the room left between the top edge and the viewport bottom", () => {
    render(<Probe top={200} />);
    expect(measured()).toBe("700");
  });

  it("subtracts bottomGap", () => {
    render(<Probe top={200} options={{ bottomGap: 40 }} />);
    expect(measured()).toBe("660");
  });

  it("clamps to minHeight rather than going negative", () => {
    render(<Probe top={2000} options={{ minHeight: 180 }} />);
    expect(measured()).toBe("180");
  });

  it("stays empty while disabled, so the caller falls back to natural flow", () => {
    render(<Probe top={200} enabled={false} />);
    expect(measured()).toBe("");
  });

  it("prefers visualViewport height when the browser exposes it", () => {
    Object.defineProperty(window, "visualViewport", {
      value: { height: 600, addEventListener: vi.fn(), removeEventListener: vi.fn() },
      configurable: true,
    });
    render(<Probe top={100} />);
    expect(measured()).toBe("500");
    Reflect.deleteProperty(window, "visualViewport");
  });

  it("detaches its listeners on unmount", () => {
    const remove = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<Probe top={200} />);
    unmount();
    expect(remove).toHaveBeenCalledWith("resize", expect.any(Function));
  });
});
