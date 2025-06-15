"use client";

import { useContext } from "react";
import { UIColorContext } from "./UIColorContext";

export function useUIColor() {
  const context = useContext(UIColorContext);
  if (!context) {
    throw new Error("useUIColor must be used within a UIColorProvider");
  }
  return context;
}
