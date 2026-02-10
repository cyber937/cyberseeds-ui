'use client'

import type { ReactElement, ReactNode } from "react";
import React, { createContext, useContext, useMemo } from "react";
import { backgroundColorMap, focusOutlineColorMap } from "../Constants/colorMap";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { customColorToCSSVars, isCustomColor, isPresetColor, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING, TRANSITION_FAST } from "../Constants/designTokens";
import type { Color, PresetColor, Scale, Variant } from "../DesignSystemUtils";
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
  xs: "cs:px-1.5 cs:py-0.5 cs:text-[0.625rem] cs:max-md:min-h-11",
  sm: "cs:px-2 cs:py-1 cs:text-xs cs:max-md:min-h-11",
  md: "cs:px-3 cs:py-1.5 cs:text-sm cs:max-md:min-h-11",
  lg: "cs:px-4 cs:py-2 cs:text-base",
};

const activeColorMap: Record<PresetColor, string> = {
  red: "cs:hover:bg-red-500 cs:active:bg-red-400 cs:dark:hover:bg-red-400 cs:dark:active:bg-red-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-red-400 cs:disabled:border",
  orange: "cs:hover:bg-orange-500 cs:active:bg-orange-400 cs:dark:hover:bg-orange-400 cs:dark:active:bg-orange-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-orange-400 cs:disabled:border",
  amber: "cs:hover:bg-amber-500 cs:active:bg-amber-400 cs:dark:hover:bg-amber-400 cs:dark:active:bg-amber-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-amber-400 cs:disabled:border",
  yellow: "cs:hover:bg-yellow-500 cs:active:bg-yellow-400 cs:dark:hover:bg-yellow-400 cs:dark:active:bg-yellow-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-yellow-400 cs:disabled:border",
  lime: "cs:hover:bg-lime-500 cs:active:bg-lime-400 cs:dark:hover:bg-lime-400 cs:dark:active:bg-lime-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-lime-400 cs:disabled:border",
  green: "cs:hover:bg-green-500 cs:active:bg-green-400 cs:dark:hover:bg-green-400 cs:dark:active:bg-green-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-green-400 cs:disabled:border",
  emerald: "cs:hover:bg-emerald-500 cs:active:bg-emerald-400 cs:dark:hover:bg-emerald-400 cs:dark:active:bg-emerald-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-emerald-400 cs:disabled:border",
  teal: "cs:hover:bg-teal-500 cs:active:bg-teal-400 cs:dark:hover:bg-teal-400 cs:dark:active:bg-teal-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-teal-400 cs:disabled:border",
  cyan: "cs:hover:bg-cyan-500 cs:active:bg-cyan-400 cs:dark:hover:bg-cyan-400 cs:dark:active:bg-cyan-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-cyan-400 cs:disabled:border",
  sky: "cs:hover:bg-sky-500 cs:active:bg-sky-400 cs:dark:hover:bg-sky-400 cs:dark:active:bg-sky-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-sky-400 cs:disabled:border",
  blue: "cs:hover:bg-blue-500 cs:active:bg-blue-400 cs:dark:hover:bg-blue-400 cs:dark:active:bg-blue-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-blue-400 cs:disabled:border",
  indigo: "cs:hover:bg-indigo-500 cs:active:bg-indigo-400 cs:dark:hover:bg-indigo-400 cs:dark:active:bg-indigo-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-indigo-400 cs:disabled:border",
  violet: "cs:hover:bg-violet-500 cs:active:bg-violet-400 cs:dark:hover:bg-violet-400 cs:dark:active:bg-violet-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-violet-400 cs:disabled:border",
  purple: "cs:hover:bg-purple-500 cs:active:bg-purple-400 cs:dark:hover:bg-purple-400 cs:dark:active:bg-purple-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-purple-400 cs:disabled:border",
  fuchsia: "cs:hover:bg-fuchsia-500 cs:active:bg-fuchsia-400 cs:dark:hover:bg-fuchsia-400 cs:dark:active:bg-fuchsia-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-fuchsia-400 cs:disabled:border",
  pink: "cs:hover:bg-pink-500 cs:active:bg-pink-400 cs:dark:hover:bg-pink-400 cs:dark:active:bg-pink-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-pink-400 cs:disabled:border",
  rose: "cs:hover:bg-rose-500 cs:active:bg-rose-400 cs:dark:hover:bg-rose-400 cs:dark:active:bg-rose-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-rose-400 cs:disabled:border",
  slate: "cs:hover:bg-slate-500 cs:active:bg-slate-400 cs:dark:hover:bg-slate-400 cs:dark:active:bg-slate-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-slate-400 cs:disabled:border",
  gray: "cs:hover:bg-gray-500 cs:active:bg-gray-400 cs:dark:hover:bg-gray-400 cs:dark:active:bg-gray-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-gray-400 cs:disabled:border",
  zinc: "cs:hover:bg-zinc-500 cs:active:bg-zinc-400 cs:dark:hover:bg-zinc-400 cs:dark:active:bg-zinc-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-zinc-400 cs:disabled:border",
  neutral: "cs:hover:bg-neutral-500 cs:active:bg-neutral-400 cs:dark:hover:bg-neutral-400 cs:dark:active:bg-neutral-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-neutral-400 cs:disabled:border",
  stone: "cs:hover:bg-stone-500 cs:active:bg-stone-400 cs:dark:hover:bg-stone-400 cs:dark:active:bg-stone-300 cs:disabled:bg-gray-200 cs:dark:disabled:bg-gray-700 cs:disabled:border-stone-400 cs:disabled:border",
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

  const variantMap = useMemo<Record<Variant, string>>(() => {
    if (isPresetColor(finalUIColor)) {
      const textColor = LIGHT_BG_COLORS.has(finalUIColor) ? "cs:text-gray-900" : "cs:text-white cs:dark:text-gray-200";
      return {
        primary: `${textColor} cs:disabled:text-gray-500 ${backgroundColorMap[finalUIColor]} ${activeColorMap[finalUIColor]}`,
        secondary: `cs:dark:text-gray-400 cs:ring-gray-500/80 cs:ring-1 cs:ring-inset cs:text-black cs:hover:bg-gray-400 cs:active:bg-gray-300 cs:dark:hover:bg-gray-600 cs:dark:active:bg-gray-500`,
      };
    }
    return {
      primary: "cs:text-white cs:dark:text-gray-200 cs:disabled:text-gray-500 cs-custom-btn-primary",
      secondary: "cs:dark:text-gray-400 cs:ring-gray-500/80 cs:ring-1 cs:ring-inset cs:text-black cs:hover:bg-gray-400 cs:active:bg-gray-300 cs:dark:hover:bg-gray-600 cs:dark:active:bg-gray-500",
    };
  }, [finalUIColor]);

  const customStyle = isCustomColor(finalUIColor)
    ? customColorToCSSVars(finalUIColor)
    : undefined;

  const buttonContextValue = useMemo(() => ({ scale }), [scale]);

  return (
    <ButtonContext.Provider value={buttonContextValue}>
      <button
        style={customStyle}
        className={`cs:inline-flex cs:items-center cs:rounded-md cs:font-sans cs:justify-center cs:font-semibold cs:cursor-pointer cs:w-fit cs:max-w-full cs:whitespace-nowrap cs:self-start cs:align-middle cs:gap-1.5 cs:active:scale-[0.97] cs:motion-reduce:active:scale-100 ${TRANSITION_FAST} ${FOCUS_RING} ${scaleMap[scale]} ${variantMap[variant]} ${isPresetColor(finalUIColor) ? focusOutlineColorMap[finalUIColor] : "cs-custom-focus-visible"} ${className}`}
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
