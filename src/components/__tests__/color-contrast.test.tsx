import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { Switch } from "../Switch/Switch";
import { PillBox } from "../PillBox/PillBox";

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

describe("Switch thumb contrast on light backgrounds", () => {
  const lightColors = ["amber", "yellow", "lime"] as const;
  const darkColors = ["blue", "red", "green", "purple"] as const;

  it.each(lightColors)(
    "uses dark thumb (gray-900) when checked with %s background",
    (color) => {
      const { container } = render(<Switch checked color={color} />);
      const thumb = container.querySelector('[role="switch"] > div');
      expect(thumb?.className).toContain("cs:bg-gray-900");
      expect(thumb?.className).not.toContain("cs:bg-white");
    },
  );

  it.each(darkColors)(
    "keeps white thumb when checked with %s background",
    (color) => {
      const { container } = render(<Switch checked color={color} />);
      const thumb = container.querySelector('[role="switch"] > div');
      expect(thumb?.className).toContain("cs:bg-white");
      expect(thumb?.className).not.toContain("cs:bg-gray-900");
    },
  );

  it.each(lightColors)(
    "keeps white thumb when unchecked with %s (track is gray, not colored)",
    (color) => {
      const { container } = render(<Switch checked={false} color={color} />);
      const thumb = container.querySelector('[role="switch"] > div');
      expect(thumb?.className).toContain("cs:bg-white");
    },
  );
});

describe("PillBox contrast on light backgrounds", () => {
  // PillBox uses pastel (-50) backgrounds with dark text via the CSS-var system
  // (--cs-ui-lightText resolves to the -700 shade per color, computed in the
  // color system). This is WCAG AA compliant across the full palette by design,
  // including amber/yellow/lime, so no LIGHT_BG_COLORS override is required.
  it.each(["amber", "yellow", "lime", "blue", "red"] as const)(
    "renders with the cs-pill class that wires text to --cs-ui-lightText for %s",
    (color) => {
      const { container } = render(<PillBox label="Test" color={color} />);
      const pill = container.querySelector("span");
      expect(pill?.className).toContain("cs-pill");
    },
  );
});
