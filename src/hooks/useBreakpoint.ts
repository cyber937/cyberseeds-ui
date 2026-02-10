import { useMediaQuery } from "./useMediaQuery";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export const BREAKPOINTS: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const BREAKPOINT_ORDER: Breakpoint[] = ["2xl", "xl", "lg", "md", "sm"];

export function useBreakpoint(): Breakpoint | null {
  const is2xl = useMediaQuery(`(min-width: ${BREAKPOINTS["2xl"]}px)`);
  const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`);
  const isLg = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
  const isMd = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
  const isSm = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`);

  const matches = [is2xl, isXl, isLg, isMd, isSm];

  for (let i = 0; i < BREAKPOINT_ORDER.length; i++) {
    if (matches[i]) return BREAKPOINT_ORDER[i];
  }

  return null; // below sm (< 640px)
}
