"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from "react";
import { colorToCSSVars, customColorToCSSVars, isSemanticColor, resolveColor } from "../Constants/colorUtils";
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
  const effectiveColor = useMemo(
    () => (isSemanticColor(color) ? resolveColor(color, resolvedSemanticMap) : color),
    [color, resolvedSemanticMap],
  );

  // Determine dark mode state from ThemeProvider if available.
  // Read on every render: the result is captured by the cssVars memo via deps,
  // and the DOM read is far cheaper than rebuilding the CSS variable map.
  let isDark = false;
  try {
    if (typeof document !== "undefined") {
      isDark = document.documentElement.classList.contains("dark");
    }
  } catch {
    // SSR or no DOM — not dark
  }

  // All colors (preset and custom) now get CSS variables via the unified path
  const cssVars = useMemo<React.CSSProperties>(
    () =>
      isDark && darkColor
        ? customColorToCSSVars(darkColor)
        : colorToCSSVars(effectiveColor, isDark),
    [isDark, darkColor, effectiveColor],
  );

  const wrapperStyle = useMemo<React.CSSProperties>(
    () => ({ display: "contents", ...cssVars }),
    [cssVars],
  );

  return (
    <UIColorContext.Provider value={contextValue}>
      <div style={wrapperStyle}>{children}</div>
    </UIColorContext.Provider>
  );
}
