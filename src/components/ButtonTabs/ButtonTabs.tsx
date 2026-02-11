import clsx from "clsx";
import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useId,
  useMemo,
  useState,
} from "react";
import { colorToCSSVars, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { FOCUS_RING, TOUCH_TARGET_MIN, TRANSITION_FAST } from "../Constants/designTokens";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";
import { ButtonTabsContext, useButtonTabsContext } from "./ButtonTabsContext";

interface ButtonTabsProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  scale?: Scale;
  color?: Color;
  className?: string;
}

interface ButtonTabsListProps {
  children: ReactNode;
  className?: string;
}

interface ButtonTabsTriggerProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}

interface ButtonTabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem] cs:px-2 cs:py-0.5",
  sm: "cs:text-xs cs:px-3 cs:py-1",
  md: "cs:text-sm cs:px-4 cs:py-1.5",
  lg: "cs:text-base cs:px-5 cs:py-2",
};

export function ButtonTabs({
  children,
  value: controlledValue,
  defaultValue = "",
  onChange,
  scale,
  color = "blue",
  className,
}: ButtonTabsProps) {
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
    <ButtonTabsContext.Provider value={contextValue}>
      <div className={clsx("cs:font-sans cs:text-gray-900 cs:dark:text-gray-300", className)}>{children}</div>
    </ButtonTabsContext.Provider>
  );
}

function ButtonTabsList({ children, className }: ButtonTabsListProps) {
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
        "cs:inline-flex cs:rounded-lg cs:bg-gray-100 cs:dark:bg-gray-800 cs:p-1 cs:gap-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ButtonTabsTrigger({ children, value, disabled = false, className }: ButtonTabsTriggerProps) {
  const { activeValue, onChange, baseId, scale = "md", color } = useButtonTabsContext();
  const isActive = activeValue === value;
  const colorStyle = colorToCSSVars(color);

  const textColor = isPresetColor(color) && LIGHT_BG_COLORS.has(color)
    ? "cs:text-gray-900"
    : "cs:text-white cs:dark:text-gray-200";

  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  return (
    <button
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => !disabled && onChange(value)}
      style={isActive ? colorStyle : undefined}
      className={clsx(
        "cs:font-medium cs:cursor-pointer cs:whitespace-nowrap cs:rounded-md",
        scaleMap[scale],
        TRANSITION_FAST,
        FOCUS_RING,
        "cs-focus-visible",
        TOUCH_TARGET_MIN,
        isActive
          ? `cs-btn-tab-active ${textColor} cs:shadow-sm`
          : "cs:text-gray-600 cs:dark:text-gray-400 cs:hover:bg-gray-200 cs:dark:hover:bg-gray-700",
        disabled && "cs:opacity-50 cs:cursor-not-allowed",
        className,
      )}
    >
      {children}
    </button>
  );
}

function ButtonTabsContent({ children, value, className }: ButtonTabsContentProps) {
  const { activeValue, baseId } = useButtonTabsContext();

  if (activeValue !== value) return null;

  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      className={clsx("cs:mt-2", className)}
    >
      {children}
    </div>
  );
}

ButtonTabs.List = ButtonTabsList;
ButtonTabs.Trigger = ButtonTabsTrigger;
ButtonTabs.Content = ButtonTabsContent;
