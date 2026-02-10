import { useId } from "react";
import { focusOutlineColorMap } from "../Constants/colorMap";
import { customColorToCSSVars, isPresetColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useFormField } from "../FormField/FormFieldContext";
import { Label } from "../Label/Label";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {
  label?: string;
  scale?: Scale;
  color?: Color;
  require?: boolean;
  isInvalid?: boolean;
}

const scaleMap: Record<Scale, string> = {
  sm: "cs:px-2 cs:py-1 cs:text-xs",
  md: "cs:px-3 cs:py-1.5 cs:text-sm/6",
};

export function TextArea({
  label,
  scale = "md",
  color = "blue",
  require = false,
  isInvalid = false,
  id: externalId,
  className = "",
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const formField = useFormField();
  const id = externalId ?? formField?.id ?? generatedId;
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = contextUIColor ?? color;
  const mergedInvalid = isInvalid || formField?.isInvalid || false;
  const mergedDisabled = props.disabled || formField?.isDisabled || false;
  const mergedScale = scale ?? formField?.scale ?? "md";

  const describedBy = formField
    ? [formField.errorId, formField.helpId].join(" ")
    : undefined;

  const customStyle = !isPresetColor(finalUIColor)
    ? customColorToCSSVars(finalUIColor)
    : undefined;

  return (
    <div>
      {label && <Label htmlFor={id} text={label} scale={mergedScale} require={require} className="cs:ml-2" />}
      <textarea
        id={id}
        aria-invalid={mergedInvalid || undefined}
        aria-describedby={describedBy}
        disabled={mergedDisabled || undefined}
        style={customStyle}
        className={`cs:w-full cs:dark:bg-gray-800 cs:dark:text-gray-200 cs:rounded-md cs:disabled:bg-amber-100 cs:disabled:text-gray-400 cs:outline-1 cs:placeholder:text-gray-400 cs:focus:outline-2 cs:focus:-outline-offset-2 cs:transition-colors cs:duration-200 cs:ease-in-out ${
          mergedInvalid
            ? "cs:text-red-400 cs:bg-red-100/50 cs:outline-red-300 cs:dark:bg-red-200 cs:dark:text-red-500"
            : "cs:text-gray-900 cs:bg-white cs:outline-gray-300"
        } ${scaleMap[mergedScale]} ${isPresetColor(finalUIColor) ? focusOutlineColorMap[finalUIColor] : "cs-custom-focus"} ${className}`}
        {...props}
      />
    </div>
  );
}
