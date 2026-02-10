"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from "react";
import { customColorToCSSVars, isCustomColor } from "../Constants/colorUtils";
import type { Color } from "../DesignSystemUtils";

export interface UIColorContextType {
  color: Color;
  setColor: (color: Color) => void;
}

export const UIColorContext = createContext<UIColorContextType | undefined>(undefined);

export function UIColorProvider({
  children,
  initialColor = "gray",
}: {
  children: ReactNode;
  initialColor?: Color;
}) {
  const [color, setColor] = useState<Color>(initialColor); // 初期値

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  const contextValue = useMemo(() => ({ color, setColor }), [color, setColor]);

  const cssVars = isCustomColor(color) ? customColorToCSSVars(color) : undefined;

  return (
    <UIColorContext.Provider value={contextValue}>
      {cssVars ? (
        <div style={{ display: "contents", ...cssVars }}>{children}</div>
      ) : (
        children
      )}
    </UIColorContext.Provider>
  );
};
