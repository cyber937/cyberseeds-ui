"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from "react";
import { customColorToCSSVars, isCustomColor, isSemanticColor, resolveColor } from "../Constants/colorUtils";
import { createSemanticColorMap } from "../Constants/semanticColor";
import type { SemanticColorMap } from "../Constants/semanticColor";
import type { Color, CustomColor } from "../DesignSystemUtils";

export interface UIColorContextType {
  color: Color;
  setColor: (color: Color) => void;
  semanticColors?: SemanticColorMap;
}

export const UIColorContext = createContext<UIColorContextType | undefined>(undefined);

export function UIColorProvider({
  children,
  initialColor = "gray",
  darkColor,
  semanticColors,
}: {
  children: ReactNode;
  initialColor?: Color;
  darkColor?: CustomColor;
  semanticColors?: Partial<SemanticColorMap>;
}) {
  const [color, setColor] = useState<Color>(initialColor);

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  // Resolve semantic colors into full map if overrides are provided
  const resolvedSemanticMap = useMemo(() => {
    if (!semanticColors) return undefined;
    return createSemanticColorMap(semanticColors);
  }, [semanticColors]);

  const contextValue = useMemo(
    () => ({ color, setColor, semanticColors: resolvedSemanticMap }),
    [color, setColor, resolvedSemanticMap],
  );

  // Resolve the effective color (handle semantic → preset/custom)
  const effectiveColor = isSemanticColor(color) ? resolveColor(color, resolvedSemanticMap) : color;

  // Determine dark mode state from ThemeProvider if available
  let isDark = false;
  try {
    if (typeof document !== "undefined") {
      isDark = document.documentElement.classList.contains("dark");
    }
  } catch {
    // SSR or no DOM — not dark
  }

  // Determine CSS vars: use darkColor in dark mode if provided, otherwise use effectiveColor
  let cssVars: React.CSSProperties | undefined;
  if (isDark && darkColor) {
    cssVars = customColorToCSSVars(darkColor);
  } else if (isCustomColor(effectiveColor)) {
    cssVars = customColorToCSSVars(effectiveColor, isDark);
  }

  return (
    <UIColorContext.Provider value={contextValue}>
      {cssVars ? (
        <div style={{ display: "contents", ...cssVars }}>{children}</div>
      ) : (
        children
      )}
    </UIColorContext.Provider>
  );
}
