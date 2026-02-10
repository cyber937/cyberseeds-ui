import { useMediaQuery } from "./useMediaQuery";

export function useTouchDevice(): boolean {
  return useMediaQuery("(hover: none) and (pointer: coarse)");
}
