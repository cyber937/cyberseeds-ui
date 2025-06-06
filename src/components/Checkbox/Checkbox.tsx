import type { Color, Scale } from "../DesignSystemUtils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
}

export function Checkbox({
  scale = "md",
  color = "red",
  label = "checkbox",
  ...props
}: CheckboxProps) {
  const colorMaps: Record<Color, string> = {
    red: "checked:border-red-600 checked:bg-red-600 indeterminate:border-red-600 indeterminate:bg-red-600 focus-visible:outline-red-600",
    orange:
      "checked:border-orange-600 checked:bg-orange-600 indeterminate:border-orange-600 indeterminate:bg-orange-600 focus-visible:outline-orange-600",
    amber:
      "checked:border-amber-600 checked:bg-amber-600 indeterminate:border-amber-600 indeterminate:bg-amber-600 focus-visible:outline-amber-600",
    yellow:
      "checked:border-yellow-600 checked:bg-yellow-600 indeterminate:border-yellow-600 indeterminate:bg-yellow-600 focus-visible:outline-yellow-600",
    lime: "checked:border-lime-600 checked:bg-lime-600 indeterminate:border-lime-600 indeterminate:bg-lime-600 focus-visible:outline-lime-600",
    green:
      "checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline-green-600",
    emerald:
      "checked:border-emerald-600 checked:bg-emerald-600 indeterminate:border-emerald-600 indeterminate:bg-emerald-600 focus-visible:outline-emerald-600",
    teal: "checked:border-teal-600 checked:bg-teal-600 indeterminate:border-teal-600 indeterminate:bg-teal-600 focus-visible:outline-teal-600",
    cyan: "checked:border-cyan-600 checked:bg-cyan-600 indeterminate:border-cyan-600 indeterminate:bg-cyan-600 focus-visible:outline-cyan-600",
    sky: "checked:border-sky-600 checked:bg-sky-600 indeterminate:border-sky-600 indeterminate:bg-sky-600 focus-visible:outline-sky-600",
    blue: "checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-blue-600",
    indigo:
      "checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-indigo-600",
    violet:
      "checked:border-violet-600 checked:bg-violet-600 indeterminate:border-violet-600 indeterminate:bg-violet-600 focus-visible:outline-violet-600",
    purple:
      "checked:border-purple-600 checked:bg-purple-600 indeterminate:border-purple-600 indeterminate:bg-purple-600 focus-visible:outline-purple-600",
    fuchsia:
      "checked:border-fuchsia-600 checked:bg-fuchsia-600 indeterminate:border-fuchsia-600 indeterminate:bg-fuchsia-600 focus-visible:outline-fuchsia-600",
    pink: "checked:border-pink-600 checked:bg-pink-600 indeterminate:border-pink-600 indeterminate:bg-pink-600 focus-visible:outline-pink-600",
    rose: "checked:border-rose-600 checked:bg-rose-600 indeterminate:border-rose-600 indeterminate:bg-rose-600 focus-visible:outline-rose-600",
    slate:
      "checked:border-slate-600 checked:bg-slate-600 indeterminate:border-slate-600 indeterminate:bg-slate-600 focus-visible:outline-slate-600",
    gray: "checked:border-gray-600 checked:bg-gray-600 indeterminate:border-gray-600 indeterminate:bg-gray-600 focus-visible:outline-gray-600",
    zinc: "checked:border-zinc-600 checked:bg-zinc-600 indeterminate:border-zinc-600 indeterminate:bg-zinc-600 focus-visible:outline-zinc-600",
    neutral:
      "checked:border-neutral-600 checked:bg-neutral-600 indeterminate:border-neutral-600 indeterminate:bg-neutral-600 focus-visible:outline-neutral-600",
    stone:
      "checked:border-stone-600 checked:bg-stone-600 indeterminate:border-stone-600 indeterminate:bg-stone-600 focus-visible:outline-stone-600",
  };

  const gapScaleMap: Record<Scale, string> = {
    sm: "gap-x-2",
    md: "gap-x-3",
  };

  const checkBoxScaleMap: Record<Scale, string> = {
    sm: "size-3.5",
    md: "size-4",
  };

  const iconScaleMap: Record<Scale, string> = {
    sm: "size-3",
    md: "size-3.5",
  };

  const textScaleMap: Record<Scale, string> = {
    sm: "text-xs",
    md: "text-sm/6",
  };

  return (
    <div className={`flex ${gapScaleMap[scale]}`}>
      <div className="flex h-6 shrink-0 items-center">
        <div className={`group grid grid-cols-1 ${checkBoxScaleMap[scale]}`}>
          <input
            type="checkbox"
            className={`col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2  disabled:border-gray-300 disabled:bg-amber-100 disabled:checked:bg-amber-100 forced-colors:appearance-auto ${colorMaps[color]}`}
            {...props}
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className={`pointer-events-none col-start-1 row-start-1 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 ${iconScaleMap[scale]}`}
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </div>
      <div className="text-sm/6">
        <label className={`font-sans dark:text-white ${textScaleMap[scale]}`}>
          {label}
        </label>
      </div>
    </div>
  );
}
