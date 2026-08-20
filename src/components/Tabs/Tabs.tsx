import clsx from "clsx";
import React, {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING, TOUCH_TARGET_MIN, TRANSITION_FAST } from "../Constants/designTokens";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";
import { PillBox } from "../PillBox/PillBox";
import { Slot } from "../Slot/Slot";
import { TabsContext, useTabsContext } from "./TabsContext";
import type { TabsVariant } from "./TabsContext";

interface TabsProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /**
   * How the tab row reads against the content below it. Defaults to
   * `underline`, which is what every existing caller already renders.
   *
   * Reach for `enclosed` when the reader has to see *which* content belongs to
   * the selected tab — sibling records on one form, for instance, where an
   * underline leaves the tab and its body looking like two unrelated blocks.
   */
  variant?: TabsVariant;
  scale?: Scale;
  color?: Color;
  className?: string;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
  asChild?: boolean;
  /**
   * Icon shown before the label. Sized from the Tabs `scale` — pass the bare
   * icon, not a pre-sized one.
   *
   * Ignored with `asChild`, which forwards a single child element as-is.
   */
  icon?: React.ReactElement<{ className?: string }>;
  /**
   * Item count shown after the label as a pill. The active tab's pill picks up
   * the theme colour so it reads with the underline; inactive tabs stay grey.
   *
   * `0` still renders — "0 件" is information. Omit the prop for no pill.
   */
  count?: number;
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem] cs:px-2 cs:py-1",
  sm: "cs:text-xs cs:px-3 cs:py-1.5",
  md: "cs:text-sm cs:px-4 cs:py-2",
  lg: "cs:text-base cs:px-5 cs:py-2.5",
};

/** Icon size per tab scale, matching Button.Icon's ladder. */
const iconScaleMap: Record<Scale, string> = {
  xs: "cs:size-3",
  sm: "cs:size-4",
  md: "cs:size-4",
  lg: "cs:size-5",
};

/** The count pill runs one step smaller than the tab it sits in. */
const countScaleMap: Record<Scale, Scale> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "sm",
};

export function Tabs({
  children,
  value: controlledValue,
  defaultValue = "",
  onChange,
  scale,
  color,
  variant = "underline",
  className,
}: TabsProps) {
  const baseId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(color ?? contextUIColor ?? "blue");

  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange],
  );

  const [panels, setPanels] = useState<ReadonlySet<string>>(() => new Set());
  const registerPanel = useCallback((panelValue: string) => {
    setPanels((prev) => {
      if (prev.has(panelValue)) return prev;
      const next = new Set(prev);
      next.add(panelValue);
      return next;
    });
  }, []);
  const unregisterPanel = useCallback((panelValue: string) => {
    setPanels((prev) => {
      if (!prev.has(panelValue)) return prev;
      const next = new Set(prev);
      next.delete(panelValue);
      return next;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      activeValue,
      onChange: handleChange,
      baseId,
      scale,
      color: finalColor,
      variant,
      panels,
      registerPanel,
      unregisterPanel,
    }),
    [activeValue, handleChange, baseId, scale, finalColor, variant, panels, registerPanel, unregisterPanel],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={clsx("cs:font-sans cs:text-gray-900 cs:dark:text-gray-300", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children, className }: TabsListProps) {
  const { variant } = useTabsContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateScrollState]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled]):not([aria-disabled="true"])'),
    );
    const currentIndex = tabs.indexOf(e.target as HTMLElement);
    if (currentIndex === -1) return;

    let nextIndex: number | null = null;

    switch (e.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    }
  }, []);

  const showScrollButtons = canScrollLeft || canScrollRight;

  return (
    <div className="cs:relative cs:flex cs:items-center">
      {showScrollButtons && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          disabled={!canScrollLeft}
          onClick={() => scroll("left")}
          className="cs:border-0 cs:shadow-none cs:flex cs:shrink-0 cs:items-center cs:justify-center cs:size-8 cs:rounded-full cs:text-gray-400 cs:dark:text-gray-500 cs:disabled:opacity-0 cs:hover:not-disabled:text-gray-600 cs:dark:hover:not-disabled:text-gray-300 cs:hover:not-disabled:bg-gray-100 cs:dark:hover:not-disabled:bg-gray-800 cs:transition-opacity cs:duration-150"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="cs:size-5" aria-hidden="true">
            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      <div
        ref={scrollRef}
        role="tablist"
        onKeyDown={handleKeyDown}
        onScroll={updateScrollState}
        className={clsx(
          "cs:flex cs:flex-1 cs:min-w-0 cs:overflow-x-auto cs:overflow-y-hidden cs-scrollbar-none cs:-mb-px",
          // The underline variant needs a rule for the active tab to sit on.
          // `enclosed` must not draw one: a line running the full width is
          // exactly what separates the tab from its body.
          variant === "underline" && "cs:border-b cs:border-gray-200 cs:dark:border-gray-700",
          className,
        )}
      >
        {children}
      </div>
      {showScrollButtons && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          disabled={!canScrollRight}
          onClick={() => scroll("right")}
          className="cs:border-0 cs:shadow-none cs:flex cs:shrink-0 cs:items-center cs:justify-center cs:size-8 cs:rounded-full cs:text-gray-400 cs:dark:text-gray-500 cs:disabled:opacity-0 cs:hover:not-disabled:text-gray-600 cs:dark:hover:not-disabled:text-gray-300 cs:hover:not-disabled:bg-gray-100 cs:dark:hover:not-disabled:bg-gray-800 cs:transition-opacity cs:duration-150"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="cs:size-5" aria-hidden="true">
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
}

function TabsTrigger({
  children,
  value,
  disabled = false,
  className,
  asChild = false,
  icon,
  count,
}: TabsTriggerProps) {
  const ctx = useTabsContext();
  const isActive = ctx.activeValue === value;
  const tabId = `${ctx.baseId}-tab-${value}`;
  const panelId = `${ctx.baseId}-panel-${value}`;
  const elRef = useRef<HTMLElement>(null);

  const colorStyle = colorToCSSVars(ctx.color);

  useEffect(() => {
    if (isActive && elRef.current) {
      elRef.current.scrollIntoView?.({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, [isActive]);

  // The active tab either underlines itself or becomes a folder tab that the
  // panel appears to hang from. `enclosed` needs an opaque background: the row
  // draws a rule along its whole width, and the tab has to paint over the
  // 1px it sits on, otherwise the seam stays visible and nothing looks joined.
  const enclosed = ctx.variant === "enclosed";
  const activeClasses = isActive
    ? enclosed
      ? // One weight on all three sides, and none along the bottom: the tab has
        // to look like the top of the panel, not like a box parked above it.
        // The border stays grey so it matches the panel's own outline — only
        // the label takes the theme colour.
        //
        // ⚠️ `gray-300`, not the `gray-200` the underline row uses. At 200 the
        // outline is too faint to read as a join: the tab and the panel look
        // like two pale shapes rather than one. **The consumer's panel must use
        // the same value** or the seam reappears.
        "cs:bg-white cs:dark:bg-gray-800 cs:border cs:border-b-0 cs:border-gray-300 cs:dark:border-gray-600 cs:rounded-t-md cs:-mb-px cs-tab-active-text"
      : "cs:border-b-2 cs:-mb-px cs-tab-active"
    : clsx(
        "cs:text-gray-500 cs:dark:text-gray-400 cs:hover:text-gray-700 cs:dark:hover:text-gray-300",
        // Reserve the same box the active tab occupies, so selecting a tab does
        // not shift the row by a pixel.
        enclosed && "cs:border cs:border-b-0 cs:border-transparent cs:rounded-t-md cs:-mb-px",
      );

  const scale = ctx.scale ?? "md";

  const sharedProps = {
    role: "tab" as const,
    id: tabId,
    "aria-selected": isActive,
    // Only claim to control a panel that is actually rendered. Tabs used for
    // navigation have no Tabs.Content at all, and a dangling aria-controls is
    // an invalid ARIA reference.
    ...(!asChild && ctx.panels.has(value) && { "aria-controls": panelId }),
    tabIndex: isActive ? 0 : -1,
    style: isActive ? colorStyle : undefined,
    onClick: () => ctx.onChange(value),
    className: clsx(
      `cs:shadow-none cs:font-medium cs:whitespace-nowrap cs:no-underline ${TRANSITION_FAST} ${FOCUS_RING} ${TOUCH_TARGET_MIN} cs:disabled:opacity-50 cs:disabled:cursor-not-allowed`,
      // ⚠️ `border-0` must not be in play for `enclosed`. It and `border` are the
      // same width utility, so which one lands is decided by the order they were
      // generated into the stylesheet — not by the order they appear here. The
      // enclosed tab lost its outline entirely that way. `underline` still needs
      // it, so that a button's default border never shows through.
      !enclosed && "cs:border-0",
      // An icon or count turns the label into a row; without them the original
      // block layout is left untouched so existing tabs render identically.
      (icon || count !== undefined) && "cs:inline-flex cs:items-center cs:gap-1.5",
      scaleMap[scale],
      activeClasses,
      className,
    ),
  };

  if (asChild) {
    return (
      <Slot ref={elRef} {...sharedProps}>
        {children as React.ReactElement}
      </Slot>
    );
  }

  return (
    <button
      ref={elRef as React.RefObject<HTMLButtonElement>}
      type="button"
      disabled={disabled}
      {...sharedProps}
    >
      {icon &&
        React.cloneElement(icon, {
          className: `${icon.props.className ?? ""} ${iconScaleMap[scale]}`.trim(),
          "aria-hidden": true,
        } as { className: string })}
      {children}
      {count !== undefined && (
        <PillBox
          // The active pill takes the theme colour so it reads with the
          // underline; inactive tabs stay grey and recede.
          color={isActive ? ctx.color : "gray"}
          scale={countScaleMap[scale]}
          label={String(count)}
        />
      )}
    </button>
  );
}

function TabsContent({ children, value, className }: TabsContentProps) {
  const ctx = useTabsContext();
  const isActive = ctx.activeValue === value;
  const tabId = `${ctx.baseId}-tab-${value}`;
  const panelId = `${ctx.baseId}-panel-${value}`;

  // Tell the trigger this panel exists, so it can point aria-controls at it.
  // Only the active panel is rendered, so registration follows the selection.
  const { registerPanel, unregisterPanel } = ctx;
  useEffect(() => {
    if (!isActive) return;
    registerPanel(value);
    return () => unregisterPanel(value);
  }, [isActive, value, registerPanel, unregisterPanel]);

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      className={clsx("cs:py-4", className)}
    >
      {children}
    </div>
  );
}

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
