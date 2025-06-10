import clsx from "clsx";

import type { Color, Scale } from "../DesignSystemUtils";

interface PillboxProps {
  label: string;
  scale?: Scale;
  color?: Color;
  className?: string;
}

export function Pillbox({
  label,
  color = "red",
  scale = "md",
  className,
}: PillboxProps) {
  const colorMap: Record<Color, string> = {
    red: "cs:outline-red-400 cs:bg-red-200 cs:text-red-800",
    orange: "cs:outline-orange-400 cs:bg-orange-200 cs:text-orange-800",
    amber: "cs:outline-amber-400 cs:bg-amber-200 cs:text-amber-800",
    yellow: "cs:outline-yellow-400 cs:bg-yellow-200 cs:text-yellow-800",
    lime: "cs:outline-lime-400 cs:bg-lime-200 cs:text-lime-800",
    green: "cs:outline-green-400 cs:bg-green-200 cs:text-green-800",
    emerald: "cs:outline-emerald-400 cs:bg-emerald-200 cs:text-emerald-800",
    teal: "cs:outline-teal-400 cs:bg-teal-200 cs:text-teal-800",
    cyan: "cs:outline-cyan-400 cs:bg-cyan-200 cs:text-cyan-800",
    sky: "cs:outline-sky-400 cs:bg-sky-200 cs:text-sky-800",
    blue: "cs:outline-blue-400 cs:bg-blue-200 cs:text-blue-800",
    indigo: "cs:outline-indigo-400 cs:bg-indigo-200 cs:text-indigo-800",
    violet: "cs:outline-violet-400 cs:bg-violet-200 cs:text-violet-800",
    purple: "cs:outline-purple-400 cs:bg-purple-200 cs:text-purple-800",
    fuchsia: "cs:outline-fuchsia-400 cs:bg-fuchsia-200 cs:text-fuchsia-800",
    pink: "cs:outline-pink-400 cs:bg-pink-200 cs:text-pink-800",
    rose: "cs:outline-rose-400 cs:bg-rose-200 cs:text-rose-800",
    slate: "cs:outline-slate-400 cs:bg-slate-200 cs:text-slate-800",
    gray: "cs:outline-gray-400 cs:bg-gray-200 cs:text-gray-800",
    zinc: "cs:outline-zinc-400 cs:bg-zinc-200 cs:text-zinc-800",
    neutral: "cs:outline-neutral-400 cs:bg-neutral-200 cs:text-neutral-800",
    stone: "cs:outline-stone-400 cs:bg-stone-200 cs:text-stone-800",
  };

  const scaleMap: Record<Scale, string> = {
    sm: "cs:px-2 cs:py-0.5 cs:text-[0.6rem]",
    md: "cs:px-2 cs:py-1 cs:text-xs",
  };

  const baseClasses =
    "cs:inline-block cs:font-medium cs:rounded-full cs:outline-1 cs:font-sans";
  return (
    <span
      className={clsx(baseClasses, scaleMap[scale], colorMap[color], className)}
    >
      {label}
    </span>
  );
}
