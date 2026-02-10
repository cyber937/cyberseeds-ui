import { memo, useId } from "react";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { checkedFocusOutlineColorMap } from "../Constants/colorMap";
import { customColorToCSSVars, isCustomColor, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { TRANSITION_SLOW } from "../Constants/designTokens";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color"> {
  label?: string;
  scale?: Scale;
  color?: Color;
}

const gapScaleMap: Record<Scale, string> = {
  xs: "cs:gap-x-1.5",
  sm: "cs:gap-x-2",
  md: "cs:gap-x-3",
  lg: "cs:gap-x-3",
};

const radioScaleMap: Record<Scale, string> = {
  xs: "cs:size-3",
  sm: "cs:size-3.5",
  md: "cs:size-4",
  lg: "cs:size-5",
};

const textScaleMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem]",
  sm: "cs:text-xs",
  md: "cs:text-sm/6",
  lg: "cs:text-base",
};

export const Radio = memo(function Radio({
  label,
  scale = "md",
  color = "blue",
  id: externalId,
  ...props
}: RadioProps) {
  const generatedId = useId();
  const id = externalId ?? generatedId;

  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = resolveColor(contextUIColor ?? color);

  const customStyle = isCustomColor(finalUIColor)
    ? customColorToCSSVars(finalUIColor)
    : undefined;

  return (
    <div className={`cs:flex cs:items-center ${gapScaleMap[scale]}`}>
      <input
        id={id}
        type="radio"
        style={customStyle}
        className={`cs:relative cs:appearance-none cs:rounded-full cs:border cs:border-gray-200 cs:dark:border-gray-600 cs:bg-white cs:dark:bg-gray-700 ${isPresetColor(finalUIColor) && LIGHT_BG_COLORS.has(finalUIColor) ? "cs:before:bg-gray-900" : "cs:before:bg-white"} cs:before:absolute cs:before:inset-1 cs:before:rounded-full cs:not-checked:before:hidden cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:disabled:border-gray-300 cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-800 cs:disabled:before:bg-gray-400 cs:forced-colors:appearance-auto cs:forced-colors:before:hidden ${TRANSITION_SLOW} ${radioScaleMap[scale]} ${isPresetColor(finalUIColor) ? checkedFocusOutlineColorMap[finalUIColor] : "cs-custom-checked"}`}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className={`cs:block cs:text-gray-900 cs:dark:text-gray-400 cs:font-sans ${textScaleMap[scale]}`}
        >
          {label}
        </label>
      )}
    </div>
  );
});
