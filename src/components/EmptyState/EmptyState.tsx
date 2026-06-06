import clsx from "clsx";
import type { ReactNode } from "react";

import type { Scale } from "../DesignSystemUtils";

interface EmptyStateProps {
  /** Optional headline. Renders as an `<h3>` for screen readers. */
  title?: string;
  /** Longer-form explanation rendered beneath the title. */
  description?: ReactNode;
  /**
   * Decorative icon (SVG, emoji, image element …). Sized by `iconScaleMap` so
   * it stays proportional to the chosen `scale`.
   */
  icon?: ReactNode;
  /**
   * Call-to-action rendered beneath the description — typically a Button or
   * a `<Link>`. Use this for "Import data" / "Create your first item" prompts.
   */
  action?: ReactNode;
  scale?: Scale;
  className?: string;
}

const padScaleMap: Record<Scale, string> = {
  xs: "cs:p-4 cs:gap-1.5",
  sm: "cs:p-6 cs:gap-2",
  md: "cs:p-10 cs:gap-3",
  lg: "cs:p-14 cs:gap-4",
};

const iconScaleMap: Record<Scale, string> = {
  xs: "cs:text-2xl",
  sm: "cs:text-3xl",
  md: "cs:text-4xl",
  lg: "cs:text-5xl",
};

const titleScaleMap: Record<Scale, string> = {
  xs: "cs:text-sm",
  sm: "cs:text-base",
  md: "cs:text-lg",
  lg: "cs:text-xl",
};

const descScaleMap: Record<Scale, string> = {
  xs: "cs:text-xs",
  sm: "cs:text-xs",
  md: "cs:text-sm",
  lg: "cs:text-base",
};

/**
 * Placeholder shown when a list, table, or panel has no rows to display.
 *
 * Differs from `Alert variant="info"` in three ways:
 * - centered, vertical stack of icon + title + description + action
 * - quieter visual weight (dashed border, no colored accents)
 * - first-class action slot so "do something to make this list non-empty"
 *   prompts read naturally
 *
 * Use Alert when the message is transient feedback ("filter cleared",
 * "saved"). Use EmptyState when the message reflects a long-lived state
 * ("no movements recorded yet").
 */
export function EmptyState({
  title,
  description,
  icon,
  action,
  scale = "md",
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={clsx(
        "cs:flex cs:flex-col cs:items-center cs:justify-center cs:text-center",
        "cs:rounded-lg cs:border cs:border-dashed cs:border-gray-300 cs:dark:border-gray-600",
        "cs:bg-white cs:dark:bg-gray-800",
        padScaleMap[scale],
        className,
      )}
    >
      {icon && (
        <div
          aria-hidden="true"
          className={clsx(
            "cs:text-gray-400 cs:dark:text-gray-500",
            iconScaleMap[scale],
          )}
        >
          {icon}
        </div>
      )}
      {title && (
        <h3
          className={clsx(
            "cs:font-sans cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100",
            titleScaleMap[scale],
          )}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className={clsx(
            "cs:font-sans cs:text-gray-500 cs:dark:text-gray-400 cs:max-w-md",
            descScaleMap[scale],
          )}
        >
          {description}
        </p>
      )}
      {action && <div className="cs:mt-2">{action}</div>}
    </div>
  );
}
