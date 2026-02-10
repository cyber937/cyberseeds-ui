import clsx from "clsx";
import { customColorToCSSVars, isCustomColor, isPresetColor, resolveColor } from "../Constants/colorUtils";
import type { Color, PresetColor, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface SpinnerProps {
  scale?: Scale;
  color?: Color;
  label?: string;
  className?: string;
}

const textColorMap: Record<PresetColor, string> = {
  red: "cs:text-red-600 cs:dark:text-red-400",
  orange: "cs:text-orange-600 cs:dark:text-orange-400",
  amber: "cs:text-amber-600 cs:dark:text-amber-400",
  yellow: "cs:text-yellow-600 cs:dark:text-yellow-400",
  lime: "cs:text-lime-600 cs:dark:text-lime-400",
  green: "cs:text-green-600 cs:dark:text-green-400",
  emerald: "cs:text-emerald-600 cs:dark:text-emerald-400",
  teal: "cs:text-teal-600 cs:dark:text-teal-400",
  cyan: "cs:text-cyan-600 cs:dark:text-cyan-400",
  sky: "cs:text-sky-600 cs:dark:text-sky-400",
  blue: "cs:text-blue-600 cs:dark:text-blue-400",
  indigo: "cs:text-indigo-600 cs:dark:text-indigo-400",
  violet: "cs:text-violet-600 cs:dark:text-violet-400",
  purple: "cs:text-purple-600 cs:dark:text-purple-400",
  fuchsia: "cs:text-fuchsia-600 cs:dark:text-fuchsia-400",
  pink: "cs:text-pink-600 cs:dark:text-pink-400",
  rose: "cs:text-rose-600 cs:dark:text-rose-400",
  slate: "cs:text-slate-600 cs:dark:text-slate-400",
  gray: "cs:text-gray-600 cs:dark:text-gray-400",
  zinc: "cs:text-zinc-600 cs:dark:text-zinc-400",
  neutral: "cs:text-neutral-600 cs:dark:text-neutral-400",
  stone: "cs:text-stone-600 cs:dark:text-stone-400",
};

const sizeMap: Record<Scale, string> = {
  xs: "cs:h-3 cs:w-3",
  sm: "cs:h-4 cs:w-4",
  md: "cs:h-6 cs:w-6",
  lg: "cs:h-8 cs:w-8",
};

export function Spinner({
  scale = "md",
  color = "blue",
  label = "Loading",
  className,
}: SpinnerProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);

  const customStyle = isCustomColor(finalColor)
    ? customColorToCSSVars(finalColor)
    : undefined;

  return (
    <svg
      role="status"
      aria-label={label}
      style={customStyle}
      className={clsx(
        "cs:animate-spin cs:motion-reduce:animate-pulse",
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
