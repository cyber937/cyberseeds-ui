import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import {
  ThemeContext,
  type ThemeMode,
  type ResolvedTheme,
} from "./ThemeContext";

const QUERY = "(prefers-color-scheme: dark)";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia(QUERY).matches ? "dark" : "light";
}

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

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  // Listen for system theme changes
  useEffect(() => {
    const mql = window.matchMedia(QUERY);
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
