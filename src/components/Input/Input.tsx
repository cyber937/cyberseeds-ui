import React, { useId } from "react";
import { focusOutlineColorMap } from "../Constants/colorMap";
import { customColorToCSSVars, isCustomColor, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING_INSET, TRANSITION_NORMAL } from "../Constants/designTokens";
import type { Color, Scale } from "../DesignSystemUtils";
import { useFormField } from "../FormField/FormFieldContext";
import { Label } from "../Label/Label";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color"> {
  id?: string;
  label?: string;
  scale?: Scale;
  color?: Color;
  require?: boolean;
  isInvalid?: boolean;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:px-1.5 cs:py-0.5 cs:text-[0.625rem]",
  sm: "cs:px-2 cs:py-1 cs:text-xs",
  md: "cs:px-3 cs:py-1.5 cs:text-sm/6",
  lg: "cs:px-4 cs:py-2 cs:text-base",
};

export function Input({
  id: externalId,
  label,
  scale = "md",
  color = "blue",
  require = false,
  isInvalid = false,
  className = "",
  ...props
}: InputProps) {
  const generatedId = useId();
  const formField = useFormField();
  const id = externalId ?? formField?.id ?? generatedId;
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = resolveColor(contextUIColor ?? color);
  const mergedInvalid = isInvalid || formField?.isInvalid || false;
  const mergedDisabled = props.disabled || formField?.isDisabled || false;
  const mergedScale = scale ?? formField?.scale ?? "md";

  const describedBy = formField
    ? [formField.errorId, formField.helpId].join(" ")
    : undefined;

  const customStyle = isCustomColor(finalUIColor)
    ? customColorToCSSVars(finalUIColor)
    : undefined;

  return (
    <div>
      {label && (
        <Label
          htmlFor={id}
          text={label}
          scale={mergedScale}
          require={require}
          className="cs:ml-2"
        />
      )}
      <input
        id={id}
        aria-invalid={mergedInvalid || undefined}
        aria-describedby={describedBy}
        disabled={mergedDisabled || undefined}
        style={customStyle}
        className={`cs:w-full cs:items-center cs:rounded-md cs:dark:text-gray-400 cs:disabled:bg-gray-100 cs:disabled:text-gray-400 cs:font-sans cs:outline-1 cs:placeholder:text-gray-400 ${FOCUS_RING_INSET} cs:self-start ${TRANSITION_NORMAL} ${mergedInvalid
          ? "cs:text-red-400 cs:bg-red-100/50 cs:outline-red-300 cs:dark:bg-red-200 cs:dark:text-red-500"
          : "cs:text-gray-900 cs:bg-white cs:dark:bg-gray-800 cs:outline-gray-300"
          } ${scaleMap[mergedScale]} ${isPresetColor(finalUIColor) ? focusOutlineColorMap[finalUIColor] : "cs-custom-focus-visible"
          } ${className}`}
        {...props}
      />
    </div>
  );
}
