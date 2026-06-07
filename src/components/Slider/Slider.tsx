"use client";

import clsx from "clsx";
import { useId, useState } from "react";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface SliderProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  scale?: Scale;
  color?: Color;
  disabled?: boolean;
  /** Show the current value to the right of the track. */
  showValue?: boolean;
  label?: string;
  /** Format the displayed value (e.g. `(v) => `$${v}``). */
  formatValue?: (value: number) => string;
  className?: string;
  "aria-label"?: string;
}

const trackHeight: Record<Scale, string> = {
  xs: "cs:h-1",
  sm: "cs:h-1.5",
  md: "cs:h-2",
  lg: "cs:h-2.5",
};

const labelScale: Record<Scale, string> = {
  xs: "cs:text-[0.625rem]",
  sm: "cs:text-xs",
  md: "cs:text-sm",
  lg: "cs:text-base",
};

export function Slider({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  scale = "md",
  color = "blue",
  disabled = false,
  showValue = false,
  label,
  formatValue,
  className,
  "aria-label": ariaLabel,
}: SliderProps) {
  const id = useId();
  const { color: contextColor } = useUIColor() ?? { color: undefined };
  const colorStyle = colorToCSSVars(resolveColor(contextColor ?? color));

  const isControlled = controlledValue !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? controlledValue : uncontrolled;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(e.target.value);
    if (!isControlled) setUncontrolled(next);
    onChange?.(next);
  }

  const display = formatValue ? formatValue(value) : String(value);

  return (
    <div className={clsx("cs:font-sans", className)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "cs:mb-1 cs:block cs:font-medium cs:text-gray-900 cs:dark:text-gray-300",
            labelScale[scale],
          )}
        >
          {label}
        </label>
      )}
      <div className="cs:flex cs:items-center cs:gap-3">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          aria-label={ariaLabel ?? label}
          className={clsx(
            "cs:w-full cs:cursor-pointer cs:appearance-none cs:rounded-full cs:bg-gray-200 cs:dark:bg-gray-700",
            "cs:disabled:opacity-50 cs:disabled:cursor-not-allowed",
            "cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:focus-visible:outline-[var(--cs-ui-focus)]",
            trackHeight[scale],
          )}
          style={{ ...colorStyle, accentColor: "var(--cs-ui-base)" }}
        />
        {showValue && (
          <span
            className={clsx(
              "cs:shrink-0 cs:tabular-nums cs:text-gray-700 cs:dark:text-gray-300",
              labelScale[scale],
            )}
          >
            {display}
          </span>
        )}
      </div>
    </div>
  );
}
