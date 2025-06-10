import { createContext, useContext } from "react";
import type { UIColorContextType } from "./UIColorContext";

export const useUIColor = () => {
  const context = useContext(
    createContext<UIColorContextType | undefined>(undefined)
  );
  return context;
};
