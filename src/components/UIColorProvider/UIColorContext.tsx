import {
  createContext,
  ReactNode,
  useEffect,
  useState
} from "react";
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

  return (
    <UIColorContext.Provider value={{ color, setColor }}>
      {children}
    </UIColorContext.Provider>
  );
};
