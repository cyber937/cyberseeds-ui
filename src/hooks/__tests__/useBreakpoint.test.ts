import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useBreakpoint, BREAKPOINTS } from "../useBreakpoint";

function setupMatchMedia(width: number) {
  window.matchMedia = vi.fn((query: string) => {
    const match = query.match(/\(min-width:\s*(\d+(?:\.\d+)?)px\)/);
    const minWidth = match ? parseFloat(match[1]) : 0;
    return {
      matches: width >= minWidth,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    } as unknown as MediaQueryList;
  });
}

describe("useBreakpoint", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it("returns null for viewport below sm (< 640px)", () => {
    setupMatchMedia(375);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBeNull();
  });

  it('returns "sm" for viewport 640-767px', () => {
    setupMatchMedia(640);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("sm");
  });

  it('returns "md" for viewport 768-1023px', () => {
    setupMatchMedia(768);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("md");
  });

  it('returns "lg" for viewport 1024-1279px', () => {
    setupMatchMedia(1024);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("lg");
  });

  it('returns "xl" for viewport 1280-1535px', () => {
    setupMatchMedia(1280);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("xl");
  });

  it('returns "2xl" for viewport >= 1536px', () => {
    setupMatchMedia(1536);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("2xl");
  });

  it("exports BREAKPOINTS with correct values", () => {
    expect(BREAKPOINTS).toEqual({
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    });
  });
});
