import clsx from "clsx";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: "cs:bottom-full cs:left-1/2 cs:-translate-x-1/2 cs:mb-2",
  bottom: "cs:top-full cs:left-1/2 cs:-translate-x-1/2 cs:mt-2",
  left: "cs:right-full cs:top-1/2 cs:-translate-y-1/2 cs:mr-2",
  right: "cs:left-full cs:top-1/2 cs:-translate-y-1/2 cs:ml-2",
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: "cs:top-full cs:left-1/2 cs:-translate-x-1/2 cs:border-t-gray-900 cs:dark:border-t-gray-100 cs:border-x-transparent cs:border-b-transparent cs:border-4",
  bottom: "cs:bottom-full cs:left-1/2 cs:-translate-x-1/2 cs:border-b-gray-900 cs:dark:border-b-gray-100 cs:border-x-transparent cs:border-t-transparent cs:border-4",
  left: "cs:left-full cs:top-1/2 cs:-translate-y-1/2 cs:border-l-gray-900 cs:dark:border-l-gray-100 cs:border-y-transparent cs:border-r-transparent cs:border-4",
  right: "cs:right-full cs:top-1/2 cs:-translate-y-1/2 cs:border-r-gray-900 cs:dark:border-r-gray-100 cs:border-y-transparent cs:border-l-transparent cs:border-4",
};

const opposite: Record<TooltipPosition, TooltipPosition> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

function resolvePosition(
  wrapperEl: HTMLElement,
  preferred: TooltipPosition,
  tooltipEl: HTMLElement | null,
): TooltipPosition {
  const rect = wrapperEl.getBoundingClientRect();
  // Use actual tooltip size if available, otherwise estimate
  const tooltipRect = tooltipEl?.getBoundingClientRect();
  const tooltipH = tooltipRect?.height ?? 32;
  const tooltipW = tooltipRect?.width ?? 80;
  const gap = 8; // arrow + margin space

  const spaceTop = rect.top;
  const spaceBottom = window.innerHeight - rect.bottom;
  const spaceLeft = rect.left;
  const spaceRight = window.innerWidth - rect.right;

  const needed: Record<TooltipPosition, number> = {
    top: tooltipH + gap,
    bottom: tooltipH + gap,
    left: tooltipW + gap,
    right: tooltipW + gap,
  };

  const hasSpace: Record<TooltipPosition, boolean> = {
    top: spaceTop >= needed.top,
    bottom: spaceBottom >= needed.bottom,
    left: spaceLeft >= needed.left,
    right: spaceRight >= needed.right,
  };

  if (hasSpace[preferred]) return preferred;

  // Try opposite direction first
  const opp = opposite[preferred];
  if (hasSpace[opp]) return opp;

  // Fallback: try all other directions
  for (const dir of (["bottom", "top", "right", "left"] as const)) {
    if (hasSpace[dir]) return dir;
  }

  // Last resort: return preferred even if it clips
  return preferred;
}

export function Tooltip({
  children,
  content,
  position = "top",
  delay = 300,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [resolvedPosition, setResolvedPosition] = useState<TooltipPosition>(position);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  const show = useCallback(() => {
    timerRef.current = setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsVisible(false);
  }, []);

  // Resolve position after tooltip becomes visible (before paint)
  useLayoutEffect(() => {
    if (isVisible && wrapperRef.current) {
      setResolvedPosition(
        resolvePosition(wrapperRef.current, position, tooltipRef.current),
      );
    }
  }, [isVisible, position]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible, hide]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="cs:relative cs:inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <div aria-describedby={isVisible ? tooltipId : undefined}>
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className={clsx(
            "cs:absolute cs:z-40 cs:whitespace-nowrap cs:rounded-md cs:px-2 cs:py-1 cs:text-xs cs:font-sans cs:bg-gray-900 cs:text-white cs:dark:bg-gray-100 cs:dark:text-gray-900 cs:shadow-md cs:pointer-events-none",
            positionClasses[resolvedPosition],
            className,
          )}
        >
          {content}
          <div
            className={clsx("cs:absolute cs:h-0 cs:w-0", arrowClasses[resolvedPosition])}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}
