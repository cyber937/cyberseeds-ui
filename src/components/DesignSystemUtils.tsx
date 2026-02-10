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
  hover: string;
  active: string;
  focus: string;
  light: string;
  lightText: string;
  border: string;
}

export type Color = PresetColor | CustomColor;
export type Scale = "sm" | "md";
export type Variant = "primary" | "secondary";
