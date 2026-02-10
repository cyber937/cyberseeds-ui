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
export type Scale = "xs" | "sm" | "md" | "lg";
export type Variant = "primary" | "secondary";
