import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTouchDevice } from "../useTouchDevice";

function setupMatchMedia(matches: boolean) {
  window.matchMedia = vi.fn(() => ({
    matches,
    media: "",
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

describe("useTouchDevice", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it("returns true on touch devices", () => {
    setupMatchMedia(true);
    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(true);
    expect(window.matchMedia).toHaveBeenCalledWith(
      "(hover: none) and (pointer: coarse)",
    );
  });

  it("returns false on non-touch devices", () => {
    setupMatchMedia(false);
    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(false);
  });
});
