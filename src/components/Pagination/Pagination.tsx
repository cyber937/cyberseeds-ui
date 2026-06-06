import clsx from "clsx";

import type { Color, Scale } from "../DesignSystemUtils";
import { Button } from "../Button/Button";

interface PaginationProps {
  /** Zero-based offset of the current page's first row. */
  offset: number;
  /** Page size (rows per page). */
  limit: number;
  /** Total number of rows after filtering. */
  total: number;
  /** Fires with the new offset when the user navigates. */
  onChange: (nextOffset: number) => void;
  /** Optional label for the "Previous" button. Defaults to "Previous". */
  previousLabel?: string;
  /** Optional label for the "Next" button. Defaults to "Next". */
  nextLabel?: string;
  /**
   * Renders the count summary ("X-Y of Z"). Pass `false` to hide it when the
   * surrounding page already shows the totals.
   */
  showSummary?: boolean;
  scale?: Scale;
  color?: Color;
  className?: string;
}

const containerScaleMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-1.5 cs:gap-2 cs:text-xs",
  sm: "cs:px-3 cs:py-2 cs:gap-2 cs:text-xs",
  md: "cs:px-4 cs:py-3 cs:gap-3 cs:text-sm",
  lg: "cs:px-5 cs:py-4 cs:gap-3 cs:text-base",
};

/**
 * Compact paginator showing "X-Y of Z" with Previous / Next buttons.
 *
 * The component is fully controlled — `offset`, `limit`, and `total` come
 * from the parent (typically URL-driven state) and `onChange` reports the
 * new offset back. No page-number jumps; the catalog is browsed
 * sequentially. This matches admin patterns where filters change the
 * working set frequently and "page 12 of 39,553" is rarely meaningful.
 *
 * Buttons disable themselves at the boundaries:
 * - Previous when `offset <= 0`
 * - Next when `offset + limit >= total`
 *
 * @example
 * ```tsx
 * <Pagination
 *   offset={offset}
 *   limit={50}
 *   total={total}
 *   onChange={(next) => updateUrl({ offset: next })}
 * />
 * ```
 */
export function Pagination({
  offset,
  limit,
  total,
  onChange,
  previousLabel = "Previous",
  nextLabel = "Next",
  showSummary = true,
  scale = "md",
  color,
  className,
}: PaginationProps) {
  const start = total === 0 ? 0 : offset + 1;
  const end = Math.min(offset + limit, total);
  const atStart = offset <= 0;
  const atEnd = offset + limit >= total;

  return (
    <nav
      aria-label="Pagination"
      className={clsx(
        "cs:flex cs:items-center cs:justify-between",
        "cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700",
        "cs:bg-white cs:dark:bg-gray-800",
        "cs:text-gray-600 cs:dark:text-gray-300 cs:font-sans",
        containerScaleMap[scale],
        className,
      )}
    >
      {showSummary ? (
        <span>
          Showing{" "}
          <span className="cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100 cs:tabular-nums">
            {start.toLocaleString()}
          </span>
          {"–"}
          <span className="cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100 cs:tabular-nums">
            {end.toLocaleString()}
          </span>{" "}
          of{" "}
          <span className="cs:font-semibold cs:text-gray-900 cs:dark:text-gray-100 cs:tabular-nums">
            {total.toLocaleString()}
          </span>
        </span>
      ) : (
        <span aria-hidden />
      )}
      <div className="cs:flex cs:items-center cs:gap-2">
        <Button
          variant="secondary"
          scale={scale === "lg" ? "md" : "sm"}
          color={color}
          disabled={atStart}
          onClick={() => onChange(Math.max(0, offset - limit))}
        >
          {previousLabel}
        </Button>
        <Button
          variant="secondary"
          scale={scale === "lg" ? "md" : "sm"}
          color={color}
          disabled={atEnd}
          onClick={() => onChange(offset + limit)}
        >
          {nextLabel}
        </Button>
      </div>
    </nav>
  );
}
