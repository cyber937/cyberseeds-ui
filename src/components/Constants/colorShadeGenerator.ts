import type { CustomColor, ResolvedCustomColor } from "../DesignSystemUtils";

// ===== OKLCH Color Space Utilities =====

interface Oklch {
  l: number; // lightness 0-1
  c: number; // chroma 0+
  h: number; // hue 0-360
}

// sRGB → linear sRGB
function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

// linear sRGB → sRGB
function linearToSrgb(c: number): number {
  return c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

// linear sRGB → XYZ D65
function linearSrgbToXyz(r: number, g: number, b: number): [number, number, number] {
  return [
    0.4124564 * r + 0.3575761 * g + 0.1804375 * b,
    0.2126729 * r + 0.7151522 * g + 0.0721750 * b,
    0.0193339 * r + 0.1191920 * g + 0.9503041 * b,
  ];
}

// XYZ D65 → linear sRGB
function xyzToLinearSrgb(x: number, y: number, z: number): [number, number, number] {
  return [
     3.2404542 * x - 1.5371385 * y - 0.4985314 * z,
    -0.9692660 * x + 1.8760108 * y + 0.0415560 * z,
     0.0556434 * x - 0.2040259 * y + 1.0572252 * z,
  ];
}

// XYZ → OKLab
function xyzToOklab(x: number, y: number, z: number): [number, number, number] {
  const l_ = Math.cbrt(0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z);
  const m_ = Math.cbrt(0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z);
  const s_ = Math.cbrt(0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z);
  return [
    0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
  ];
}

// OKLab → XYZ
function oklabToXyz(L: number, a: number, b: number): [number, number, number] {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;
  return [
     1.2270138511 * l - 0.5577999807 * m + 0.2812561490 * s,
    -0.0405801784 * l + 1.1122568696 * m - 0.0716766787 * s,
    -0.0763812845 * l - 0.4214819784 * m + 1.5861632204 * s,
  ];
}

// OKLab → OKLCH
function oklabToOklch(L: number, a: number, b: number): Oklch {
  const c = Math.sqrt(a * a + b * b);
  let h = (Math.atan2(b, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return { l: L, c, h };
}

// OKLCH → OKLab
function oklchToOklab(oklch: Oklch): [number, number, number] {
  const hRad = (oklch.h * Math.PI) / 180;
  return [oklch.l, oklch.c * Math.cos(hRad), oklch.c * Math.sin(hRad)];
}

// ===== Parsing =====

function parseHex(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
}

function parseRgb(str: string): [number, number, number] {
  const match = str.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  if (!match) throw new Error(`Invalid rgb format: ${str}`);
  return [
    parseInt(match[1]) / 255,
    parseInt(match[2]) / 255,
    parseInt(match[3]) / 255,
  ];
}

function parseOklch(str: string): Oklch {
  const match = str.match(/oklch\(\s*([\d.]+)%?\s+([\d.]+)\s+([\d.]+)\s*\)/);
  if (!match) throw new Error(`Invalid oklch format: ${str}`);
  const l = parseFloat(match[1]);
  return {
    l: l > 1 ? l / 100 : l, // handle both 0-1 and 0-100 (percentage)
    c: parseFloat(match[2]),
    h: parseFloat(match[3]),
  };
}

/** Parse a color string (hex, rgb, oklch) to OKLCH. */
export function parseToOklch(color: string): Oklch {
  const trimmed = color.trim();
  if (trimmed.startsWith("oklch")) return parseOklch(trimmed);
  if (trimmed.startsWith("rgb")) {
    const [r, g, b] = parseRgb(trimmed);
    const [lr, lg, lb] = [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)];
    const [x, y, z] = linearSrgbToXyz(lr, lg, lb);
    const [L, a, bVal] = xyzToOklab(x, y, z);
    return oklabToOklch(L, a, bVal);
  }
  if (trimmed.startsWith("#") || /^[0-9a-fA-F]{3,6}$/.test(trimmed)) {
    const [r, g, b] = parseHex(trimmed);
    const [lr, lg, lb] = [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)];
    const [x, y, z] = linearSrgbToXyz(lr, lg, lb);
    const [L, a, bVal] = xyzToOklab(x, y, z);
    return oklabToOklch(L, a, bVal);
  }
  throw new Error(`Unsupported color format: ${color}`);
}

/** Convert OKLCH to CSS oklch() string. */
export function oklchToString(oklch: Oklch): string {
  const l = (oklch.l * 100).toFixed(1);
  const c = oklch.c.toFixed(3);
  const h = oklch.h.toFixed(1);
  return `oklch(${l}% ${c} ${h})`;
}

/** Convert OKLCH to hex string. */
export function oklchToHex(oklch: Oklch): string {
  const [L, a, b] = oklchToOklab(oklch);
  const [x, y, z] = oklabToXyz(L, a, b);
  const [lr, lg, lb] = xyzToLinearSrgb(x, y, z);
  const r = Math.round(Math.max(0, Math.min(1, linearToSrgb(lr))) * 255);
  const g = Math.round(Math.max(0, Math.min(1, linearToSrgb(lg))) * 255);
  const bVal = Math.round(Math.max(0, Math.min(1, linearToSrgb(lb))) * 255);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${bVal.toString(16).padStart(2, "0")}`;
}

// ===== Shade Generation =====

function adjustLightness(base: Oklch, dL: number, dC = 0): string {
  return oklchToString({
    l: Math.max(0, Math.min(1, base.l + dL)),
    c: Math.max(0, base.c + dC),
    h: base.h,
  });
}

/**
 * Generate a full set of color shades from a single base color string.
 * Accepts hex (#4f46e5), rgb(79, 70, 229), or oklch(...) formats.
 */
export function generateShadesFromBase(base: string): ResolvedCustomColor {
  const parsed = parseToOklch(base);
  return {
    base,
    hover: adjustLightness(parsed, +0.08),
    active: adjustLightness(parsed, +0.16),
    focus: base,
    light: adjustLightness(parsed, +0.35, -0.18),
    lightText: adjustLightness(parsed, -0.17),
    border: adjustLightness(parsed, +0.16),
  };
}

/**
 * Resolve a CustomColor to a ResolvedCustomColor, auto-generating missing shades from `base`.
 */
export function resolveCustomColor(color: CustomColor): ResolvedCustomColor {
  const generated = generateShadesFromBase(color.base);
  return {
    base: color.base,
    hover: color.hover ?? generated.hover,
    active: color.active ?? generated.active,
    focus: color.focus ?? generated.focus,
    light: color.light ?? generated.light,
    lightText: color.lightText ?? generated.lightText,
    border: color.border ?? generated.border,
  };
}
