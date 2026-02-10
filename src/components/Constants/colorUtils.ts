import type { Color, CustomColor, PresetColor } from "../DesignSystemUtils";

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

export function customColorToCSSVars(color: CustomColor): React.CSSProperties {
  return {
    "--cs-ui-base": color.base,
    "--cs-ui-hover": color.hover,
    "--cs-ui-active": color.active,
    "--cs-ui-focus": color.focus,
    "--cs-ui-light": color.light,
    "--cs-ui-lightText": color.lightText,
    "--cs-ui-border": color.border,
  } as React.CSSProperties;
}
