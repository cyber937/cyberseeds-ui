import { describe, expect, it } from "vitest";
import {
  isSemanticColor,
  resolveSemanticColor,
  createSemanticColorMap,
} from "../Constants/semanticColor";
import type { CustomColor } from "../DesignSystemUtils";

describe("isSemanticColor", () => {
  it('returns true for "success"', () => {
    expect(isSemanticColor("success")).toBe(true);
  });

  it('returns true for "warning"', () => {
    expect(isSemanticColor("warning")).toBe(true);
  });

  it('returns true for "error"', () => {
    expect(isSemanticColor("error")).toBe(true);
  });

  it('returns true for "info"', () => {
    expect(isSemanticColor("info")).toBe(true);
  });

  it('returns false for preset color "blue"', () => {
    expect(isSemanticColor("blue")).toBe(false);
  });

  it('returns false for preset color "red"', () => {
    expect(isSemanticColor("red")).toBe(false);
  });

  it("returns false for a custom color object", () => {
    const custom: CustomColor = { base: "#ff0000", hover: "#cc0000" };
    expect(isSemanticColor(custom)).toBe(false);
  });

  it("returns false for an arbitrary string", () => {
    // Cast to bypass TypeScript since arbitrary strings are not part of Color,
    // but we still want to verify runtime behavior.
    expect(isSemanticColor("banana" as never)).toBe(false);
  });
});

describe("resolveSemanticColor", () => {
  describe("default mappings", () => {
    it('resolves "success" to "green"', () => {
      expect(resolveSemanticColor("success")).toBe("green");
    });

    it('resolves "warning" to "amber"', () => {
      expect(resolveSemanticColor("warning")).toBe("amber");
    });

    it('resolves "error" to "red"', () => {
      expect(resolveSemanticColor("error")).toBe("red");
    });

    it('resolves "info" to "blue"', () => {
      expect(resolveSemanticColor("info")).toBe("blue");
    });
  });

  describe("with custom map overrides using preset colors", () => {
    it("uses the overridden preset color", () => {
      const customMap = createSemanticColorMap({
        success: "emerald",
        error: "rose",
      });

      expect(resolveSemanticColor("success", customMap)).toBe("emerald");
      expect(resolveSemanticColor("error", customMap)).toBe("rose");
    });

    it("preserves non-overridden defaults in the custom map", () => {
      const customMap = createSemanticColorMap({
        success: "teal",
      });

      expect(resolveSemanticColor("success", customMap)).toBe("teal");
      expect(resolveSemanticColor("warning", customMap)).toBe("amber");
      expect(resolveSemanticColor("error", customMap)).toBe("red");
      expect(resolveSemanticColor("info", customMap)).toBe("blue");
    });
  });

  describe("with custom map using CustomColor objects", () => {
    it("resolves to a CustomColor object", () => {
      const customGreen: CustomColor = {
        base: "#16a34a",
        hover: "#15803d",
        active: "#166534",
      };
      const customMap = createSemanticColorMap({
        success: customGreen,
      });

      expect(resolveSemanticColor("success", customMap)).toEqual(customGreen);
    });

    it("returns the exact CustomColor reference", () => {
      const customRed: CustomColor = { base: "#dc2626" };
      const customMap = createSemanticColorMap({
        error: customRed,
      });

      expect(resolveSemanticColor("error", customMap)).toBe(customRed);
    });
  });
});

describe("createSemanticColorMap", () => {
  it("returns default mappings when called with no overrides", () => {
    const map = createSemanticColorMap();

    expect(map).toEqual({
      success: "green",
      warning: "amber",
      error: "red",
      info: "blue",
    });
  });

  it("returns default mappings when called with undefined", () => {
    const map = createSemanticColorMap(undefined);

    expect(map).toEqual({
      success: "green",
      warning: "amber",
      error: "red",
      info: "blue",
    });
  });

  it("merges partial overrides with defaults", () => {
    const map = createSemanticColorMap({
      success: "emerald",
      info: "cyan",
    });

    expect(map).toEqual({
      success: "emerald",
      warning: "amber",
      error: "red",
      info: "cyan",
    });
  });

  it("preserves non-overridden defaults", () => {
    const map = createSemanticColorMap({
      error: "rose",
    });

    expect(map.success).toBe("green");
    expect(map.warning).toBe("amber");
    expect(map.error).toBe("rose");
    expect(map.info).toBe("blue");
  });

  it("allows overriding all entries", () => {
    const map = createSemanticColorMap({
      success: "teal",
      warning: "orange",
      error: "rose",
      info: "sky",
    });

    expect(map).toEqual({
      success: "teal",
      warning: "orange",
      error: "rose",
      info: "sky",
    });
  });

  it("supports CustomColor objects as override values", () => {
    const customWarning: CustomColor = {
      base: "#f59e0b",
      hover: "#d97706",
    };
    const map = createSemanticColorMap({
      warning: customWarning,
    });

    expect(map.warning).toBe(customWarning);
    expect(map.success).toBe("green");
  });
});
