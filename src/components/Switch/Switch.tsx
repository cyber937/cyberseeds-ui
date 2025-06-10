import clsx from "clsx";
import { backgroundColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorContext";

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
  color = "blue",
  checked = true,
  onLabel = "オン",
  offLabel = "オフ",
  disabled = false,
  ...props
}: SwitchProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = contextUIColor ?? color;

  const scaleMap: Record<Scale, string> = {
    sm: "cs:w-6 cs:h-4 cs:p-0.5",
    md: "cs:w-10 cs:h-5 cs:p-1",
  };

  const nobScaleMap: Record<Scale, string> = {
    sm: "cs:w-3 cs:h-3",
    md: "cs:w-4 cs:h-4",
  };

  const checkedPositionMap: Record<Scale, string> = {
    sm: "cs:translate-x-2",
    md: "cs:translate-x-4",
  };

  const labelScaleMap: Record<Scale, string> = {
    sm: "cs:text-xs",
    md: "cs:text-sm/6",
  };

  return (
    <div className="cs:flex cs:gap-1 cs:items-center">
      <button
        type="button"
        disabled={disabled}
        className={clsx(
          `cs:flex cs:items-center cs:rounded-full cs:transition-colors cs:duration-300 ${scaleMap[scale]}`,
          checked
            ? `${backgroundColorMap[finalUIColor]} cs:disabled:bg-amber-100`
            : "cs:bg-gray-300 cs:disabled:bg-gray-200"
        )}
        {...props}
      >
        <div
          className={clsx(
            `cs:bg-white cs:rounded-full cs:shadow-md cs:transform cs:transition-transform cs:duration-300 ${nobScaleMap[scale]}`,
            checked ? checkedPositionMap[scale] : "cs:translate-x-0"
          )}
        />
      </button>
      <label
        className={clsx(
          `cs:font-sans ${labelScaleMap[scale]}`,
          disabled ? "cs:text-gray-400" : "cs:text-black cs:dark:text-gray-200"
        )}
      >
        {checked ? onLabel : offLabel}
      </label>
    </div>
  );
}
