import { useEffect, useRef } from "react";

export function useBodyScrollLock(isLocked: boolean): void {
  const originalOverflowRef = useRef<string>("");

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isLocked) {
      originalOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (isLocked) {
        document.body.style.overflow = originalOverflowRef.current;
      }
    };
  }, [isLocked]);
}
