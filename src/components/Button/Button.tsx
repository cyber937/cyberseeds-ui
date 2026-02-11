'use client'

import type { ReactElement, ReactNode } from "react";
import React, { createContext, useContext, useMemo } from "react";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { colorToCSSVars, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING, TRANSITION_FAST } from "../Constants/designTokens";
import type { Color, Scale, Variant } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

type ButtonContextType = {
  scale: Scale;
};

const ButtonContext = createContext<ButtonContextType | null>(null);

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  scale?: Scale;
  variant?: Variant;
  color?: Color;
  children: ReactNode;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:px-1.5 cs:py-0.5 cs:text-[0.625rem] cs:h-5 cs:max-md:min-h-11",
  sm: "cs:px-2 cs:py-1 cs:text-xs cs:h-6 cs:max-md:min-h-11",
  md: "cs:px-3 cs:py-1.5 cs:text-sm/6 cs:h-9 cs:max-md:min-h-11",
  lg: "cs:px-4 cs:py-2 cs:text-base cs:h-11",
};

export function Button({
  scale = "md",
  variant = "primary",
  color = "blue",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = resolveColor(contextUIColor ?? color);

  // Text color: light backgrounds (amber/yellow/lime) need dark text for contrast
  const textColor = isPresetColor(finalUIColor) && LIGHT_BG_COLORS.has(finalUIColor)
    ? "cs:text-gray-900"
    : "cs:text-white cs:dark:text-gray-200";

  const variantClasses = useMemo<Record<Variant, string>>(() => ({
    primary: `${textColor} cs:disabled:text-gray-500 cs-btn-primary`,
    secondary: "cs:dark:text-gray-400 cs:ring-gray-500/80 cs:ring-1 cs:ring-inset cs:text-black cs:hover:bg-gray-400 cs:active:bg-gray-300 cs:dark:hover:bg-gray-600 cs:dark:active:bg-gray-500",
  }), [textColor]);

  const colorStyle = variant === "primary"
    ? colorToCSSVars(finalUIColor)
    : undefined;

  const buttonContextValue = useMemo(() => ({ scale }), [scale]);

  return (
    <ButtonContext.Provider value={buttonContextValue}>
      <button
        style={colorStyle}
        className={`cs:border-0 cs:shadow-none cs:inline-flex cs:items-center cs:rounded-md cs:font-sans cs:justify-center cs:font-semibold cs:cursor-pointer cs:w-fit cs:max-w-full cs:whitespace-nowrap cs:self-start cs:align-middle cs:gap-1.5 cs:active:scale-[0.97] cs:motion-reduce:active:scale-100 ${TRANSITION_FAST} ${FOCUS_RING} ${scaleMap[scale]} ${variantClasses[variant]} cs-focus-visible ${className}`}
        {...props}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
}

const iconScaleMap: Record<Scale, string> = {
  xs: "cs:size-3",
  sm: "cs:size-4",
  md: "cs:size-5",
  lg: "cs:size-6",
};

Button.Icon = function ButtonIcon({
  children,
}: {
  children: ReactElement<{ className?: string }>;
}) {

  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("Button.Icon must be used within a <Button>");
  }

  return React.cloneElement(children, {
    className: `${children.props.className ?? ""} ${iconScaleMap[context.scale]
      }`.trim(),
  });
};
