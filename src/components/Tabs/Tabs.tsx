import clsx from "clsx";
import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useId,
  useMemo,
  useState,
} from "react";
import { isPresetColor } from "../Constants/colorUtils";
import type { Color, PresetColor, Scale } from "../DesignSystemUtils";
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

const borderColorMap: Record<PresetColor, string> = {
  red: "cs:border-red-600",
  orange: "cs:border-orange-600",
  amber: "cs:border-amber-600",
  yellow: "cs:border-yellow-600",
  lime: "cs:border-lime-600",
  green: "cs:border-green-600",
  emerald: "cs:border-emerald-600",
  teal: "cs:border-teal-600",
  cyan: "cs:border-cyan-600",
  sky: "cs:border-sky-600",
  blue: "cs:border-blue-600",
  indigo: "cs:border-indigo-600",
  violet: "cs:border-violet-600",
  purple: "cs:border-purple-600",
  fuchsia: "cs:border-fuchsia-600",
  pink: "cs:border-pink-600",
  rose: "cs:border-rose-600",
  slate: "cs:border-slate-600",
  gray: "cs:border-gray-600",
  zinc: "cs:border-zinc-600",
  neutral: "cs:border-neutral-600",
  stone: "cs:border-stone-600",
};

const textColorMap: Record<PresetColor, string> = {
  red: "cs:text-red-600",
  orange: "cs:text-orange-600",
  amber: "cs:text-amber-600",
  yellow: "cs:text-yellow-600",
  lime: "cs:text-lime-600",
  green: "cs:text-green-600",
  emerald: "cs:text-emerald-600",
  teal: "cs:text-teal-600",
  cyan: "cs:text-cyan-600",
  sky: "cs:text-sky-600",
  blue: "cs:text-blue-600",
  indigo: "cs:text-indigo-600",
  violet: "cs:text-violet-600",
  purple: "cs:text-purple-600",
  fuchsia: "cs:text-fuchsia-600",
  pink: "cs:text-pink-600",
  rose: "cs:text-rose-600",
  slate: "cs:text-slate-600",
  gray: "cs:text-gray-600",
  zinc: "cs:text-zinc-600",
  neutral: "cs:text-neutral-600",
  stone: "cs:text-stone-600",
};

const scaleMap: Record<Scale, string> = {
  sm: "cs:text-xs cs:px-3 cs:py-1.5",
  md: "cs:text-sm cs:px-4 cs:py-2",
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
  const finalColor = contextUIColor ?? color;

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
      <div className={clsx("cs:font-sans", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children, className }: TabsListProps) {
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

  return (
    <div
      role="tablist"
      onKeyDown={handleKeyDown}
      className={clsx(
        "cs:flex cs:border-b cs:border-gray-200 cs:dark:border-gray-700",
        className,
      )}
    >
      {children}
    </div>
  );
}

function TabsTrigger({ children, value, disabled = false, className }: TabsTriggerProps) {
  const ctx = useTabsContext();
  const isActive = ctx.activeValue === value;
  const tabId = `${ctx.baseId}-tab-${value}`;
  const panelId = `${ctx.baseId}-panel-${value}`;

  const activeClasses = isActive
    ? clsx(
        "cs:border-b-2 cs:-mb-px",
        isPresetColor(ctx.color) && borderColorMap[ctx.color],
        isPresetColor(ctx.color) && textColorMap[ctx.color],
        !isPresetColor(ctx.color) && "cs-custom-tab-active",
      )
    : "cs:text-gray-500 cs:dark:text-gray-400 cs:hover:text-gray-700 cs:dark:hover:text-gray-300";

  return (
    <button
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => ctx.onChange(value)}
      className={clsx(
        "cs:font-medium cs:transition-colors cs:duration-150 cs:outline-none cs:disabled:opacity-50 cs:disabled:cursor-not-allowed",
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
