import type { Color, Scale } from "../DesignSystemUtils";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
}

export function Radio({
  label,
  scale = "md",
  color = "red",
  ...props
}: RadioProps) {
  const gapScaleMap: Record<Scale, string> = {
    sm: "gap-x-2",
    md: "gap-x-3",
  };

  const radioScaleMap: Record<Scale, string> = {
    sm: "size-3.5",
    md: "size-4",
  };

  const textScaleMap: Record<Scale, string> = {
    sm: "text-xs",
    md: "text-sm/6",
  };

  const colorMaps: Record<Color, string> = {
    red: "checked:border-red-600 checked:bg-red-600 focus-visible:outline-red-600",
    orange:
      "checked:border-orange-600 checked:bg-orange-600 focus-visible:outline-orange-600",
    amber:
      "checked:border-amber-600 checked:bg-amber-600 focus-visible:outline-amber-600",
    yellow:
      "checked:border-yellow-600 checked:bg-yellow-600 focus-visible:outline-yellow-600",
    lime: "checked:border-lime-600 checked:bg-lime-600 focus-visible:outline-lime-600",
    green:
      "checked:border-green-600 checked:bg-green-600 focus-visible:outline-green-600",
    emerald:
      "checked:border-emerald-600 checked:bg-emerald-600 focus-visible:outline-emerald-600",
    teal: "checked:border-teal-600 checked:bg-teal-600 focus-visible:outline-teal-600",
    cyan: "checked:border-cyan-600 checked:bg-cyan-600 focus-visible:outline-cyan-600",
    sky: "checked:border-sky-600 checked:bg-sky-600 focus-visible:outline-sky-600",
    blue: "checked:border-blue-600 checked:bg-blue-600 focus-visible:outline-blue-600",
    indigo:
      "checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-indigo-600",
    violet:
      "checked:border-violet-600 checked:bg-violet-600 focus-visible:outline-violet-600",
    purple:
      "checked:border-purple-600 checked:bg-purple-600 focus-visible:outline-purple-600",
    fuchsia:
      "checked:border-fuchsia-600 checked:bg-fuchsia-600 focus-visible:outline-fuchsia-600",
    pink: "checked:border-pink-600 checked:bg-pink-600 focus-visible:outline-pink-600",
    rose: "checked:border-rose-600 checked:bg-rose-600 focus-visible:outline-rose-600",
    slate:
      "checked:border-slate-600 checked:bg-slate-600 focus-visible:outline-slate-600",
    gray: "checked:border-gray-600 checked:bg-gray-600 focus-visible:outline-gray-600",
    zinc: "checked:border-zinc-600 checked:bg-zinc-600 focus-visible:outline-zinc-600",
    neutral:
      "checked:border-neutral-600 checked:bg-neutral-600 focus-visible:outline-neutral-600",
    stone:
      "checked:border-stone-600 checked:bg-stone-600 focus-visible:outline-stone-600",
  };

  return (
    <div className={`flex items-center ${gapScaleMap[scale]}`}>
      <input
        type="radio"
        className={`relative appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-amber-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden ${radioScaleMap[scale]} ${colorMaps[color]}`}
        {...props}
      />
      <label
        className={`block text-gray-900 dark:text-white font-sans ${textScaleMap[scale]}`}
      >
        {label}
      </label>
    </div>
  );
}
