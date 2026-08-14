import type { ReactNode } from "react";
import { createContext, memo, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { FOCUS_RING, TRANSITION_FAST, Z_INDEX } from "../Constants/designTokens";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useDismissable } from "../../hooks/useDismissable";

type ModalContextType = {
  close?: () => void;
  headerId: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalWidth = "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Responsive width: a single named size, or an object mapping Tailwind
 * breakpoints to sizes so the modal can grow/shrink as the viewport changes.
 *
 * Example: `{ base: "sm", md: "md", lg: "lg" }` is small on mobile, medium
 * on tablet (>= md), and large on desktop (>= lg).
 */
type ResponsiveModalWidth =
  | ModalWidth
  | Partial<Record<"base" | "sm" | "md" | "lg" | "xl", ModalWidth>>;

type ModalProps = {
  width?: ResponsiveModalWidth;
  children: ReactNode;
  onClose?: () => void;
};

// Each entry is the class to use at that breakpoint's MIN width. We use
// the `sm:` prefix on the smallest (md/sm/lg) row of the legacy single-value
// form so that on mobile the modal still goes full-screen via `max-md:w-full`.
const baseWidthMap = {
  sm: "cs:sm:w-2xs",
  md: "cs:sm:w-md",
  lg: "cs:sm:w-2xl",
  xl: "cs:sm:w-4xl",
  "2xl": "cs:sm:w-5xl",
} as const;

// For the responsive object form, each breakpoint key prefixes the class.
// `base` has no prefix (applies on all sizes); the rest use the standard
// Tailwind responsive prefixes.
const breakpointWidthClasses = {
  sm: { sm: "cs:sm:w-2xs", md: "cs:sm:w-md", lg: "cs:sm:w-2xl", xl: "cs:sm:w-4xl", "2xl": "cs:sm:w-5xl" },
  md: { sm: "cs:md:w-2xs", md: "cs:md:w-md", lg: "cs:md:w-2xl", xl: "cs:md:w-4xl", "2xl": "cs:md:w-5xl" },
  lg: { sm: "cs:lg:w-2xs", md: "cs:lg:w-md", lg: "cs:lg:w-2xl", xl: "cs:lg:w-4xl", "2xl": "cs:lg:w-5xl" },
  xl: { sm: "cs:xl:w-2xs", md: "cs:xl:w-md", lg: "cs:xl:w-2xl", xl: "cs:xl:w-4xl", "2xl": "cs:xl:w-5xl" },
  base: { sm: "cs:w-2xs", md: "cs:w-md", lg: "cs:w-2xl", xl: "cs:w-4xl", "2xl": "cs:w-5xl" },
} as const;

function resolveWidthClasses(width: ResponsiveModalWidth): string {
  if (typeof width === "string") return baseWidthMap[width];
  return (Object.entries(width) as Array<[keyof typeof breakpointWidthClasses, ModalWidth]>)
    .map(([bp, size]) => breakpointWidthClasses[bp][size])
    .join(" ");
}

export function Modal({ width = "md", children, onClose }: ModalProps) {
  const headerId = useId();
  const prefersReducedMotion = useReducedMotion();
  useBodyScrollLock(true);

  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef, true);

  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  // The backdrop press is handled by onClick below, so only Escape is needed
  // here. Modal is mounted only while open, hence `enabled: true`.
  useDismissable({ enabled: true, onDismiss: () => onClose?.() });

  useEffect(() => {
    // reduced motion: 即座に表示（アニメーションなし）
    let frameId: number | undefined;
    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(() => setIsVisible(true));
    }

    return () => {
      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };
  }, [prefersReducedMotion]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose?.();
      }
    },
    [onClose]
  );

  const contextValue = useMemo(() => ({ close: onClose, headerId }), [onClose, headerId]);

  return (
    <ModalContext.Provider value={contextValue}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headerId}
        className={`cs:transition-opacity cs:duration-200 cs:ease-in-out cs:motion-reduce:transition-none cs:fixed cs:inset-0 cs:bg-gray-500/80 cs:flex cs:justify-center cs:items-center ${Z_INDEX.OVERLAY} cs:text-base cs:sm:text-sm/5 ${
          isVisible ? "cs:opacity-100" : "cs:opacity-0"
        }`}
        onClick={handleBackdropClick}
      >
        <div
          className={`cs:transition cs:duration-300 cs:ease-in-out cs:motion-reduce:transition-none cs:absolute cs:bg-white cs:dark:bg-gray-800 cs:shadow-xl cs:rounded-md cs:max-md:rounded-none cs:p-2 cs:flex cs:flex-col cs:max-h-[90dvh] cs:max-md:max-h-full cs:max-md:w-full cs:max-md:h-full cs:transform ${
            isVisible
              ? "cs:opacity-100 cs:scale-100"
              : "cs:opacity-0 cs:scale-95"
          } ${resolveWidthClasses(width)}`}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

/**
 * Modal title row. Renders a close button on the trailing edge whenever the
 * modal was given an `onClose`.
 *
 * The button matters most on phones: the panel goes full-screen there, so
 * there is no backdrop left to tap and no Escape key to press — without it the
 * only way out is whatever the footer happens to offer.
 *
 * Pass `showClose={false}` for flows that must not be abandoned halfway.
 */
Modal.Header = memo(function ModalHeader({
  children,
  showClose = true,
  closeLabel = "Close",
}: {
  children: ReactNode;
  showClose?: boolean;
  closeLabel?: string;
}) {
  const context = useContext(ModalContext);
  const close = context?.close;

  return (
    <div className="cs:flex cs:items-start cs:gap-2 cs:px-4 cs:py-2">
      <div id={context?.headerId} className="cs:flex-1 cs:font-semibold cs:dark:text-gray-400">
        {children}
      </div>
      {showClose && close && (
        <button
          type="button"
          onClick={close}
          aria-label={closeLabel}
          className={`cs:border-0 cs:shadow-none cs:shrink-0 cs:cursor-pointer cs:rounded-md cs:bg-transparent cs:p-1 cs:text-gray-400 cs:hover:text-gray-600 cs:dark:text-gray-500 cs:dark:hover:text-gray-300 ${TRANSITION_FAST} ${FOCUS_RING} cs-focus-visible`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            className="cs:size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
});

Modal.Body = function ModalBody({ children }: { children: ReactNode }) {
  return (
    <div className="cs:px-4 cs:pt-1 cs:pb-4 cs:flex-1 cs:overflow-auto cs:dark:text-gray-400">
      {children}
    </div>
  );
};

Modal.Footer = function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <div className="cs:px-4 cs:pt-2 cs:flex cs:flex-wrap cs:justify-end cs:gap-2">
      {children}
    </div>
  );
};
