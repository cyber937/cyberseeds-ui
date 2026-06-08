"use client";

import clsx from "clsx";
import {
  type ReactElement,
  type ReactNode,
  type RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Slot } from "../Slot/Slot";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";
export type PopoverAlign = "start" | "center" | "end";

interface PopoverContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  triggerId: string;
  contentId: string;
  placement: PopoverPlacement;
  align: PopoverAlign;
  resolvedPlacement: PopoverPlacement;
  setResolvedPlacement: (placement: PopoverPlacement) => void;
  triggerRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

function usePopoverContext(component: string): PopoverContextType {
  const ctx = useContext(PopoverContext);
  if (!ctx) {
    throw new Error(`${component} must be used within a <Popover>`);
  }
  return ctx;
}

interface PopoverProps {
  children: ReactNode;
  /** Preferred side relative to the trigger. Auto-flips if there isn't room. */
  placement?: PopoverPlacement;
  /** Alignment along the cross axis. */
  align?: PopoverAlign;
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean;
  /** Controlled open state. Pair with `onOpenChange`. */
  open?: boolean;
  /** Called whenever the open state should change (controlled or not). */
  onOpenChange?: (open: boolean) => void;
}

export function Popover({
  children,
  placement = "bottom",
  align = "center",
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: PopoverProps) {
  const triggerId = useId();
  const contentId = useId();
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const [resolvedPlacement, setResolvedPlacement] =
    useState<PopoverPlacement>(placement);

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

  // Close on outside pointer-down and on Escape, while open.
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        contentRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        // Return focus to the trigger for keyboard users.
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  const contextValue = useMemo<PopoverContextType>(
    () => ({
      open,
      setOpen,
      toggle,
      triggerId,
      contentId,
      placement,
      align,
      resolvedPlacement,
      setResolvedPlacement,
      triggerRef,
      contentRef,
    }),
    [open, setOpen, toggle, triggerId, contentId, placement, align, resolvedPlacement],
  );

  return (
    <PopoverContext.Provider value={contextValue}>
      <div className="cs:relative cs:inline-block">{children}</div>
    </PopoverContext.Provider>
  );
}

// ----------------------------------------------------------------- Trigger

interface PopoverTriggerProps {
  children: ReactNode;
  /** Render the single child as the trigger instead of a wrapping `<button>`. */
  asChild?: boolean;
  /** Value for `aria-haspopup`. Composed components (e.g. Menu) override this. */
  haspopup?: "dialog" | "menu" | "listbox" | "grid" | "tree" | "true";
  className?: string;
}

function PopoverTrigger({
  children,
  asChild = false,
  haspopup = "dialog",
  className,
}: PopoverTriggerProps) {
  const { open, toggle, triggerId, contentId, triggerRef } =
    usePopoverContext("Popover.Trigger");

  // Callback ref so the same handler works for the default <button> and for
  // an arbitrary `asChild` element (avoids HTMLButtonElement/HTMLElement mismatch).
  const setTriggerRef = useCallback(
    (node: HTMLElement | null) => {
      triggerRef.current = node;
    },
    [triggerRef],
  );

  const triggerProps = {
    id: triggerId,
    ref: setTriggerRef,
    "aria-haspopup": haspopup,
    "aria-expanded": open,
    "aria-controls": open ? contentId : undefined,
    onClick: toggle,
  };

  if (asChild) {
    return (
      <Slot {...triggerProps} className={className}>
        {children as ReactElement}
      </Slot>
    );
  }

  return (
    <button type="button" {...triggerProps} className={className}>
      {children}
    </button>
  );
}

// ----------------------------------------------------------------- Content

const opposite: Record<PopoverPlacement, PopoverPlacement> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

const GAP = 8; // space between the trigger and the panel
const MARGIN = 8; // min space the panel keeps from the viewport edge

interface Coords {
  top: number;
  left: number;
  placement: PopoverPlacement;
}

const clamp = (value: number, lo: number, hi: number): number =>
  Math.min(Math.max(value, lo), hi);

/**
 * Viewport-aware position for the panel, expressed as fixed coordinates.
 *
 * `position: fixed` is used (not absolute) so the panel escapes any
 * `overflow` ancestor — e.g. a scrollable table — instead of being clipped.
 * It flips to the side with room when the preferred side overflows, then
 * shifts/clamps along both axes so no edge leaves the viewport.
 */
function computePosition(
  triggerRect: DOMRect,
  contentW: number,
  contentH: number,
  preferred: PopoverPlacement,
  align: PopoverAlign,
): Coords {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const t = triggerRect;

  const space: Record<PopoverPlacement, number> = {
    top: t.top - GAP,
    bottom: vh - t.bottom - GAP,
    left: t.left - GAP,
    right: vw - t.right - GAP,
  };
  const need = (p: PopoverPlacement) =>
    p === "top" || p === "bottom" ? contentH : contentW;

  // Flip: keep the preferred side if it fits, else the opposite if it fits,
  // else whichever side has the most room.
  let placement = preferred;
  if (space[placement] < need(placement)) {
    const opp = opposite[placement];
    placement =
      space[opp] >= need(placement)
        ? opp
        : (Object.keys(space) as PopoverPlacement[]).reduce((a, b) =>
            space[b] > space[a] ? b : a,
          );
  }

  let top = 0;
  let left = 0;

  // Main axis (which trigger edge the panel sits against).
  if (placement === "top") top = t.top - GAP - contentH;
  else if (placement === "bottom") top = t.bottom + GAP;
  else if (placement === "left") left = t.left - GAP - contentW;
  else left = t.right + GAP;

  // Cross axis (alignment relative to the trigger).
  if (placement === "top" || placement === "bottom") {
    if (align === "start") left = t.left;
    else if (align === "center") left = t.left + t.width / 2 - contentW / 2;
    else left = t.right - contentW;
  } else {
    if (align === "start") top = t.top;
    else if (align === "center") top = t.top + t.height / 2 - contentH / 2;
    else top = t.bottom - contentH;
  }

  // Shift so neither edge leaves the viewport (clamp within the margins).
  left = clamp(left, MARGIN, Math.max(MARGIN, vw - contentW - MARGIN));
  top = clamp(top, MARGIN, Math.max(MARGIN, vh - contentH - MARGIN));

  return { top, left, placement };
}

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
  /** Override the panel role (e.g. `"menu"`). Defaults to `"dialog"`. */
  role?: string;
  /** Move focus to the first focusable element in the panel when it opens. */
  autoFocus?: boolean;
  /** Forwarded to the panel element (used by composed components like Menu). */
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  "aria-label"?: string;
}

const FOCUSABLE_SELECTOR =
  '[role="menuitem"]:not([aria-disabled="true"]),button:not([disabled]),[href],input:not([disabled]),[tabindex]:not([tabindex="-1"])';

function PopoverContent({
  children,
  className,
  role = "dialog",
  autoFocus = false,
  onKeyDown,
  "aria-label": ariaLabel,
}: PopoverContentProps) {
  const {
    open,
    contentId,
    triggerId,
    placement,
    align,
    setResolvedPlacement,
    triggerRef,
    contentRef,
  } = usePopoverContext("Popover.Content");

  const [coords, setCoords] = useState<Coords | null>(null);
  const frameRef = useRef<number | null>(null);

  const reposition = useCallback(() => {
    const trigger = triggerRef.current;
    const content = contentRef.current;
    if (!trigger || !content) return;
    const next = computePosition(
      trigger.getBoundingClientRect(),
      content.offsetWidth,
      content.offsetHeight,
      placement,
      align,
    );
    setCoords(next);
    setResolvedPlacement(next.placement);
  }, [placement, align, triggerRef, contentRef, setResolvedPlacement]);

  // Coalesce bursts of scroll/resize events into one reposition per frame
  // so we don't setState on every event while open.
  const scheduleReposition = useCallback(() => {
    if (frameRef.current != null) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      reposition();
    });
  }, [reposition]);

  // Position before paint so there's no visible jump from a default spot.
  useLayoutEffect(() => {
    if (open) reposition();
  }, [open, reposition]);

  // Keep the panel anchored while scrolling/resizing (fixed coords are
  // viewport-relative, so the trigger moves under them otherwise).
  useEffect(() => {
    if (!open) return;
    window.addEventListener("scroll", scheduleReposition, true);
    window.addEventListener("resize", scheduleReposition);
    return () => {
      window.removeEventListener("scroll", scheduleReposition, true);
      window.removeEventListener("resize", scheduleReposition);
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [open, scheduleReposition]);

  // Optionally move focus into the panel when it opens (used by Menu).
  useEffect(() => {
    if (open && autoFocus) {
      const first = contentRef.current?.querySelector<HTMLElement>(
        FOCUSABLE_SELECTOR,
      );
      first?.focus();
    }
  }, [open, autoFocus, contentRef]);

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      id={contentId}
      role={role}
      aria-labelledby={role === "dialog" ? triggerId : undefined}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      style={{
        position: "fixed",
        top: coords?.top ?? 0,
        left: coords?.left ?? 0,
        // Hidden until measured so the first paint doesn't flash at (0,0).
        visibility: coords ? "visible" : "hidden",
      }}
      className={clsx(
        "cs:z-40 cs:min-w-[8rem] cs:rounded-md cs:font-sans",
        "cs:border cs:border-gray-200 cs:dark:border-gray-700",
        "cs:bg-white cs:dark:bg-gray-800 cs:text-gray-900 cs:dark:text-gray-200",
        "cs:shadow-lg cs:p-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
