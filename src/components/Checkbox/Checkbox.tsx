import clsx from "clsx";
import { useId, type Ref } from "react";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { colorToCSSVars, isPresetColor, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color"> {
  label?: string;
  scale?: Scale;
  color?: Color;
  /**
   * Typed callback that receives the next checked state on every toggle.
   *
   * Equivalent to writing `onChange={(e) => fn(e.target.checked)}`, but
   * matches the API surface of {@link Switch} so callers can swap between
   * them without rewriting the handler. The raw `onChange(event)` still
   * fires for callers that need the original event.
   */
  onCheckedChange?: (checked: boolean) => void;
  /** Extra class names applied to the outer wrapper. */
  className?: string;
  /** Forwarded to the inner `<input type="checkbox">`. */
  ref?: Ref<HTMLInputElement>;
}

const gapScaleMap: Record<Scale, string> = {
  xs: "cs:gap-x-1.5",
  sm: "cs:gap-x-2",
  md: "cs:gap-x-3",
  lg: "cs:gap-x-3",
};

const checkBoxScaleMap: Record<Scale, string> = {
  xs: "cs:size-3",
  sm: "cs:size-3.5",
  md: "cs:size-4",
  lg: "cs:size-5",
};

const iconScaleMap: Record<Scale, string> = {
  xs: "cs:size-2.5",
  sm: "cs:size-3",
  md: "cs:size-3.5",
  lg: "cs:size-4",
};

const textScaleMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem]",
  sm: "cs:text-xs",
  md: "cs:text-sm/6",
  lg: "cs:text-base",
};

export function Checkbox({
  scale = "md",
  color = "blue",
  label,
  id: externalId,
  onCheckedChange,
  onChange,
  className,
  ref,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const id = externalId ?? generatedId;

  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = resolveColor(contextUIColor ?? color);

  const colorStyle = colorToCSSVars(finalUIColor);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(event.target.checked);
    onChange?.(event);
  };

  return (
    <div className={clsx(`cs:flex cs:max-md:min-h-11 cs:max-md:items-center ${gapScaleMap[scale]}`, className)}>
      <div className="cs:flex cs:h-6 cs:shrink-0 cs:items-center">
        <div
          className={`cs:group cs:grid cs:grid-cols-1 ${checkBoxScaleMap[scale]}`}
        >
          <input
            ref={ref}
            id={id}
            type="checkbox"
            style={colorStyle}
            className={`cs:col-start-1 cs:row-start-1 cs:appearance-none cs:rounded-sm cs:border cs:border-gray-300 cs:dark:border-gray-600 cs:bg-white cs:dark:bg-gray-700 cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:disabled:border-gray-300 cs:disabled:bg-gray-100 cs:dark:disabled:bg-gray-800 cs:disabled:checked:bg-gray-200 cs:forced-colors:appearance-auto cs-checked`}
            onChange={handleChange}
            {...props}
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className={`cs:pointer-events-none cs:col-start-1 cs:row-start-1 cs:self-center cs:justify-self-center cs:group-has-disabled:stroke-gray-950/25 ${isPresetColor(finalUIColor) && LIGHT_BG_COLORS.has(finalUIColor) ? "cs:stroke-gray-900" : "cs:stroke-white"} ${iconScaleMap[scale]}`}
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cs:opacity-0 cs:group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cs:opacity-0 cs:group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </div>
      {label && (
        <div className="cs:text-sm/6">
          <label
            htmlFor={id}
            className={`cs:font-sans cs:dark:text-gray-400 ${textScaleMap[scale]}`}
          >
            {label}
          </label>
        </div>
      )}
    </div>
  );
}
