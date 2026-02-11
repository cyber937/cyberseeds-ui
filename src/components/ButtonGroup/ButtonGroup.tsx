import clsx from "clsx";
import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { colorToCSSVars, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { FOCUS_RING, TOUCH_TARGET_MIN, TRANSITION_FAST } from "../Constants/designTokens";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";
import { ButtonGroupContext, useButtonGroupContext } from "./ButtonGroupContext";

interface ButtonGroupProps {
  children: ReactNode;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  color?: Color;
  scale?: Scale;
  className?: string;
}

interface ButtonGroupItemProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-0.5 cs:text-[0.625rem]",
  sm: "cs:px-3 cs:py-1 cs:text-xs",
  md: "cs:px-4 cs:py-1.5 cs:text-sm",
  lg: "cs:px-5 cs:py-2 cs:text-base",
};

function toSet(val: string | string[] | undefined): Set<string> {
  if (!val) return new Set();
  return new Set(Array.isArray(val) ? val : [val]);
}

export function ButtonGroup({
  children,
  value: controlledValue,
  defaultValue,
  onChange,
  multiple = false,
  color = "blue",
  scale = "md",
  className,
}: ButtonGroupProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(() => toSet(defaultValue));
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);

  const isControlled = controlledValue !== undefined;
  const selectedValues = isControlled ? toSet(controlledValue) : uncontrolledValue;

  const onSelect = useCallback(
    (val: string) => {
      let next: Set<string>;
      if (multiple) {
        next = new Set(selectedValues);
        if (next.has(val)) next.delete(val);
        else next.add(val);
      } else {
        next = new Set([val]);
      }

      if (!isControlled) {
        setUncontrolledValue(next);
      }
      const result = multiple ? Array.from(next) : val;
      onChange?.(result);
    },
    [multiple, selectedValues, isControlled, onChange],
  );

  const contextValue = useMemo(
    () => ({ selectedValues, onSelect, scale, color: finalColor, multiple }),
    [selectedValues, onSelect, scale, finalColor, multiple],
  );

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (multiple) return;

    const buttons = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>('button[role="radio"]:not([disabled])'),
    );
    const currentIndex = buttons.indexOf(e.target as HTMLButtonElement);
    if (currentIndex === -1) return;

    let nextIndex: number | null = null;

    switch (e.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % buttons.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = buttons.length - 1;
        break;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      buttons[nextIndex].focus();
      buttons[nextIndex].click();
    }
  }, [multiple]);

  return (
    <ButtonGroupContext.Provider value={contextValue}>
      <div
        role={multiple ? "group" : "radiogroup"}
        onKeyDown={handleKeyDown}
        className={clsx("cs:inline-flex cs:font-sans", className)}
      >
        {children}
      </div>
    </ButtonGroupContext.Provider>
  );
}

function ButtonGroupItem({ children, value, disabled = false, className }: ButtonGroupItemProps) {
  const ctx = useButtonGroupContext();
  const isSelected = ctx.selectedValues.has(value);
  const colorStyle = colorToCSSVars(ctx.color);

  const textColor = isPresetColor(ctx.color) && LIGHT_BG_COLORS.has(ctx.color)
    ? "cs:text-gray-900"
    : "cs:text-white cs:dark:text-gray-200";

  const activeClasses = `cs-btn-primary ${textColor}`;
  const inactiveClasses = "cs:text-gray-700 cs:dark:text-gray-400 cs:ring-1 cs:ring-inset cs:ring-gray-300 cs:dark:ring-gray-600 cs:bg-white cs:dark:bg-gray-800 cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700";

  return (
    <button
      type="button"
      role={ctx.multiple ? "checkbox" : "radio"}
      aria-checked={isSelected}
      disabled={disabled}
      tabIndex={ctx.multiple ? 0 : (isSelected ? 0 : -1)}
      onClick={() => !disabled && ctx.onSelect(value)}
      style={isSelected ? colorStyle : undefined}
      className={clsx(
        "cs:font-medium cs:cursor-pointer cs:whitespace-nowrap",
        "first:cs:rounded-l-md last:cs:rounded-r-md",
        scaleMap[ctx.scale],
        TRANSITION_FAST,
        FOCUS_RING,
        "cs-focus-visible",
        TOUCH_TARGET_MIN,
        isSelected ? activeClasses : inactiveClasses,
        disabled && "cs:opacity-50 cs:cursor-not-allowed",
        className,
      )}
    >
      {children}
    </button>
  );
}

ButtonGroup.Item = ButtonGroupItem;
