export type PresetColor =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone";

export interface CustomColor {
  base: string;
  hover?: string;
  active?: string;
  focus?: string;
  light?: string;
  lightText?: string;
  border?: string;
  dark?: Partial<Omit<CustomColor, "dark">>;
}

export interface ResolvedCustomColor {
  base: string;
  hover: string;
  active: string;
  focus: string;
  light: string;
  lightText: string;
  border: string;
}

export type SemanticColor = "success" | "warning" | "error" | "info";
export type Color = PresetColor | CustomColor | SemanticColor;
/**
 * ラベルを入力の上に置くか、左に置くか。
 *
 * 絞り込みの並び（「年度 [2026 ▾]」など）では左に置きたい。
 * これが無いと、呼び出し側が label prop をやめて <label> を手書きし、
 * htmlFor を書き忘れてラベルが入力に届かなくなる。
 */
export type LabelPlacement = "top" | "start";

export type Scale = "xs" | "sm" | "md" | "lg";
export type Variant = "primary" | "secondary";
