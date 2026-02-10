import React, { createContext, useCallback, useContext, useMemo } from "react";
import type { Color, Scale } from "../DesignSystemUtils";
import { Radio } from "../Radio/Radio";

interface RadioGroupContextProps {
  scale?: Scale;
  color?: Color;
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

interface RadioGroupProps {
  scale?: Scale;
  color?: Color;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

export function RadioGroup({
  scale,
  color = "blue",
  value,
  onChange,
  children,
}: RadioGroupProps) {
  const contextValue = useMemo(
    () => ({ scale, color, value, onChange }),
    [scale, color, value, onChange]
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
}

function Option({ label, value }: OptionProps) {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioGroup.Option must be used within RadioGroup");

  const { onChange: ctxOnChange, scale, color, value: ctxValue } = ctx;
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
      onChange={handleChange}
    />
  );
}

RadioGroup.Option = Option;
