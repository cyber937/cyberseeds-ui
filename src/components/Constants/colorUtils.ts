import type { Color, CustomColor, PresetColor } from "../DesignSystemUtils";
import { resolveCustomColor } from "./colorShadeGenerator";
import { isSemanticColor as isSemanticColorCheck, resolveSemanticColor } from "./semanticColor";
import type { SemanticColorMap } from "./semanticColor";

const PRESET_COLORS: ReadonlySet<string> = new Set([
  "red", "orange", "amber", "yellow",
  "lime", "green", "emerald", "teal",
  "cyan", "sky", "blue", "indigo",
  "violet", "purple", "fuchsia",
  "pink", "rose",
  "slate", "gray", "zinc", "neutral", "stone",
]);

export function isPresetColor(color: Color): color is PresetColor {
  return typeof color === "string" && PRESET_COLORS.has(color);
}

export function isCustomColor(color: Color): color is CustomColor {
  return typeof color === "object" && color !== null && "base" in color;
}

export function isSemanticColor(color: Color): color is "success" | "warning" | "error" | "info" {
  return isSemanticColorCheck(color);
}

/** Resolve a Color to a PresetColor or CustomColor (resolves semantic colors). */
export function resolveColor(color: Color, semanticMap?: SemanticColorMap): PresetColor | CustomColor {
  if (isSemanticColor(color)) {
    return resolveSemanticColor(color, semanticMap);
  }
  return color as PresetColor | CustomColor;
}

export function customColorToCSSVars(color: CustomColor, isDark?: boolean): React.CSSProperties {
  const resolved = resolveCustomColor(color);
  let effective = resolved;
  if (isDark && color.dark) {
    const darkColor: CustomColor = { base: resolved.base, ...color.dark };
    effective = resolveCustomColor(darkColor);
  }
  return {
    "--cs-ui-base": effective.base,
    "--cs-ui-hover": effective.hover,
    "--cs-ui-active": effective.active,
    "--cs-ui-focus": effective.focus,
    "--cs-ui-light": effective.light,
    "--cs-ui-lightText": effective.lightText,
    "--cs-ui-border": effective.border,
  } as React.CSSProperties;
}
