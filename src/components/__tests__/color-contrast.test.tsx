import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { LIGHT_BG_COLORS, contrastRatio, needsDarkText } from "../Constants/colorContrast";
import { Button } from "../Button/Button";
import { UIColorProvider } from "../UIColorProvider/UIColorContext";
import { PRESET_COLOR_VARS } from "../Constants/presetColorVars";
import type { PresetColor } from "../DesignSystemUtils";

const ALL_PRESET_COLORS = Object.keys(PRESET_COLOR_VARS) as PresetColor[];
import { Switch } from "../Switch/Switch";
import { PillBox } from "../PillBox/PillBox";

/**
 * LIGHT_BG_COLORS は手で並べた一覧ではなく、実際の値から求めている。
 * 以前は amber / yellow / lime の 3 色だけを手で挙げていたが、測ると
 * orange / green / emerald / teal / cyan / sky も白文字では AA に届いていなかった。
 */
describe("LIGHT_BG_COLORS", () => {
  it("白文字で AA に届かない色をすべて含む", () => {
    for (const c of ALL_PRESET_COLORS) {
      expect(LIGHT_BG_COLORS.has(c)).toBe(
        contrastRatio("#ffffff", PRESET_COLOR_VARS[c].base) < 4.5,
      );
    }
  });

  it("白文字で足りる色は含まない", () => {
    for (const c of ["blue", "red", "purple", "gray", "slate"] as const) {
      expect(LIGHT_BG_COLORS.has(c)).toBe(false);
    }
  });

  it("以前の一覧に無かった 6 色も入っている（取りこぼしていた分）", () => {
    for (const c of ["orange", "green", "emerald", "teal", "cyan", "sky"] as const) {
      expect(LIGHT_BG_COLORS.has(c)).toBe(true);
    }
  });
});

/** 22 色すべてが、通常時もホバー時も押下中も AA を満たすこと。 */
describe("プリセット 22 色の実測", () => {
  it.each(ALL_PRESET_COLORS)("%s は base / hover / active すべて AA を満たす", (color) => {
    const text = LIGHT_BG_COLORS.has(color) ? "#030712" : "#ffffff";
    const shades = PRESET_COLOR_VARS[color];
    for (const key of ["base", "hover", "active"] as const) {
      expect(contrastRatio(text, shades[key])).toBeGreaterThanOrEqual(4.5);
    }
  });
});

describe("Switch thumb contrast on light backgrounds", () => {
  const lightColors = ["amber", "yellow", "lime"] as const;
  // green は白文字では 3.22:1 しかなく、濃い文字側に移った
  const darkColors = ["blue", "red", "purple", "indigo"] as const;

  it.each(lightColors)(
    "uses dark thumb (gray-950) when checked with %s background",
    (color) => {
      const { container } = render(<Switch checked color={color} />);
      const thumb = container.querySelector('[role="switch"] > div');
      expect(thumb?.className).toContain("cs:bg-gray-950");
      expect(thumb?.className).not.toContain("cs:bg-white");
    },
  );

  it.each(darkColors)(
    "keeps white thumb when checked with %s background",
    (color) => {
      const { container } = render(<Switch checked color={color} />);
      const thumb = container.querySelector('[role="switch"] > div');
      expect(thumb?.className).toContain("cs:bg-white");
      expect(thumb?.className).not.toContain("cs:bg-gray-950");
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

/**
 * 自前の色（CustomColor）は、以前は明るさに関係なく必ず白文字になっていた。
 * 一覧に載っているかどうかだけで判断していたため。
 */
describe("自前の色（CustomColor）", () => {
  it("明るい自前色は濃い文字になる", () => {
    // このアプリの主色。白文字では 3.08:1 しかない
    expect(needsDarkText({ base: "#4b99d6" })).toBe(true);
  });

  it("暗い自前色は白文字のまま", () => {
    expect(needsDarkText({ base: "#065ea2" })).toBe(false);
  });

  it("Button が自前色でも濃い文字を選ぶ", () => {
    const { container } = render(
      <UIColorProvider initialColor={{ base: "#4b99d6" }}>
        <Button>押す</Button>
      </UIColorProvider>,
    );
    expect(container.querySelector("button")?.className).toContain("cs:text-gray-950");
  });

  it("解釈できない色は今までどおり白文字（落ちない）", () => {
    expect(needsDarkText({ base: "rebeccapurple" })).toBe(false);
  });

  it("semantic 色も実際の値で判断する", () => {
    // warning は amber 系。白文字では足りない
    expect(needsDarkText("warning")).toBe(true);
    expect(needsDarkText("error")).toBe(false);
  });
});
