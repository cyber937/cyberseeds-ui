"use client";

import clsx from "clsx";
import { memo, type ReactNode } from "react";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface NavMenuProps {
  children: ReactNode;
  /** Sets the accent used by the active item. Defaults to UIColor context or blue. */
  color?: Color;
  scale?: Scale;
  /** Stretches the menu vertically. Useful inside a sidebar shell. */
  fullHeight?: boolean;
  /** ARIA label for the underlying <nav> landmark. Default "Main navigation". */
  ariaLabel?: string;
  className?: string;
}

interface NavMenuSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface NavMenuItemProps {
  /** href to render an <a>; omit for a button-like item that just calls onClick. */
  href?: string;
  /** Marks this item as the active route. Renders aria-current="page". */
  active?: boolean;
  /** Optional leading icon (svg, emoji, badge, etc.). */
  icon?: ReactNode;
  /** Optional trailing element (e.g. <Badge>3</Badge>, kbd hint). */
  trailing?: ReactNode;
  /** Click handler. Useful for client-side router navigation. */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const scaleItemMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-1 cs:text-xs cs:gap-x-1.5",
  sm: "cs:px-2.5 cs:py-1.5 cs:text-sm cs:gap-x-2",
  md: "cs:px-3 cs:py-2 cs:text-sm cs:gap-x-2.5",
  lg: "cs:px-4 cs:py-2.5 cs:text-base cs:gap-x-3",
};

const iconScaleMap: Record<Scale, string> = {
  xs: "cs:size-3.5",
  sm: "cs:size-4",
  md: "cs:size-4.5",
  lg: "cs:size-5",
};

function NavMenuRoot({
  children,
  color = "blue",
  scale = "md",
  fullHeight = false,
  ariaLabel = "Main navigation",
  className,
}: NavMenuProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);
  const colorStyle = colorToCSSVars(finalColor);

  return (
    <nav
      aria-label={ariaLabel}
      style={colorStyle}
      data-nav-scale={scale}
      className={clsx(
        "cs:font-sans cs:flex cs:flex-col cs:gap-1",
        fullHeight && "cs:h-full",
        className,
      )}
    >
      {children}
    </nav>
  );
}

const NavMenuSection = memo(function NavMenuSection({
  title,
  children,
  className,
}: NavMenuSectionProps) {
  return (
    <div className={clsx("cs:flex cs:flex-col cs:gap-0.5", className)}>
      <div className="cs:px-3 cs:pt-3 cs:pb-1 cs:text-[0.625rem] cs:font-semibold cs:uppercase cs:tracking-wide cs:text-gray-500 cs:dark:text-gray-400">
        {title}
      </div>
      <div className="cs:flex cs:flex-col cs:gap-0.5">
        {children}
      </div>
    </div>
  );
});

const NavMenuItem = memo(function NavMenuItem({
  href,
  active = false,
  icon,
  trailing,
  onClick,
  children,
  disabled = false,
  className,
}: NavMenuItemProps) {
  // Pick padding/text classes from the parent <nav>'s data-attribute so consumers
  // don't have to thread `scale` through every item.
  // The default below is overridden by CSS-selector-free runtime — see NavMenu.tsx.
  const scaleClasses = scaleItemMap.md;
  const iconClasses = iconScaleMap.md;

  const sharedClassName = clsx(
    "cs:flex cs:items-center cs:rounded-md cs:transition-colors cs:duration-150 cs:motion-reduce:transition-none",
    "cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs-focus-visible",
    scaleClasses,
    active
      ? "cs:bg-[color-mix(in_oklch,_var(--cs-ui-base)_15%,_transparent)] cs:text-[var(--cs-ui-base)] cs:font-medium"
      : "cs:text-gray-700 cs:dark:text-gray-300 cs:hover:bg-gray-100 cs:dark:hover:bg-gray-800",
    disabled && "cs:opacity-50 cs:pointer-events-none",
    className,
  );

  const content = (
    <>
      {icon && (
        <span className={clsx("cs:flex cs:items-center cs:justify-center cs:shrink-0", iconClasses)} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="cs:flex-1 cs:min-w-0 cs:truncate cs:text-left">{children}</span>
      {trailing && <span className="cs:shrink-0">{trailing}</span>}
    </>
  );

  return href ? (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={sharedClassName}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "cs:border-0 cs:shadow-none cs:bg-transparent cs:w-full cs:cursor-pointer",
        sharedClassName,
      )}
    >
      {content}
    </button>
  );
});

export const NavMenu = Object.assign(NavMenuRoot, {
  Section: NavMenuSection,
  Item: NavMenuItem,
});
