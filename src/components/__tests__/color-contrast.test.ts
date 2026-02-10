import { describe, it, expect } from "vitest";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";

describe("LIGHT_BG_COLORS", () => {
  it("contains yellow, lime, and amber", () => {
    expect(LIGHT_BG_COLORS.has("yellow")).toBe(true);
    expect(LIGHT_BG_COLORS.has("lime")).toBe(true);
    expect(LIGHT_BG_COLORS.has("amber")).toBe(true);
  });

  it("does not contain dark colors", () => {
    expect(LIGHT_BG_COLORS.has("blue")).toBe(false);
    expect(LIGHT_BG_COLORS.has("red")).toBe(false);
    expect(LIGHT_BG_COLORS.has("green")).toBe(false);
    expect(LIGHT_BG_COLORS.has("purple")).toBe(false);
    expect(LIGHT_BG_COLORS.has("gray")).toBe(false);
  });

  it("has exactly 3 entries", () => {
    expect(LIGHT_BG_COLORS.size).toBe(3);
  });
});
