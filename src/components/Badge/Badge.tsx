import clsx from "clsx";
import { type ReactNode } from "react";
import { customColorToCSSVars, isPresetColor } from "../Constants/colorUtils";
import type { Color, PresetColor, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

type BadgeVariant = "solid" | "outline" | "dot";

interface BadgeProps {
  children?: ReactNode;
  variant?: BadgeVariant;
  color?: Color;
  scale?: Scale;
  max?: number;
  className?: string;
}

interface BadgeWrapperProps {
  children: ReactNode;
  className?: string;
}

const solidColorMap: Record<PresetColor, string> = {
  red: "cs:bg-red-600 cs:text-white",
  orange: "cs:bg-orange-600 cs:text-white",
  amber: "cs:bg-amber-600 cs:text-white",
  yellow: "cs:bg-yellow-500 cs:text-white",
  lime: "cs:bg-lime-600 cs:text-white",
  green: "cs:bg-green-600 cs:text-white",
  emerald: "cs:bg-emerald-600 cs:text-white",
  teal: "cs:bg-teal-600 cs:text-white",
  cyan: "cs:bg-cyan-600 cs:text-white",
  sky: "cs:bg-sky-600 cs:text-white",
  blue: "cs:bg-blue-600 cs:text-white",
  indigo: "cs:bg-indigo-600 cs:text-white",
  violet: "cs:bg-violet-600 cs:text-white",
  purple: "cs:bg-purple-600 cs:text-white",
  fuchsia: "cs:bg-fuchsia-600 cs:text-white",
  pink: "cs:bg-pink-600 cs:text-white",
  rose: "cs:bg-rose-600 cs:text-white",
  slate: "cs:bg-slate-600 cs:text-white",
  gray: "cs:bg-gray-600 cs:text-white",
  zinc: "cs:bg-zinc-600 cs:text-white",
  neutral: "cs:bg-neutral-600 cs:text-white",
  stone: "cs:bg-stone-600 cs:text-white",
};

const outlineColorMap: Record<PresetColor, string> = {
  red: "cs:border-red-400 cs:text-red-700 cs:dark:border-red-500 cs:dark:text-red-400",
  orange: "cs:border-orange-400 cs:text-orange-700 cs:dark:border-orange-500 cs:dark:text-orange-400",
  amber: "cs:border-amber-400 cs:text-amber-700 cs:dark:border-amber-500 cs:dark:text-amber-400",
  yellow: "cs:border-yellow-400 cs:text-yellow-700 cs:dark:border-yellow-500 cs:dark:text-yellow-400",
  lime: "cs:border-lime-400 cs:text-lime-700 cs:dark:border-lime-500 cs:dark:text-lime-400",
  green: "cs:border-green-400 cs:text-green-700 cs:dark:border-green-500 cs:dark:text-green-400",
  emerald: "cs:border-emerald-400 cs:text-emerald-700 cs:dark:border-emerald-500 cs:dark:text-emerald-400",
  teal: "cs:border-teal-400 cs:text-teal-700 cs:dark:border-teal-500 cs:dark:text-teal-400",
  cyan: "cs:border-cyan-400 cs:text-cyan-700 cs:dark:border-cyan-500 cs:dark:text-cyan-400",
  sky: "cs:border-sky-400 cs:text-sky-700 cs:dark:border-sky-500 cs:dark:text-sky-400",
  blue: "cs:border-blue-400 cs:text-blue-700 cs:dark:border-blue-500 cs:dark:text-blue-400",
  indigo: "cs:border-indigo-400 cs:text-indigo-700 cs:dark:border-indigo-500 cs:dark:text-indigo-400",
  violet: "cs:border-violet-400 cs:text-violet-700 cs:dark:border-violet-500 cs:dark:text-violet-400",
  purple: "cs:border-purple-400 cs:text-purple-700 cs:dark:border-purple-500 cs:dark:text-purple-400",
  fuchsia: "cs:border-fuchsia-400 cs:text-fuchsia-700 cs:dark:border-fuchsia-500 cs:dark:text-fuchsia-400",
  pink: "cs:border-pink-400 cs:text-pink-700 cs:dark:border-pink-500 cs:dark:text-pink-400",
  rose: "cs:border-rose-400 cs:text-rose-700 cs:dark:border-rose-500 cs:dark:text-rose-400",
  slate: "cs:border-slate-400 cs:text-slate-700 cs:dark:border-slate-500 cs:dark:text-slate-400",
  gray: "cs:border-gray-400 cs:text-gray-700 cs:dark:border-gray-500 cs:dark:text-gray-400",
  zinc: "cs:border-zinc-400 cs:text-zinc-700 cs:dark:border-zinc-500 cs:dark:text-zinc-400",
  neutral: "cs:border-neutral-400 cs:text-neutral-700 cs:dark:border-neutral-500 cs:dark:text-neutral-400",
  stone: "cs:border-stone-400 cs:text-stone-700 cs:dark:border-stone-500 cs:dark:text-stone-400",
};

const dotColorMap: Record<PresetColor, string> = {
  red: "cs:bg-red-500",
  orange: "cs:bg-orange-500",
  amber: "cs:bg-amber-500",
  yellow: "cs:bg-yellow-500",
  lime: "cs:bg-lime-500",
  green: "cs:bg-green-500",
  emerald: "cs:bg-emerald-500",
  teal: "cs:bg-teal-500",
  cyan: "cs:bg-cyan-500",
  sky: "cs:bg-sky-500",
  blue: "cs:bg-blue-500",
  indigo: "cs:bg-indigo-500",
  violet: "cs:bg-violet-500",
  purple: "cs:bg-purple-500",
  fuchsia: "cs:bg-fuchsia-500",
  pink: "cs:bg-pink-500",
  rose: "cs:bg-rose-500",
  slate: "cs:bg-slate-500",
  gray: "cs:bg-gray-500",
  zinc: "cs:bg-zinc-500",
  neutral: "cs:bg-neutral-500",
  stone: "cs:bg-stone-500",
};

function formatCount(count: ReactNode, max?: number): ReactNode {
  if (typeof count !== "number" || max === undefined) return count;
  return count > max ? `${max}+` : count;
}

export function Badge({
  children,
  variant = "solid",
  color = "blue",
  scale = "md",
  max,
  className,
}: BadgeProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;

  const customStyle = !isPresetColor(finalColor)
    ? customColorToCSSVars(finalColor)
    : undefined;

  if (variant === "dot") {
    return (
      <span
        style={customStyle}
        className={clsx(
          "cs:inline-block cs:rounded-full",
          scale === "sm" ? "cs:h-2 cs:w-2" : "cs:h-2.5 cs:w-2.5",
          isPresetColor(finalColor) ? dotColorMap[finalColor] : "cs-custom-badge-dot",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const displayContent = formatCount(children, max);

  return (
    <span
      style={customStyle}
      className={clsx(
        "cs:inline-flex cs:items-center cs:justify-center cs:rounded-full cs:font-sans cs:font-medium cs:leading-none",
        scale === "sm" ? "cs:px-1.5 cs:py-0.5 cs:text-[0.6rem] cs:min-w-4" : "cs:px-2 cs:py-0.5 cs:text-xs cs:min-w-5",
        variant === "solid" && (isPresetColor(finalColor) ? solidColorMap[finalColor] : "cs-custom-badge-solid"),
        variant === "outline" && "cs:border",
        variant === "outline" && (isPresetColor(finalColor) ? outlineColorMap[finalColor] : "cs-custom-badge-outline"),
        className,
      )}
    >
      {displayContent}
    </span>
  );
}

function BadgeWrapper({ children, className }: BadgeWrapperProps) {
  return (
    <div className={clsx("cs:relative cs:inline-flex", className)}>
      {children}
    </div>
  );
}

Badge.Wrapper = BadgeWrapper;
