import clsx from "clsx"

import type { Scale, Color } from "../DesignSystemUtils"

interface PillBoxProps {
  label: string
  scale?: Scale;
  color?: Color
  className?: string
}

export function PillBox({ label, color = "red", scale = "md", className }: PillBoxProps) {

  const colorMap: Record<Color, string> = {
    red: "outline-red-400 bg-red-200 text-red-800",
    orange: "outline-orange-400 bg-orange-200 text-orange-800",
    amber: "outline-amber-400 bg-amber-200 text-amber-800",
    yellow: "outline-yellow-400 bg-yellow-200 text-yellow-800",
    lime: "outline-lime-400 bg-lime-200 text-lime-800",
    green: "outline-green-400 bg-green-200 text-green-800",
    emerald: "outline-emerald-400 bg-emerald-200 text-emerald-800",
    teal: "outline-teal-400 bg-teal-200 text-teal-800",
    cyan: "outline-cyan-400 bg-cyan-200 text-cyan-800",
    sky: "outline-sky-400 bg-sky-200 text-sky-800",
    blue: "outline-blue-400 bg-blue-200 text-blue-800",
    indigo: "outline-indigo-400 bg-indigo-200 text-indigo-800",
    violet: "outline-violet-400 bg-violet-200 text-violet-800",
    purple: "outline-purple-400 bg-purple-200 text-purple-800",
    fuchsia: "outline-fuchsia-400 bg-fuchsia-200 text-fuchsia-800",
    pink: "outline-pink-400 bg-pink-200 text-pink-800",
    rose: "outline-rose-400 bg-rose-200 text-rose-800",
    slate: "outline-slate-400 bg-slate-200 text-slate-800",
    gray: "outline-gray-400 bg-gray-200 text-gray-800",
    zinc: "outline-zinc-400 bg-zinc-200 text-zinc-800",
    neutral: "outline-neutral-400 bg-neutral-200 text-neutral-800",
    stone: "outline-stone-400 bg-stone-200 text-stone-800",
  }

  const scaleMap: Record<Scale, string> = {
    sm: 'px-2 py-0.5 text-[0.6rem]',
    md: 'px-2 py-1 text-xs'
  }

  const baseClasses = "inline-block font-medium rounded-full outline-1 font-sans"
  return (
    <span className={clsx(baseClasses, scaleMap[scale], colorMap[color], className)}>
      {label}
    </span>
  )
}
