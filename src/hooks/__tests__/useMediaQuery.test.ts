import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMediaQuery } from "../useMediaQuery";

function createMockMatchMedia(matches: boolean) {
  const listeners: Array<(e: MediaQueryListEvent) => void> = [];
  const mql = {
    matches,
    media: "",
    addEventListener: vi.fn((_event: string, handler: (e: MediaQueryListEvent) => void) => {
      listeners.push(handler);
    }),
    removeEventListener: vi.fn((_event: string, handler: (e: MediaQueryListEvent) => void) => {
      const idx = listeners.indexOf(handler);
      if (idx >= 0) listeners.splice(idx, 1);
    }),
    dispatchEvent: vi.fn(),
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  } as unknown as MediaQueryList;

  const trigger = (newMatches: boolean) => {
    (mql as { matches: boolean }).matches = newMatches;
    for (const listener of listeners) {
      listener({ matches: newMatches } as MediaQueryListEvent);
    }
  };

  return { mql, trigger };
}

describe("useMediaQuery", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it("returns true when media query matches", () => {
    const { mql } = createMockMatchMedia(true);
    window.matchMedia = vi.fn(() => mql);

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });

  it("returns false when media query does not match", () => {
    const { mql } = createMockMatchMedia(false);
    window.matchMedia = vi.fn(() => mql);

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(false);
  });

  it("updates when media query changes", () => {
    const { mql, trigger } = createMockMatchMedia(false);
    window.matchMedia = vi.fn(() => mql);

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(false);

    act(() => trigger(true));
    expect(result.current).toBe(true);

    act(() => trigger(false));
    expect(result.current).toBe(false);
  });

  it("cleans up listener on unmount", () => {
    const { mql } = createMockMatchMedia(false);
    window.matchMedia = vi.fn(() => mql);

    const { unmount } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(mql.addEventListener).toHaveBeenCalledWith("change", expect.any(Function));

    unmount();
    expect(mql.removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });

  it("re-subscribes when query changes", () => {
    const mock1 = createMockMatchMedia(true);
    const mock2 = createMockMatchMedia(false);
    window.matchMedia = vi.fn((query: string) => {
      return query === "(min-width: 768px)" ? mock1.mql : mock2.mql;
    });

    const { result, rerender } = renderHook(
      ({ query }) => useMediaQuery(query),
      { initialProps: { query: "(min-width: 768px)" } },
    );
    expect(result.current).toBe(true);

    rerender({ query: "(min-width: 1024px)" });
    expect(result.current).toBe(false);
    expect(mock1.mql.removeEventListener).toHaveBeenCalled();
  });
});
