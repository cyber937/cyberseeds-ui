import React, { useId } from "react";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING_INSET, TRANSITION_NORMAL } from "../Constants/designTokens";
import type { Color, LabelPlacement, Scale } from "../DesignSystemUtils";
import { useFormField } from "../FormField/FormFieldContext";
import { Label } from "../Label/Label";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color"> {
  id?: string;
  label?: string;
  /**
   * ラベルの位置。既定は入力の上（"top"）。
   * "start" にすると左に並び、縦位置を揃える。
   */
  labelPlacement?: LabelPlacement;
  scale?: Scale;
  color?: Color;
  require?: boolean;
  isInvalid?: boolean;
  /**
   * Decoration shown inside the field, on the leading edge (a search glyph,
   * a currency sign). Pointer events pass through to the input.
   */
  startIcon?: React.ReactNode;
  /**
   * Content shown inside the field, on the trailing edge. Unlike `startIcon`
   * this stays interactive, so a clear button or a reveal-password toggle
   * can live here.
   */
  endIcon?: React.ReactNode;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:px-1.5 cs:py-0.5 cs:text-[0.625rem] cs:h-5 cs:max-md:text-base cs:max-md:min-h-11",
  sm: "cs:px-2 cs:py-1 cs:text-xs cs:h-6 cs:max-md:text-base cs:max-md:min-h-11",
  md: "cs:px-3 cs:py-1.5 cs:text-sm/6 cs:h-9 cs:max-md:text-base cs:max-md:min-h-11",
  lg: "cs:px-4 cs:py-2 cs:text-base cs:h-11",
};

// Room the icon needs on its side of the field, replacing the normal padding.
const startPadMap: Record<Scale, string> = {
  xs: "cs:pl-6",
  sm: "cs:pl-7",
  md: "cs:pl-9",
  lg: "cs:pl-10",
};

const endPadMap: Record<Scale, string> = {
  xs: "cs:pr-6",
  sm: "cs:pr-7",
  md: "cs:pr-9",
  lg: "cs:pr-10",
};

// Where the icon sits, and how big it is drawn.
const iconSlotMap: Record<Scale, string> = {
  xs: "cs:w-6 cs:[&>svg]:size-3",
  sm: "cs:w-7 cs:[&>svg]:size-3.5",
  md: "cs:w-9 cs:[&>svg]:size-4",
  lg: "cs:w-10 cs:[&>svg]:size-5",
};

export function Input({
  id: externalId,
  label,
  labelPlacement = "top",
  scale = "md",
  color,
  require = false,
  isInvalid = false,
  startIcon,
  endIcon,
  className = "",
  ...props
}: InputProps) {
  const generatedId = useId();
  const formField = useFormField();
  const id = externalId ?? formField?.id ?? generatedId;
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = resolveColor(color ?? contextUIColor ?? "blue");
  const mergedInvalid = isInvalid || formField?.isInvalid || false;
  const mergedDisabled = props.disabled || formField?.isDisabled || false;
  const mergedRequired = props.required || formField?.isRequired || false;
  const mergedScale = scale ?? formField?.scale ?? "md";

  const describedBy = formField
    ? [formField.errorId, formField.helpId].join(" ")
    : undefined;

  const colorStyle = colorToCSSVars(finalUIColor);

  const baseClassName = `cs:border-0 cs:shadow-none cs:rounded-md cs:dark:text-gray-400 cs:disabled:bg-gray-100 cs:disabled:text-gray-400 cs:dark:disabled:bg-gray-700 cs:dark:disabled:text-gray-500 cs:font-sans cs:outline-1 cs:-outline-offset-1 cs:placeholder:text-gray-400 ${FOCUS_RING_INSET} ${TRANSITION_NORMAL} ${mergedInvalid
        ? "cs:text-red-400 cs:bg-red-100/50 cs:outline-red-300 cs:dark:bg-red-200 cs:dark:text-red-500"
        : "cs:text-gray-900 cs:bg-white cs:dark:bg-gray-800 cs:outline-gray-300 cs:dark:outline-gray-600"
        } ${scaleMap[mergedScale]} cs-focus-visible`;

  const hasIcons = !!startIcon || !!endIcon;

  // Only the icon padding overrides the scale's own padding — without icons the
  // element keeps exactly the classes (and the DOM shape) it had before, so
  // existing callers are untouched.
  const iconPadding = hasIcons
    ? `${startIcon ? startPadMap[mergedScale] : ""} ${endIcon ? endPadMap[mergedScale] : ""}`
    : "";

  const field = (
    <input
      id={id}
      aria-invalid={mergedInvalid || undefined}
      aria-describedby={describedBy}
      disabled={mergedDisabled || undefined}
      required={mergedRequired || undefined}
      style={colorStyle}
      className={`${label || hasIcons ? "cs:w-full " : ""}${baseClassName} ${iconPadding} ${className}`}
      {...props}
    />
  );

  // Icons are absolutely placed over the field. The leading one is decoration
  // and lets clicks through to the input; the trailing one stays clickable so
  // it can hold a clear button.
  const withIcons = hasIcons ? (
    <div className="cs:relative cs:flex cs:w-full">
      {startIcon && (
        <span
          className={`cs:pointer-events-none cs:absolute cs:inset-y-0 cs:left-0 cs:flex cs:items-center cs:justify-center cs:text-gray-500 cs:dark:text-gray-400 ${iconSlotMap[mergedScale]}`}
        >
          {startIcon}
        </span>
      )}
      {field}
      {endIcon && (
        <span
          className={`cs:absolute cs:inset-y-0 cs:right-0 cs:flex cs:items-center cs:justify-center cs:text-gray-500 cs:dark:text-gray-400 ${iconSlotMap[mergedScale]}`}
        >
          {endIcon}
        </span>
      )}
    </div>
  ) : (
    field
  );

  if (!label) {
    return withIcons;
  }

  const labelNode = (
    <Label
      htmlFor={id}
      text={label}
      scale={mergedScale}
      require={require}
      className={labelPlacement === "start" ? "cs:whitespace-nowrap" : "cs:ml-2"}
    />
  );

  return labelPlacement === "start" ? (
    <div className="cs:flex cs:items-center cs:gap-2">
      {labelNode}
      {withIcons}
    </div>
  ) : (
    <div>
      {labelNode}
      {withIcons}
    </div>
  );
}
