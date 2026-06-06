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

// Main-axis offset: which trigger edge the panel sits against, plus a gap.
const placementClasses: Record<PopoverPlacement, string> = {
  top: "cs:bottom-full cs:mb-2",
  bottom: "cs:top-full cs:mt-2",
  left: "cs:right-full cs:mr-2",
  right: "cs:left-full cs:ml-2",
};

// Cross-axis alignment for top/bottom placements (horizontal).
const horizontalAlignClasses: Record<PopoverAlign, string> = {
  start: "cs:left-0",
  center: "cs:left-1/2 cs:-translate-x-1/2",
  end: "cs:right-0",
};

// Cross-axis alignment for left/right placements (vertical).
const verticalAlignClasses: Record<PopoverAlign, string> = {
  start: "cs:top-0",
  center: "cs:top-1/2 cs:-translate-y-1/2",
  end: "cs:bottom-0",
};

function alignClassesFor(placement: PopoverPlacement, align: PopoverAlign): string {
  return placement === "top" || placement === "bottom"
    ? horizontalAlignClasses[align]
    : verticalAlignClasses[align];
}

function resolvePlacement(
  triggerEl: HTMLElement,
  preferred: PopoverPlacement,
  contentEl: HTMLElement | null,
): PopoverPlacement {
  const rect = triggerEl.getBoundingClientRect();
  const contentRect = contentEl?.getBoundingClientRect();
  const contentH = contentRect?.height ?? 200;
  const contentW = contentRect?.width ?? 240;
  const gap = 8;

  const hasSpace: Record<PopoverPlacement, boolean> = {
    top: rect.top >= contentH + gap,
    bottom: window.innerHeight - rect.bottom >= contentH + gap,
    left: rect.left >= contentW + gap,
    right: window.innerWidth - rect.right >= contentW + gap,
  };

  if (hasSpace[preferred]) return preferred;
  if (hasSpace[opposite[preferred]]) return opposite[preferred];
  for (const dir of ["bottom", "top", "right", "left"] as const) {
    if (hasSpace[dir]) return dir;
  }
  return preferred;
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
    resolvedPlacement,
    setResolvedPlacement,
    triggerRef,
    contentRef,
  } = usePopoverContext("Popover.Content");

  // Flip to a side with room before paint, once the panel is measurable.
  useLayoutEffect(() => {
    if (open && triggerRef.current) {
      setResolvedPlacement(
        resolvePlacement(triggerRef.current, placement, contentRef.current),
      );
    }
  }, [open, placement, setResolvedPlacement, triggerRef, contentRef]);

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
      className={clsx(
        "cs:absolute cs:z-40 cs:min-w-[8rem] cs:rounded-md cs:font-sans",
        "cs:border cs:border-gray-200 cs:dark:border-gray-700",
        "cs:bg-white cs:dark:bg-gray-800 cs:text-gray-900 cs:dark:text-gray-200",
        "cs:shadow-lg cs:p-2",
        placementClasses[resolvedPlacement],
        alignClassesFor(resolvedPlacement, align),
        className,
      )}
    >
      {children}
    </div>
  );
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
