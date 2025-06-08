import clsx from "clsx";
import { backgroundColorMap } from "../Constants/colorMap";
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

  return (
    <div className="flex gap-1 items-center">
      <button
        type="button"
        disabled={disabled}
        className={clsx(
          `flex items-center rounded-full transition-colors duration-300 ${scaleMap[scale]}`,
          checked
            ? `${backgroundColorMap[color]} disabled:bg-amber-100`
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
