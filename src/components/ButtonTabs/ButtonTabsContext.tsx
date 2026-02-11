"use client";

import { createContext, useContext } from "react";
import type { CustomColor, PresetColor, Scale } from "../DesignSystemUtils";

export interface ButtonTabsContextType {
  activeValue: string;
  onChange: (value: string) => void;
  baseId: string;
  scale?: Scale;
  color: PresetColor | CustomColor;
}

export const ButtonTabsContext = createContext<ButtonTabsContextType | undefined>(undefined);

export function useButtonTabsContext(): ButtonTabsContextType {
  const ctx = useContext(ButtonTabsContext);
  if (!ctx) {
    throw new Error("ButtonTabs sub-components must be used within a ButtonTabs component");
  }
  return ctx;
}
