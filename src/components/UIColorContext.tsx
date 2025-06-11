"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  return (
    <UIColorContext.Provider value={{ color, setColor }}>
      {children}
    </UIColorContext.Provider>
  );
};

export const useUIColor = () => {
  const context = useContext(UIColorContext);
  return context;
};
