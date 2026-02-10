import clsx from "clsx";
import { customColorToCSSVars, isPresetColor } from "../Constants/colorUtils";
import type { Color, PresetColor, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface SpinnerProps {
  scale?: Scale;
  color?: Color;
  label?: string;
  className?: string;
}

const textColorMap: Record<PresetColor, string> = {
  red: "cs:text-red-600",
  orange: "cs:text-orange-600",
  amber: "cs:text-amber-600",
  yellow: "cs:text-yellow-600",
  lime: "cs:text-lime-600",
  green: "cs:text-green-600",
  emerald: "cs:text-emerald-600",
  teal: "cs:text-teal-600",
  cyan: "cs:text-cyan-600",
  sky: "cs:text-sky-600",
  blue: "cs:text-blue-600",
  indigo: "cs:text-indigo-600",
  violet: "cs:text-violet-600",
  purple: "cs:text-purple-600",
  fuchsia: "cs:text-fuchsia-600",
  pink: "cs:text-pink-600",
  rose: "cs:text-rose-600",
  slate: "cs:text-slate-600",
  gray: "cs:text-gray-600",
  zinc: "cs:text-zinc-600",
  neutral: "cs:text-neutral-600",
  stone: "cs:text-stone-600",
};

const sizeMap: Record<Scale, string> = {
  sm: "cs:h-4 cs:w-4",
  md: "cs:h-6 cs:w-6",
};

export function Spinner({
  scale = "md",
  color = "blue",
  label = "Loading",
  className,
}: SpinnerProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;

  const customStyle = !isPresetColor(finalColor)
    ? customColorToCSSVars(finalColor)
    : undefined;

  return (
    <svg
      role="status"
      aria-label={label}
      style={customStyle}
      className={clsx(
        "cs:animate-spin",
        sizeMap[scale],
        isPresetColor(finalColor) ? textColorMap[finalColor] : "cs-custom-spinner",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="cs:opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="cs:opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
