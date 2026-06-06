"use client";

import clsx from "clsx";
import type { ReactNode } from "react";
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type DrawerContextType = {
  close?: () => void;
  headerId: string;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

type DrawerPosition = "right" | "left" | "top" | "bottom";
type DrawerSize = "sm" | "md" | "lg" | "xl";

type DrawerProps = {
  position?: DrawerPosition;
  size?: DrawerSize;
  children: ReactNode;
  onClose?: () => void;
};

// Width when sliding from the side, height when from top/bottom.
const horizontalSizeMap: Record<DrawerSize, string> = {
  sm: "cs:w-72",
  md: "cs:w-96",
  lg: "cs:w-[32rem]",
  xl: "cs:w-[48rem]",
};

const verticalSizeMap: Record<DrawerSize, string> = {
  sm: "cs:h-48",
  md: "cs:h-72",
  lg: "cs:h-96",
  xl: "cs:h-[32rem]",
};

const positionContainerMap: Record<DrawerPosition, string> = {
  right: "cs:right-0 cs:top-0 cs:bottom-0 cs:h-full",
  left: "cs:left-0 cs:top-0 cs:bottom-0 cs:h-full",
  top: "cs:top-0 cs:left-0 cs:right-0 cs:w-full",
  bottom: "cs:bottom-0 cs:left-0 cs:right-0 cs:w-full",
};

const hiddenTransformMap: Record<DrawerPosition, string> = {
  right: "cs:translate-x-full",
  left: "cs:-translate-x-full",
  top: "cs:-translate-y-full",
  bottom: "cs:translate-y-full",
};

export function Drawer({
  position = "right",
  size = "md",
  children,
  onClose,
}: DrawerProps) {
  const headerId = useId();
  const prefersReducedMotion = useReducedMotion();
  useBodyScrollLock(true);

  const drawerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(drawerRef, true);

  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    let frameId: number | undefined;
    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(() => setIsVisible(true));
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };
  }, [handleKeyDown, prefersReducedMotion]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose?.();
    },
    [onClose],
  );

  const contextValue = useMemo(
    () => ({ close: onClose, headerId }),
    [onClose, headerId],
  );

  const sizeClass =
    position === "right" || position === "left"
      ? horizontalSizeMap[size]
      : verticalSizeMap[size];

  return (
    <DrawerContext.Provider value={contextValue}>
      <div
        className={clsx(
          "cs:transition-opacity cs:duration-200 cs:ease-in-out cs:motion-reduce:transition-none",
          "cs:fixed cs:inset-0 cs:bg-gray-500/80 cs:z-50",
          isVisible ? "cs:opacity-100" : "cs:opacity-0",
        )}
        onClick={handleBackdropClick}
      >
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headerId}
          className={clsx(
            "cs:transition-transform cs:duration-300 cs:ease-in-out cs:motion-reduce:transition-none",
            "cs:absolute cs:bg-white cs:dark:bg-gray-800 cs:shadow-xl cs:flex cs:flex-col cs:max-w-full cs:max-h-full",
            positionContainerMap[position],
            sizeClass,
            isVisible ? "cs:translate-x-0 cs:translate-y-0" : hiddenTransformMap[position],
          )}
        >
          {children}
        </div>
      </div>
    </DrawerContext.Provider>
  );
}

Drawer.Header = memo(function DrawerHeader({ children }: { children: ReactNode }) {
  const context = useContext(DrawerContext);
  return (
    <div
      id={context?.headerId}
      className="cs:px-4 cs:py-3 cs:border-b cs:border-gray-200 cs:dark:border-gray-700 cs:font-semibold cs:dark:text-gray-200"
    >
      {children}
    </div>
  );
});

Drawer.Body = function DrawerBody({ children }: { children: ReactNode }) {
  return (
    <div className="cs:px-4 cs:py-3 cs:flex-1 cs:overflow-auto cs:dark:text-gray-300">
      {children}
    </div>
  );
};

Drawer.Footer = function DrawerFooter({ children }: { children: ReactNode }) {
  return (
    <div className="cs:px-4 cs:py-3 cs:border-t cs:border-gray-200 cs:dark:border-gray-700 cs:flex cs:flex-wrap cs:justify-end cs:gap-2">
      {children}
    </div>
  );
};
