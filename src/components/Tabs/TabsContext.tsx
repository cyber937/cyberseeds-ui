"use client";

import { createContext, useContext } from "react";
import type { CustomColor, PresetColor, Scale } from "../DesignSystemUtils";

export interface TabsContextType {
  activeValue: string;
  onChange: (value: string) => void;
  baseId: string;
  scale?: Scale;
  color: PresetColor | CustomColor;
  /**
   * Values whose `Tabs.Content` is currently in the DOM.
   *
   * A trigger may only advertise `aria-controls` for a panel that actually
   * exists. Using Tabs for navigation — triggers only, with the page painting
   * the body itself — is a supported pattern, and pointing `aria-controls` at
   * an id that was never rendered is an invalid ARIA reference.
   */
  panels: ReadonlySet<string>;
  registerPanel: (value: string) => void;
  unregisterPanel: (value: string) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function useTabsContext(): TabsContextType {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs sub-components must be used within a Tabs component");
  }
  return ctx;
}
