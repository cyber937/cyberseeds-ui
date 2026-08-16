import type { Color, PresetColor } from "../DesignSystemUtils";
import { isPresetColor } from "./colorUtils";
import { whiteTextFails } from "./colorShadeGenerator";
import { isSemanticColor, resolveSemanticColor } from "./semanticColor";
import { PRESET_COLOR_VARS } from "./presetColorVars";

/**
 * 白文字だと WCAG AA（4.5:1）に届かないプリセット色。
 *
 * **手で並べた一覧ではなく、実際の値から求めている。** 以前は amber / yellow / lime の
 * 3 色だけを手で挙げていたが、測ってみると orange / green / emerald / teal / cyan / sky も
 * 届いていなかった（3.2〜4.0:1）。手で並べると取りこぼす。
 */
export const LIGHT_BG_COLORS: ReadonlySet<PresetColor> = new Set(
  (Object.keys(PRESET_COLOR_VARS) as PresetColor[]).filter((name) =>
    whiteTextFails(PRESET_COLOR_VARS[name].base),
  ),
);

/**
 * 背景色に白文字を載せて WCAG AA に届くか。届かないなら濃い文字を使う。
 *
 * プリセットも自前の色（CustomColor）も、**同じ規則で判断する**。
 * 以前は「手で並べた一覧に載っているか」だけで見ており、CustomColor は
 * どんなに明るくても必ず白文字になっていた。実際に `{ base: "#4b99d6" }` を
 * 主色にしている利用側で、ボタンの文字が白 3.08:1 になっていた。
 */
export function needsDarkText(color: Color | undefined): boolean {
  if (color === undefined) return false;

  const resolved = isSemanticColor(color) ? resolveSemanticColor(color) : color;

  if (isPresetColor(resolved)) {
    return LIGHT_BG_COLORS.has(resolved);
  }
  if (typeof resolved === "string") {
    // プリセットでも semantic でもない文字列（CSS の名前付き色など）
    return whiteTextFails(resolved);
  }
  return whiteTextFails(resolved.base);
}

/**
 * ソリッド背景に載せる文字色のクラス。
 *
 * 8 つの部品が `isPresetColor(c) && LIGHT_BG_COLORS.has(c)` を各自書いていた。
 * 同じ判断が散らばると、片方だけ直したときにずれる。
 */
export function solidTextClass(color: Color | undefined): string {
  return needsDarkText(color)
    ? "cs:text-gray-950"
    : "cs:text-white cs:dark:text-gray-200";
}

export { contrastRatio, whiteTextFails, AA_NORMAL, DARK_TEXT } from "./colorShadeGenerator";
