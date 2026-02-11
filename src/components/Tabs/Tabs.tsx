import clsx from "clsx";
import {
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
import { TabsContext, useTabsContext } from "./TabsContext";

interface TabsProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
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

export function Tabs({
  children,
  value: controlledValue,
  defaultValue = "",
  onChange,
  scale,
  color = "blue",
  className,
}: TabsProps) {
  const baseId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);

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

  const contextValue = useMemo(
    () => ({ activeValue, onChange: handleChange, baseId, scale, color: finalColor }),
    [activeValue, handleChange, baseId, scale, finalColor],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={clsx("cs:font-sans cs:text-gray-900 cs:dark:text-gray-300", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children, className }: TabsListProps) {
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
      e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])'),
    );
    const currentIndex = tabs.indexOf(e.target as HTMLButtonElement);
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
          "cs:flex cs:flex-1 cs:min-w-0 cs:overflow-x-auto cs:overflow-y-hidden cs-scrollbar-none cs:-mb-px cs:border-b cs:border-gray-200 cs:dark:border-gray-700",
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

function TabsTrigger({ children, value, disabled = false, className }: TabsTriggerProps) {
  const ctx = useTabsContext();
  const isActive = ctx.activeValue === value;
  const tabId = `${ctx.baseId}-tab-${value}`;
  const panelId = `${ctx.baseId}-panel-${value}`;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const colorStyle = colorToCSSVars(ctx.color);

  useEffect(() => {
    if (isActive && buttonRef.current) {
      buttonRef.current.scrollIntoView?.({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, [isActive]);

  const activeClasses = isActive
    ? "cs:border-b-2 cs:-mb-px cs-tab-active"
    : "cs:text-gray-500 cs:dark:text-gray-400 cs:hover:text-gray-700 cs:dark:hover:text-gray-300";

  return (
    <button
      ref={buttonRef}
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      style={isActive ? colorStyle : undefined}
      onClick={() => ctx.onChange(value)}
      className={clsx(
        `cs:border-0 cs:shadow-none cs:font-medium cs:whitespace-nowrap ${TRANSITION_FAST} ${FOCUS_RING} ${TOUCH_TARGET_MIN} cs:disabled:opacity-50 cs:disabled:cursor-not-allowed`,
        scaleMap[ctx.scale ?? "md"],
        activeClasses,
        className,
      )}
    >
      {children}
    </button>
  );
}

function TabsContent({ children, value, className }: TabsContentProps) {
  const ctx = useTabsContext();
  const isActive = ctx.activeValue === value;
  const tabId = `${ctx.baseId}-tab-${value}`;
  const panelId = `${ctx.baseId}-panel-${value}`;

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
