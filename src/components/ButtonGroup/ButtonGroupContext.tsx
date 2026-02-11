import { createContext, useContext } from "react";
import type { CustomColor, PresetColor, Scale } from "../DesignSystemUtils";

export interface ButtonGroupContextType {
  selectedValues: Set<string>;
  onSelect: (value: string) => void;
  scale: Scale;
  color: PresetColor | CustomColor;
  multiple: boolean;
}

export const ButtonGroupContext = createContext<ButtonGroupContextType | undefined>(undefined);

export function useButtonGroupContext(): ButtonGroupContextType {
  const ctx = useContext(ButtonGroupContext);
  if (!ctx) {
    throw new Error("ButtonGroup.Item must be used within a ButtonGroup component");
  }
  return ctx;
}
