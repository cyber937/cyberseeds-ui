import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useBodyScrollLock } from "../useBodyScrollLock";

describe("useBodyScrollLock", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("sets body overflow to hidden when locked", () => {
    renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("does not modify body overflow when not locked", () => {
    document.body.style.overflow = "auto";
    renderHook(() => useBodyScrollLock(false));
    expect(document.body.style.overflow).toBe("auto");
  });

  it("restores original overflow on unmount", () => {
    document.body.style.overflow = "auto";
    const { unmount } = renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.overflow).toBe("hidden");

    unmount();
    expect(document.body.style.overflow).toBe("auto");
  });

  it("restores empty overflow on unmount when original was empty", () => {
    document.body.style.overflow = "";
    const { unmount } = renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.overflow).toBe("hidden");

    unmount();
    expect(document.body.style.overflow).toBe("");
  });

  it("handles toggling lock state", () => {
    const { rerender } = renderHook(
      ({ locked }) => useBodyScrollLock(locked),
      { initialProps: { locked: false } },
    );
    expect(document.body.style.overflow).toBe("");

    rerender({ locked: true });
    expect(document.body.style.overflow).toBe("hidden");
  });
});
