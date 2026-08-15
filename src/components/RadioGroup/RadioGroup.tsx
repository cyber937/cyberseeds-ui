import React, { createContext, useCallback, useContext, useMemo } from "react";
import type { Color, Scale } from "../DesignSystemUtils";
import { Radio } from "../Radio/Radio";

interface RadioGroupContextProps {
  scale?: Scale;
  color?: Color;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

interface RadioGroupProps {
  scale?: Scale;
  color?: Color;
  value?: string;
  onChange?: (value: string) => void;
  /**
   * Disables every option in the group. Individual options can still opt out
   * with `disabled={false}`.
   *
   * Confirmation screens that show a previously made choice need this: without
   * it, callers drop out of `RadioGroup` and hand-roll `<input type="radio"
   * disabled>` with their own class names.
   */
  disabled?: boolean;
  children: React.ReactNode;
}

export function RadioGroup({
  scale,
  // No default: an explicit "blue" here would be forwarded to every Radio as an
  // explicit prop, which now outranks UIColorProvider and would pin the whole
  // group to blue. Passing undefined lets Radio fall back to the context.
  color,
  value,
  onChange,
  disabled,
  children,
}: RadioGroupProps) {
  const contextValue = useMemo(
    () => ({ scale, color, value, onChange, disabled }),
    [scale, color, value, onChange, disabled]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div role="radiogroup" className="cs:flex cs:flex-col cs:gap-2">{children}</div>
    </RadioGroupContext.Provider>
  );
}

interface OptionProps {
  label: string;
  value: string;
  /** Overrides the group's `disabled`. Omit to follow the group. */
  disabled?: boolean;
}

function Option({ label, value, disabled }: OptionProps) {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioGroup.Option must be used within RadioGroup");

  const {
    onChange: ctxOnChange,
    scale,
    color,
    value: ctxValue,
    disabled: ctxDisabled,
  } = ctx;
  const isDisabled = disabled ?? ctxDisabled;
  const isSelected = ctxValue === value;
  const handleChange = useCallback(() => {
    ctxOnChange?.(value);
  }, [ctxOnChange, value]);

  return (
    <Radio
      label={label}
      scale={scale}
      color={color}
      value={value}
      checked={isSelected}
      disabled={isDisabled}
      onChange={handleChange}
    />
  );
}

RadioGroup.Option = Option;
