import clsx from "clsx";
import { useId } from "react";
import { backgroundColorMap, focusOutlineColorMap } from "../Constants/colorMap";
import { customColorToCSSVars, isCustomColor, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING } from "../Constants/designTokens";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  scale?: Scale;
  color?: Color;
  checked?: boolean;
  onLabel?: string;
  offLabel?: string;
  disabled?: boolean;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:w-5 cs:h-3 cs:p-0.5",
  sm: "cs:w-6 cs:h-4 cs:p-0.5",
  md: "cs:w-10 cs:h-5 cs:p-1",
  lg: "cs:w-12 cs:h-6 cs:p-1",
};

const nobScaleMap: Record<Scale, string> = {
  xs: "cs:w-2 cs:h-2",
  sm: "cs:w-3 cs:h-3",
  md: "cs:w-4 cs:h-4",
  lg: "cs:w-5 cs:h-5",
};

const checkedPositionMap: Record<Scale, string> = {
  xs: "cs:translate-x-2",
  sm: "cs:translate-x-2",
  md: "cs:translate-x-4",
  lg: "cs:translate-x-5",
};

const labelScaleMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem]",
  sm: "cs:text-xs",
  md: "cs:text-sm/6",
  lg: "cs:text-base",
};

export function Switch({
  scale = "md",
  color = "blue",
  checked = false,
  onLabel = "オン",
  offLabel = "オフ",
  disabled = false,
  id: externalId,
  ...props
}: SwitchProps) {
  const generatedId = useId();
  const id = externalId ?? generatedId;
  const labelId = `${id}-label`;
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = resolveColor(contextUIColor ?? color);

  const customStyle = isCustomColor(finalUIColor) && checked
    ? customColorToCSSVars(finalUIColor)
    : undefined;

  return (
    <div className="cs:flex cs:gap-1 cs:items-center">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        disabled={disabled}
        style={customStyle}
        className={clsx(
          `cs:flex cs:items-center cs:rounded-full cs:transition-colors cs:duration-300 cs:motion-reduce:transition-none ${scaleMap[scale]}`,
          `${FOCUS_RING}`,
          isPresetColor(finalUIColor) ? focusOutlineColorMap[finalUIColor] : "cs-custom-focus-visible",
          checked
            ? isPresetColor(finalUIColor)
              ? `${backgroundColorMap[finalUIColor]} cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-700`
              : "cs-custom-bg cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-700"
            : "cs:bg-gray-300 cs:dark:bg-gray-600 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700"
        )}
        {...props}
      >
        <div
          className={clsx(
            `cs:bg-white cs:rounded-full cs:shadow-md cs:transform cs:transition-transform cs:duration-300 cs:motion-reduce:transition-none ${nobScaleMap[scale]}`,
            checked ? checkedPositionMap[scale] : "cs:translate-x-0"
          )}
        />
      </button>
      <label
        id={labelId}
        htmlFor={id}
        className={clsx(
          `cs:font-sans ${labelScaleMap[scale]}`,
          disabled ? "cs:text-gray-400" : "cs:text-black cs:dark:text-gray-400"
        )}
      >
        {checked ? onLabel : offLabel}
      </label>
    </div>
  );
}
