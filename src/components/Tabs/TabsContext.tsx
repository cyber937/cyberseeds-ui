"use client";

import { createContext, useContext } from "react";
import type { CustomColor, PresetColor, Scale } from "../DesignSystemUtils";

export interface TabsContextType {
  activeValue: string;
  onChange: (value: string) => void;
  baseId: string;
  scale?: Scale;
  color: PresetColor | CustomColor;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function useTabsContext(): TabsContextType {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs sub-components must be used within a Tabs component");
  }
  return ctx;
}
