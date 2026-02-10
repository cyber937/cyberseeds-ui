import { describe, expect, it } from "vitest";
import {
  parseToOklch,
  oklchToString,
  oklchToHex,
  generateShadesFromBase,
  resolveCustomColor,
} from "../Constants/colorShadeGenerator";

// ===== Helper regex patterns =====
const OKLCH_REGEX = /^oklch\(\d+(\.\d+)?% \d+(\.\d+)? \d+(\.\d+)?\)$/;
const HEX_REGEX = /^#[0-9a-f]{6}$/;

// ===== 1. hexToRgb (tested via parseToOklch + oklchToHex round-trip) =====
describe("hex parsing via parseToOklch", () => {
  it("parses a valid 6-digit hex color", () => {
    const oklch = parseToOklch("#4f46e5");
    expect(oklch).toBeDefined();
    expect(oklch.l).toBeGreaterThan(0);
    expect(oklch.l).toBeLessThanOrEqual(1);
    expect(oklch.c).toBeGreaterThanOrEqual(0);
    expect(oklch.h).toBeGreaterThanOrEqual(0);
    expect(oklch.h).toBeLessThan(360);
  });

  it("parses a valid 3-digit hex color", () => {
    const oklch = parseToOklch("#f00");
    expect(oklch).toBeDefined();
    expect(oklch.l).toBeGreaterThan(0);
    // Pure red should have a non-zero chroma
    expect(oklch.c).toBeGreaterThan(0);
  });

  it("parses a 3-digit hex without # prefix", () => {
    const oklch = parseToOklch("abc");
    expect(oklch).toBeDefined();
    expect(oklch.l).toBeGreaterThan(0);
  });

  it("parses a 6-digit hex without # prefix", () => {
    const oklch = parseToOklch("4f46e5");
    expect(oklch).toBeDefined();
    expect(oklch.l).toBeGreaterThan(0);
  });

  it("throws on an invalid hex string", () => {
    expect(() => parseToOklch("not-a-color")).toThrow("Unsupported color format");
  });

  it("throws on an empty string", () => {
    expect(() => parseToOklch("")).toThrow("Unsupported color format");
  });

  it("3-digit and expanded 6-digit hex produce the same result", () => {
    const from3 = parseToOklch("#fff");
    const from6 = parseToOklch("#ffffff");
    expect(from3.l).toBeCloseTo(from6.l, 5);
    expect(from3.c).toBeCloseTo(from6.c, 5);
    // hue can vary for achromatic colors, so skip hue comparison for white
  });
});

// ===== 2. srgbToLinear / linearToSrgb round-trip (tested via parseToOklch + oklchToHex) =====
describe("rgbToLinear / linearToRgb round-trip via oklch conversion", () => {
  it("round-trips a typical color with minimal loss", () => {
    const original = "#4f46e5";
    const oklch = parseToOklch(original);
    const hex = oklchToHex(oklch);
    // Allow +-1 in each channel due to rounding
    const origR = parseInt(original.slice(1, 3), 16);
    const origG = parseInt(original.slice(3, 5), 16);
    const origB = parseInt(original.slice(5, 7), 16);
    const roundR = parseInt(hex.slice(1, 3), 16);
    const roundG = parseInt(hex.slice(3, 5), 16);
    const roundB = parseInt(hex.slice(5, 7), 16);
    expect(Math.abs(origR - roundR)).toBeLessThanOrEqual(1);
    expect(Math.abs(origG - roundG)).toBeLessThanOrEqual(1);
    expect(Math.abs(origB - roundB)).toBeLessThanOrEqual(1);
  });

  it("round-trips pure red", () => {
    const oklch = parseToOklch("#ff0000");
    const hex = oklchToHex(oklch);
    expect(hex).toBe("#ff0000");
  });

  it("round-trips pure green", () => {
    const oklch = parseToOklch("#00ff00");
    const hex = oklchToHex(oklch);
    expect(hex).toBe("#00ff00");
  });

  it("round-trips pure blue", () => {
    const oklch = parseToOklch("#0000ff");
    const hex = oklchToHex(oklch);
    expect(hex).toBe("#0000ff");
  });

  it("round-trips a mid-gray", () => {
    const oklch = parseToOklch("#808080");
    const hex = oklchToHex(oklch);
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    expect(Math.abs(r - 128)).toBeLessThanOrEqual(1);
    expect(Math.abs(g - 128)).toBeLessThanOrEqual(1);
    expect(Math.abs(b - 128)).toBeLessThanOrEqual(1);
  });
});

// ===== 3. generateShadesFromBase =====
describe("generateShadesFromBase", () => {
  const SHADE_KEYS: (keyof ReturnType<typeof generateShadesFromBase>)[] = [
    "base",
    "hover",
    "active",
    "focus",
    "light",
    "lightText",
    "border",
  ];

  it("returns an object with all 7 required fields", () => {
    const shades = generateShadesFromBase("#4f46e5");
    for (const key of SHADE_KEYS) {
      expect(shades[key]).toBeDefined();
      expect(typeof shades[key]).toBe("string");
      expect(shades[key].length).toBeGreaterThan(0);
    }
  });

  it("base and focus equal the original input", () => {
    const input = "#4f46e5";
    const shades = generateShadesFromBase(input);
    expect(shades.base).toBe(input);
    expect(shades.focus).toBe(input);
  });

  it("hover, active, light, lightText, and border are valid oklch() strings", () => {
    const shades = generateShadesFromBase("#4f46e5");
    expect(shades.hover).toMatch(OKLCH_REGEX);
    expect(shades.active).toMatch(OKLCH_REGEX);
    expect(shades.light).toMatch(OKLCH_REGEX);
    expect(shades.lightText).toMatch(OKLCH_REGEX);
    expect(shades.border).toMatch(OKLCH_REGEX);
  });

  it("hover is lighter than base", () => {
    const base = parseToOklch("#4f46e5");
    const shades = generateShadesFromBase("#4f46e5");
    const hover = parseToOklch(shades.hover);
    expect(hover.l).toBeGreaterThan(base.l);
  });

  it("active is lighter than hover", () => {
    const shades = generateShadesFromBase("#4f46e5");
    const hover = parseToOklch(shades.hover);
    const active = parseToOklch(shades.active);
    expect(active.l).toBeGreaterThan(hover.l);
  });

  it("lightText is darker than base", () => {
    const base = parseToOklch("#4f46e5");
    const shades = generateShadesFromBase("#4f46e5");
    const lightText = parseToOklch(shades.lightText);
    expect(lightText.l).toBeLessThan(base.l);
  });

  it("works with rgb(...) input", () => {
    const shades = generateShadesFromBase("rgb(79, 70, 229)");
    for (const key of SHADE_KEYS) {
      expect(shades[key]).toBeDefined();
      expect(typeof shades[key]).toBe("string");
    }
  });

  it("works with oklch(...) input", () => {
    const shades = generateShadesFromBase("oklch(45.2% 0.313 264.1)");
    for (const key of SHADE_KEYS) {
      expect(shades[key]).toBeDefined();
      expect(typeof shades[key]).toBe("string");
    }
  });
});

// ===== 4. resolveCustomColor =====
describe("resolveCustomColor", () => {
  it("returns all fields as-is when fully specified", () => {
    const full = {
      base: "#4f46e5",
      hover: "#6366f1",
      active: "#818cf8",
      focus: "#4f46e5",
      light: "#e0e7ff",
      lightText: "#3730a3",
      border: "#818cf8",
    };
    const resolved = resolveCustomColor(full);
    expect(resolved.base).toBe(full.base);
    expect(resolved.hover).toBe(full.hover);
    expect(resolved.active).toBe(full.active);
    expect(resolved.focus).toBe(full.focus);
    expect(resolved.light).toBe(full.light);
    expect(resolved.lightText).toBe(full.lightText);
    expect(resolved.border).toBe(full.border);
  });

  it("auto-generates missing fields when only base is provided", () => {
    const resolved = resolveCustomColor({ base: "#4f46e5" });
    expect(resolved.base).toBe("#4f46e5");
    expect(resolved.hover).toMatch(OKLCH_REGEX);
    expect(resolved.active).toMatch(OKLCH_REGEX);
    expect(resolved.focus).toBe("#4f46e5");
    expect(resolved.light).toMatch(OKLCH_REGEX);
    expect(resolved.lightText).toMatch(OKLCH_REGEX);
    expect(resolved.border).toMatch(OKLCH_REGEX);
  });

  it("uses provided fields and generates only the missing ones", () => {
    const partial = {
      base: "#4f46e5",
      hover: "#custom-hover",
      // rest are undefined, so they should be auto-generated
    };
    const resolved = resolveCustomColor(partial);
    expect(resolved.hover).toBe("#custom-hover");
    expect(resolved.active).toMatch(OKLCH_REGEX);
    expect(resolved.focus).toBe("#4f46e5");
    expect(resolved.light).toMatch(OKLCH_REGEX);
    expect(resolved.lightText).toMatch(OKLCH_REGEX);
    expect(resolved.border).toMatch(OKLCH_REGEX);
  });

  it("auto-generated shades match generateShadesFromBase output", () => {
    const base = "#e11d48";
    const resolved = resolveCustomColor({ base });
    const generated = generateShadesFromBase(base);
    expect(resolved.hover).toBe(generated.hover);
    expect(resolved.active).toBe(generated.active);
    expect(resolved.focus).toBe(generated.focus);
    expect(resolved.light).toBe(generated.light);
    expect(resolved.lightText).toBe(generated.lightText);
    expect(resolved.border).toBe(generated.border);
  });

  it("ignores the dark override at the resolution level (dark is not in output)", () => {
    const withDark = {
      base: "#4f46e5",
      dark: {
        base: "#818cf8",
        hover: "#a5b4fc",
      },
    };
    const resolved = resolveCustomColor(withDark);
    // The resolved object should NOT contain a `dark` key —
    // ResolvedCustomColor only has the 7 shade fields
    expect(resolved).not.toHaveProperty("dark");
    // base should be the light-mode base, not the dark override
    expect(resolved.base).toBe("#4f46e5");
  });
});

// ===== 5. Edge cases =====
describe("edge cases", () => {
  describe("black (#000000)", () => {
    it("parses black correctly", () => {
      const oklch = parseToOklch("#000000");
      expect(oklch.l).toBeCloseTo(0, 2);
      expect(oklch.c).toBeCloseTo(0, 2);
    });

    it("generates shades from black", () => {
      const shades = generateShadesFromBase("#000000");
      expect(shades.base).toBe("#000000");
      expect(shades.focus).toBe("#000000");
      // hover should be slightly lighter than black
      const hover = parseToOklch(shades.hover);
      expect(hover.l).toBeGreaterThan(0);
    });

    it("round-trips black via oklchToHex", () => {
      const oklch = parseToOklch("#000000");
      const hex = oklchToHex(oklch);
      expect(hex).toBe("#000000");
    });
  });

  describe("white (#ffffff)", () => {
    it("parses white correctly", () => {
      const oklch = parseToOklch("#ffffff");
      expect(oklch.l).toBeCloseTo(1, 2);
      expect(oklch.c).toBeCloseTo(0, 2);
    });

    it("generates shades from white", () => {
      const shades = generateShadesFromBase("#ffffff");
      expect(shades.base).toBe("#ffffff");
      // lightText should be darker (lower L) since it subtracts from L
      const lightText = parseToOklch(shades.lightText);
      expect(lightText.l).toBeLessThan(1);
    });

    it("round-trips white via oklchToHex", () => {
      const oklch = parseToOklch("#ffffff");
      const hex = oklchToHex(oklch);
      expect(hex).toBe("#ffffff");
    });

    it("clamps lightness to 1.0 max when adjusting white upward", () => {
      const shades = generateShadesFromBase("#ffffff");
      // hover adjusts lightness by +0.08 — should be clamped at 1.0
      const hover = parseToOklch(shades.hover);
      expect(hover.l).toBeLessThanOrEqual(1);
    });
  });

  describe("rgb(...) input format", () => {
    it("parses rgb(0, 0, 0) as black", () => {
      const oklch = parseToOklch("rgb(0, 0, 0)");
      expect(oklch.l).toBeCloseTo(0, 2);
      expect(oklch.c).toBeCloseTo(0, 2);
    });

    it("parses rgb(255, 255, 255) as white", () => {
      const oklch = parseToOklch("rgb(255, 255, 255)");
      expect(oklch.l).toBeCloseTo(1, 2);
      expect(oklch.c).toBeCloseTo(0, 2);
    });

    it("rgb and hex for the same color produce the same OKLCH", () => {
      const fromHex = parseToOklch("#4f46e5");
      const fromRgb = parseToOklch("rgb(79, 70, 229)");
      expect(fromHex.l).toBeCloseTo(fromRgb.l, 5);
      expect(fromHex.c).toBeCloseTo(fromRgb.c, 5);
      expect(fromHex.h).toBeCloseTo(fromRgb.h, 3);
    });

    it("throws on invalid rgb format", () => {
      expect(() => parseToOklch("rgb(256, -1)")).toThrow("Invalid rgb format");
    });
  });

  describe("oklchToString", () => {
    it("produces a valid oklch() CSS string", () => {
      const oklch = parseToOklch("#4f46e5");
      const str = oklchToString(oklch);
      expect(str).toMatch(OKLCH_REGEX);
    });

    it("round-trips through oklchToString and parseToOklch", () => {
      const original = parseToOklch("#e11d48");
      const str = oklchToString(original);
      const parsed = parseToOklch(str);
      expect(parsed.l).toBeCloseTo(original.l, 2);
      expect(parsed.c).toBeCloseTo(original.c, 2);
      expect(parsed.h).toBeCloseTo(original.h, 0);
    });
  });

  describe("oklch(...) input format", () => {
    it("parses an oklch string with percentage lightness", () => {
      const oklch = parseToOklch("oklch(45.2% 0.313 264.1)");
      expect(oklch.l).toBeCloseTo(0.452, 2);
      expect(oklch.c).toBeCloseTo(0.313, 3);
      expect(oklch.h).toBeCloseTo(264.1, 1);
    });

    it("parses an oklch string with fractional lightness", () => {
      const oklch = parseToOklch("oklch(0.452 0.313 264.1)");
      expect(oklch.l).toBeCloseTo(0.452, 2);
      expect(oklch.c).toBeCloseTo(0.313, 3);
      expect(oklch.h).toBeCloseTo(264.1, 1);
    });
  });
});
