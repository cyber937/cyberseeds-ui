"use client";

import { createContext, ReactNode, useState } from "react";
import type { Color } from "./DesignSystemUtils";

export interface UIColorContextType {
  color: Color;
  setColor: (color: Color) => void;
}

const UIColorContext = createContext<UIColorContextType | undefined>(undefined);

export const UIColorProvider = ({
  children,
  initialColor = "gray",
}: {
  children: ReactNode;
  initialColor?: Color;
}) => {
  const [color, setColor] = useState<Color>(initialColor); // 初期値

  return (
    <UIColorContext.Provider value={{ color, setColor }}>
      {children}
    </UIColorContext.Provider>
  );
};
