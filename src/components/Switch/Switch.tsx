import clsx from "clsx";
import type { Color, Scale } from "../DesignSystemUtils";

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scale?: Scale;
  color?: Color;
  checked?: boolean;
  onLabel?: string;
  offLabel?: string;
  disabled?: boolean;
}

export function Switch({
  scale = "md",
  color = "red",
  checked = true,
  onLabel = "オン",
  offLabel = "オフ",
  disabled = false,
  ...props
}: SwitchProps) {
  const scaleMap: Record<Scale, string> = {
    sm: "w-6 h-4 p-0.5",
    md: "w-10 h-5 p-1",
  };

  const nobScaleMap: Record<Scale, string> = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
  };

  const checkedPositionMap: Record<Scale, string> = {
    sm: "translate-x-2",
    md: "translate-x-4",
  };

  const labelScaleMap: Record<Scale, string> = {
    sm: "text-xs",
    md: "text-sm/6",
  };

  const colorMap: Record<Color, string> = {
    red: "bg-red-600",
    orange: "bg-orange-600",
    amber: "bg-amber-600",
    yellow: "bg-yellow-600",
    lime: "bg-lime-600",
    green: "bg-green-600",
    emerald: "bg-emerald-600",
    teal: "bg-teal-600",
    cyan: "bg-cyan-600",
    sky: "bg-sky-600",
    blue: "bg-blue-600",
    indigo: "bg-indigo-600",
    violet: "bg-violet-600",
    purple: "bg-purple-600",
    fuchsia: "bg-fuchsia-600",
    pink: "bg-pink-600",
    rose: "bg-rose-600",
    slate: "bg-slate-600",
    gray: "bg-gray-600",
    zinc: "bg-zinc-600",
    neutral: "bg-neutral-600",
    stone: "bg-stone-600",
  };

  return (
    <div className="flex gap-1 items-center">
      <button
        type="button"
        disabled={disabled}
        className={clsx(
          `flex items-center rounded-full transition-colors duration-300 ${scaleMap[scale]}`,
          checked
            ? `${colorMap[color]} disabled:bg-amber-100`
            : "bg-gray-300 disabled:bg-gray-200"
        )}
        {...props}
      >
        <div
          className={clsx(
            `bg-white rounded-full shadow-md transform transition-transform duration-300 ${nobScaleMap[scale]}`,
            checked ? checkedPositionMap[scale] : "translate-x-0"
          )}
        />
      </button>
      <label
        className={clsx(
          `font-sans ${labelScaleMap[scale]}`,
          disabled ? "text-gray-400" : "text-black dark:text-gray-200"
        )}
      >
        {checked ? onLabel : offLabel}
      </label>
    </div>
  );
}
