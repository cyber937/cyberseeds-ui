import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import {
  ThemeContext,
  type ThemeMode,
  type ResolvedTheme,
} from "./ThemeContext";

const QUERY = "(prefers-color-scheme: dark)";

interface ThemeProviderProps {
  children: ReactNode;
  mode?: ThemeMode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({
  children,
  mode: controlledMode,
  defaultMode = "system",
}: ThemeProviderProps) {
  const [uncontrolledMode, setUncontrolledMode] =
    useState<ThemeMode>(defaultMode);
  const isControlled = controlledMode !== undefined;
  const mode = isControlled ? controlledMode : uncontrolledMode;

  // Always start with "light" to match SSR, then sync in useEffect
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("light");

  // Sync system theme on mount and listen for changes
  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    setSystemTheme(mql.matches ? "dark" : "light");
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const resolvedTheme: ResolvedTheme =
    mode === "system" ? systemTheme : mode;

  // Apply/remove .dark class on the wrapper element
  const setMode = useCallback(
    (newMode: ThemeMode) => {
      if (!isControlled) {
        setUncontrolledMode(newMode);
      }
    },
    [isControlled],
  );

  const contextValue = useMemo(
    () => ({ mode, setMode, resolvedTheme }),
    [mode, setMode, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={resolvedTheme === "dark" ? "dark" : undefined}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
