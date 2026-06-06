import clsx from "clsx";

import type { Scale } from "../DesignSystemUtils";

type SkeletonVariant = "text" | "circular" | "rectangular";

interface SkeletonProps {
  /** "text" sizes to typical line-height; "circular" rounds fully. */
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  /** Text variant: stack N placeholder lines with subtle width variation. */
  lines?: number;
  /** Text-only — picks the default height based on font size. */
  scale?: Scale;
  className?: string;
}

const textHeightScaleMap: Record<Scale, string> = {
  xs: "cs:h-3",
  sm: "cs:h-3.5",
  md: "cs:h-4",
  lg: "cs:h-5",
};

const baseClasses =
  "cs:bg-gray-200 cs:dark:bg-gray-700 cs:animate-pulse cs:motion-reduce:animate-none";

function asCssLength(value: string | number | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

/**
 * Placeholder skeleton shown while content is loading.
 *
 * Three variants:
 * - `"text"` (default): full-width pulsing bar sized to a line of body text.
 * - `"circular"`: perfect circle, takes `width` × `height` (avatar-shaped).
 * - `"rectangular"`: rectangular block (cards, image stand-ins).
 *
 * The pulsing animation is suppressed under `prefers-reduced-motion: reduce`
 * (via Tailwind's `motion-reduce` variant) so the placeholder still reads as
 * "loading" but doesn't move.
 *
 * @example Single line
 * ```tsx
 * <Skeleton width="60%" />
 * ```
 *
 * @example Avatar
 * ```tsx
 * <Skeleton variant="circular" width={40} height={40} />
 * ```
 *
 * @example Multi-line paragraph
 * ```tsx
 * <Skeleton lines={3} />
 * ```
 */
export function Skeleton({
  variant = "text",
  width,
  height,
  lines,
  scale = "md",
  className,
}: SkeletonProps) {
  if (variant === "text" && lines && lines > 1) {
    return (
      <div
        role="status"
        aria-label="Loading"
        aria-live="polite"
        aria-busy="true"
        className={clsx("cs:flex cs:flex-col cs:gap-2", className)}
      >
        {Array.from({ length: lines }).map((_, i) => {
          // Last line a touch shorter so it reads as a paragraph end.
          const isLast = i === lines - 1;
          return (
            <div
              key={i}
              className={clsx(
                baseClasses,
                "cs:rounded-md",
                textHeightScaleMap[scale],
              )}
              style={{
                width: isLast ? "60%" : asCssLength(width) ?? "100%",
              }}
            />
          );
        })}
      </div>
    );
  }

  const isCircle = variant === "circular";
  const radius = isCircle ? "cs:rounded-full" : "cs:rounded-md";
  const sizeStyle: React.CSSProperties = {
    width: asCssLength(width) ?? (variant === "text" ? "100%" : undefined),
    height:
      asCssLength(height) ??
      (variant === "text"
        ? undefined
        : isCircle
          ? asCssLength(width) ?? "40px"
          : undefined),
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      aria-live="polite"
      aria-busy="true"
      className={clsx(
        baseClasses,
        radius,
        variant === "text" && textHeightScaleMap[scale],
        className,
      )}
      style={sizeStyle}
    />
  );
}
