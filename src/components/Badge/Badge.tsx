import clsx from "clsx";
import { type ReactNode } from "react";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";
import { colorToCSSVars, isPresetColor, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

type BadgeVariant = "solid" | "outline" | "dot";

interface BadgeProps {
  children?: ReactNode;
  variant?: BadgeVariant;
  color?: Color;
  scale?: Scale;
  max?: number;
  className?: string;
}

interface BadgeWrapperProps {
  children: ReactNode;
  className?: string;
}

const dotScaleMap: Record<Scale, string> = {
  xs: "cs:h-1.5 cs:w-1.5",
  sm: "cs:h-2 cs:w-2",
  md: "cs:h-2.5 cs:w-2.5",
  lg: "cs:h-3 cs:w-3",
};

const badgeScaleMap: Record<Scale, string> = {
  xs: "cs:px-1 cs:py-0.5 cs:text-[0.5rem] cs:min-w-3.5",
  sm: "cs:px-1.5 cs:py-0.5 cs:text-[0.6rem] cs:min-w-4",
  md: "cs:px-2 cs:py-0.5 cs:text-xs cs:min-w-5",
  lg: "cs:px-2.5 cs:py-1 cs:text-sm cs:min-w-6",
};

function formatCount(count: ReactNode, max?: number): ReactNode {
  if (typeof count !== "number" || max === undefined) return count;
  return count > max ? `${max}+` : count;
}

export function Badge({
  children,
  variant = "solid",
  color = "blue",
  scale = "md",
  max,
  className,
}: BadgeProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);

  const colorStyle = colorToCSSVars(finalColor);

  // For solid variant, light background colors need dark text
  const solidTextOverride = variant === "solid" && isPresetColor(finalColor) && LIGHT_BG_COLORS.has(finalColor)
    ? "cs:text-gray-900 cs:dark:text-gray-900"
    : "";

  if (variant === "dot") {
    return (
      <span
        style={colorStyle}
        className={clsx(
          "cs:inline-block cs:rounded-full",
          dotScaleMap[scale],
          "cs-badge-dot",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const displayContent = formatCount(children, max);

  return (
    <span
      style={colorStyle}
      className={clsx(
        "cs:inline-flex cs:items-center cs:justify-center cs:rounded-full cs:font-sans cs:font-medium cs:leading-none",
        badgeScaleMap[scale],
        variant === "solid" && "cs-badge-solid",
        variant === "solid" && solidTextOverride,
        variant === "outline" && "cs:border",
        variant === "outline" && "cs-badge-outline",
        className,
      )}
    >
      {displayContent}
    </span>
  );
}

function BadgeWrapper({ children, className }: BadgeWrapperProps) {
  return (
    <div className={clsx("cs:relative cs:inline-flex", className)}>
      {children}
    </div>
  );
}

Badge.Wrapper = BadgeWrapper;
