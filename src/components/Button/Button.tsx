'use client'

import type { ReactElement, ReactNode } from "react";
import React, { createContext, useContext, useMemo } from "react";
import { solidTextClass } from "../Constants/colorContrast";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING, TRANSITION_FAST } from "../Constants/designTokens";
import type { Color, Scale, Variant } from "../DesignSystemUtils";
import { Slot } from "../Slot/Slot";
import { useUIColor } from "../UIColorProvider/useUIColor";

type ButtonContextType = {
  scale: Scale;
};

const ButtonContext = createContext<ButtonContextType | null>(null);

/**
 * Every Button prop except the `iconOnly` / `aria-label` pairing.
 *
 * Exported for tooling that can't work with the discriminated union below —
 * Storybook's `Meta<typeof Button>` resolves a union component to `never`.
 * Application code should use the component's own props, not this.
 */
export interface ButtonBaseProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  scale?: Scale;
  variant?: Variant;
  color?: Color;
  children: ReactNode;
  /**
   * When true, merges Button's styling and event handlers onto a single
   * child element (typically `<a>` or a router `<Link>`) instead of
   * rendering its own `<button>`. Mirrors the `Tabs.Trigger asChild`
   * pattern. The child receives Button's class names, focus-ring, color
   * styles, and any handlers / refs from Button's props.
   */
  asChild?: boolean;
  /**
   * Icon placed before the label. Sized from `scale` automatically — pass the
   * bare icon element, not a pre-sized one.
   *
   * Ignored with `asChild`, which forwards a single child element as-is.
   */
  startIcon?: ReactElement<{ className?: string }>;
  /** Icon placed after the label. Sized from `scale` automatically. */
  endIcon?: ReactElement<{ className?: string }>;
}

/**
 * A button showing nothing but an icon has no text for a screen reader to
 * announce, so `aria-label` becomes mandatory rather than optional. Splitting
 * the props into a union is what lets TypeScript enforce that — the
 * `iconOnly: true` arm requires the label, the default arm leaves it optional.
 */
type ButtonProps =
  | (ButtonBaseProps & {
      /**
       * Square padding for a button whose content is a single icon. Requires
       * `aria-label`: with no visible text there is nothing else to announce.
       */
      iconOnly: true;
      "aria-label": string;
    })
  | (ButtonBaseProps & { iconOnly?: false });

const iconOnlyScaleMap: Record<Scale, string> = {
  xs: "cs:p-1 cs:h-5 cs:w-5 cs:max-md:min-h-11 cs:max-md:min-w-11",
  sm: "cs:p-1 cs:h-6 cs:w-6 cs:max-md:min-h-11 cs:max-md:min-w-11",
  md: "cs:p-1.5 cs:h-9 cs:w-9 cs:max-md:min-h-11 cs:max-md:min-w-11",
  lg: "cs:p-2 cs:h-11 cs:w-11",
};

const scaleMap: Record<Scale, string> = {
  xs: "cs:px-1.5 cs:py-0.5 cs:text-[0.625rem] cs:h-5 cs:max-md:min-h-11",
  sm: "cs:px-2 cs:py-1 cs:text-xs cs:h-6 cs:max-md:min-h-11",
  md: "cs:px-3 cs:py-1.5 cs:text-sm/6 cs:h-9 cs:max-md:min-h-11",
  lg: "cs:px-4 cs:py-2 cs:text-base cs:h-11",
};

export function Button({
  scale = "md",
  variant = "primary",
  color,
  children,
  className = "",
  asChild = false,
  startIcon,
  endIcon,
  iconOnly = false,
  ...props
}: ButtonProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = resolveColor(color ?? contextUIColor ?? "blue");

  // 明るい背景には濃い文字。判断は solidTextClass に一本化している
  const textColor = solidTextClass(finalUIColor);

  const variantClasses = useMemo<Record<Variant, string>>(() => ({
    primary: `${textColor} cs:disabled:text-gray-500 cs-btn-primary`,
    secondary: "cs:dark:text-gray-400 cs:ring-gray-500/80 cs:ring-1 cs:ring-inset cs:text-black cs:hover:bg-gray-400 cs:active:bg-gray-300 cs:dark:hover:bg-gray-600 cs:dark:active:bg-gray-500",
  }), [textColor]);

  const colorStyle = variant === "primary"
    ? colorToCSSVars(finalUIColor)
    : undefined;

  const buttonContextValue = useMemo(() => ({ scale }), [scale]);

  // iconOnly swaps the horizontal padding for a square box; everything else
  // (colour, focus ring, motion) is shared.
  const sizeClasses = iconOnly ? iconOnlyScaleMap[scale] : scaleMap[scale];

  const mergedClassName = `cs:border-0 cs:shadow-none cs:inline-flex cs:items-center cs:rounded-md cs:font-sans cs:justify-center cs:font-semibold cs:cursor-pointer cs:w-fit cs:max-w-full cs:whitespace-nowrap cs:self-start cs:align-middle cs:gap-1.5 cs:active:scale-[0.97] cs:motion-reduce:active:scale-100 ${TRANSITION_FAST} ${FOCUS_RING} ${sizeClasses} ${variantClasses[variant]} cs-focus-visible ${className}`;

  // Sizing the icons here (rather than asking the caller for `size-4`) is what
  // keeps them in step when `scale` changes.
  const content = (
    <>
      {startIcon && <Button.Icon>{startIcon}</Button.Icon>}
      {children}
      {endIcon && <Button.Icon>{endIcon}</Button.Icon>}
    </>
  );

  return (
    <ButtonContext.Provider value={buttonContextValue}>
      {asChild ? (
        <Slot
          style={colorStyle}
          className={mergedClassName}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children as ReactElement}
        </Slot>
      ) : (
        <button
          style={colorStyle}
          className={mergedClassName}
          {...props}
        >
          {content}
        </button>
      )}
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
