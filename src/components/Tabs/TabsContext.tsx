"use client";

import { createContext, useContext } from "react";
import type { CustomColor, PresetColor, Scale } from "../DesignSystemUtils";

/**
 * How the tab row reads against the content below it.
 *
 * - `underline` — a coloured rule under the active tab. The default, and what
 *   every existing caller gets.
 * - `enclosed` — the active tab is drawn as a folder tab: bordered on three
 *   sides, sharing its background with the panel and cutting through the row's
 *   bottom rule. Use this when the tab and its content must read as one object.
 *
 * ⚠️ `enclosed` assumes the panel underneath is the standard panel colour
 * (white / `gray-800` in dark). If the surrounding surface is a different
 * colour, the seam will not disappear.
 */
export type TabsVariant = "underline" | "enclosed";

export interface TabsContextType {
  activeValue: string;
  onChange: (value: string) => void;
  baseId: string;
  scale?: Scale;
  color: PresetColor | CustomColor;
  variant: TabsVariant;
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
