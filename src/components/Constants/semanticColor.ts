import type { Color, CustomColor, PresetColor } from "../DesignSystemUtils";

export type SemanticColorName = "success" | "warning" | "error" | "info";

export type SemanticColorMap = Record<SemanticColorName, PresetColor | CustomColor>;

const SEMANTIC_NAMES: ReadonlySet<string> = new Set([
  "success", "warning", "error", "info",
]);

const DEFAULT_SEMANTIC_MAP: SemanticColorMap = {
  success: "green",
  warning: "amber",
  error: "red",
  info: "blue",
};

/** Check if a color value is a semantic color name. */
export function isSemanticColor(color: Color): color is SemanticColorName {
  return typeof color === "string" && SEMANTIC_NAMES.has(color);
}

/** Resolve a semantic color name to a preset or custom color. */
export function resolveSemanticColor(
  name: SemanticColorName,
  map?: SemanticColorMap,
): PresetColor | CustomColor {
  const resolvedMap = map ?? DEFAULT_SEMANTIC_MAP;
  return resolvedMap[name];
}

/** Create a semantic color map with optional overrides merged with defaults. */
export function createSemanticColorMap(
  overrides?: Partial<SemanticColorMap>,
): SemanticColorMap {
  return { ...DEFAULT_SEMANTIC_MAP, ...overrides };
}
