import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useReducedMotion } from "./useReducedMotion";

describe("useReducedMotion", () => {
  let listeners: Array<(e: MediaQueryListEvent) => void> = [];

  function mockMatchMedia(matches: boolean) {
    listeners = [];
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches,
        media: query,
        onchange: null,
        addEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) =>
          listeners.push(fn),
        removeEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => {
          const idx = listeners.indexOf(fn);
          if (idx >= 0) listeners.splice(idx, 1);
        },
        dispatchEvent: vi.fn(),
      })),
    });
  }

  afterEach(() => {
    listeners = [];
  });

  it("returns false when prefers-reduced-motion is not set", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it("returns true when prefers-reduced-motion: reduce is active", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it("updates when preference changes", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);

    act(() => {
      listeners.forEach((fn) =>
        fn({ matches: true } as MediaQueryListEvent),
      );
    });

    expect(result.current).toBe(true);
  });

  it("cleans up listener on unmount", () => {
    mockMatchMedia(false);
    const { unmount } = renderHook(() => useReducedMotion());
    expect(listeners).toHaveLength(1);

    unmount();
    expect(listeners).toHaveLength(0);
  });
});
