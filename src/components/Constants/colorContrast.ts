import type { PresetColor } from "../DesignSystemUtils";

/**
 * Colors whose -600 shade background does not meet WCAG AA (4.5:1)
 * contrast ratio with white text. These colors should use dark text
 * (gray-900) instead of white for solid backgrounds.
 */
export const LIGHT_BG_COLORS: ReadonlySet<PresetColor> = new Set([
  "yellow",
  "lime",
  "amber",
]);
