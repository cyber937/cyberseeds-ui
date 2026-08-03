import clsx from "clsx";
import type { ReactNode } from "react";

import type { Color, Scale } from "../DesignSystemUtils";
import { FOCUS_RING_INSET, TRANSITION_FAST } from "../Constants/designTokens";
import { Button } from "../Button/Button";

interface PaginationCommonProps {
  /** Label for the "Previous" control. Defaults to "Previous". */
  previousLabel?: string;
  /** Label for the "Next" control. Defaults to "Next". */
  nextLabel?: string;
  /**
   * Renders the summary between the controls. Pass `false` to hide it when the
   * surrounding page already shows the totals.
   */
  showSummary?: boolean;
  scale?: Scale;
  color?: Color;
  className?: string;
}

/** Offset mode — browse a catalog sequentially with Previous / Next. */
interface PaginationOffsetProps extends PaginationCommonProps {
  /** Zero-based offset of the current page's first row. */
  offset: number;
  /** Page size (rows per page). */
  limit: number;
  /** Total number of rows after filtering. */
  total: number;
  /** Fires with the new offset when the user navigates. */
  onChange: (nextOffset: number) => void;
  /**
   * Replaces the default "Showing X–Y of Z" text — the default is English, so
   * localised apps need this hook.
   */
  renderSummary?: (info: { start: number; end: number; total: number }) => ReactNode;

  page?: never;
  totalPages?: never;
  onPageChange?: never;
}

/** Page mode — jump around a known number of pages. */
interface PaginationPageProps extends PaginationCommonProps {
  /** Current page, 1-based. */
  page: number;
  /** How many pages exist in total. */
  totalPages: number;
  /** Fires with the new 1-based page when the user navigates. */
  onPageChange: (page: number) => void;
  /** Show the jump-to-first / jump-to-last controls. Defaults to `true`. */
  showFirstLast?: boolean;
  /** Label for the "first page" control. Defaults to "First page". */
  firstLabel?: string;
  /** Label for the "last page" control. Defaults to "Last page". */
  lastLabel?: string;
  /**
   * Below `md`, stretch into a full-width segmented bar so every control is a
   * comfortable touch target. Defaults to `true`.
   */
  fullWidthOnMobile?: boolean;
  /** Replaces the default "3 / 12" text. */
  renderSummary?: (info: { page: number; totalPages: number }) => ReactNode;

  offset?: never;
  limit?: never;
  total?: never;
  onChange?: never;
}

type PaginationProps = PaginationOffsetProps | PaginationPageProps;

const containerScaleMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-1.5 cs:gap-2 cs:text-xs",
  sm: "cs:px-3 cs:py-2 cs:gap-2 cs:text-xs",
  md: "cs:px-4 cs:py-3 cs:gap-3 cs:text-sm",
  lg: "cs:px-5 cs:py-4 cs:gap-3 cs:text-base",
};

// Page mode is a flush segmented bar, so it only takes the type size — no
// container padding, no gaps between the controls.
const pageTextScaleMap: Record<Scale, string> = {
  xs: "cs:text-xs",
  sm: "cs:text-xs",
  md: "cs:text-sm",
  lg: "cs:text-base",
};

const DOUBLE_LEFT = "M18.75 19.5 11.25 12l7.5-7.5m-6 15L5.25 12l7.5-7.5";
const SINGLE_LEFT = "M15.75 19.5 8.25 12l7.5-7.5";
const SINGLE_RIGHT = "m8.25 4.5 7.5 7.5-7.5 7.5";
const DOUBLE_RIGHT = "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5";

function Chevron({ d }: { d: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
      className="cs:size-5 cs:md:size-3.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

/**
 * Paginator with two modes.
 *
 * **Offset mode** shows "X–Y of Z" with Previous / Next buttons. It is fully
 * controlled — `offset`, `limit`, and `total` come from the parent (typically
 * URL-driven state) and `onChange` reports the new offset back. No page-number
 * jumps; the catalog is browsed sequentially. This matches admin patterns where
 * filters change the working set frequently and "page 12 of 39,553" is rarely
 * meaningful.
 *
 * **Page mode** shows `«  ‹  3 / 12  ›  »` and is for lists where the page
 * count is meaningful and jumping to the end is useful. Below `md` it becomes a
 * full-width segmented bar so each control is a comfortable touch target.
 *
 * Controls disable themselves at the boundaries.
 *
 * @example
 * ```tsx
 * // Offset mode
 * <Pagination offset={offset} limit={50} total={total} onChange={setOffset} />
 *
 * // Page mode
 * <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
 * ```
 */
export function Pagination(props: PaginationProps) {
  if (props.page !== undefined) {
    return <PagePagination {...props} />;
  }
  return <OffsetPagination {...props} />;
}

function PagePagination({
  page,
  totalPages,
  onPageChange,
  showFirstLast = true,
  firstLabel = "First page",
  previousLabel = "Previous",
  nextLabel = "Next",
  lastLabel = "Last page",
  fullWidthOnMobile = true,
  showSummary = true,
  renderSummary,
  scale = "md",
  className,
}: PaginationPageProps) {
  const atStart = page <= 1;
  const atEnd = page >= totalPages;

  // On a phone the controls become a segmented bar: filled, full width, evenly
  // divided. From md up they collapse to bare chevrons sitting inline.
  const control = clsx(
    "cs:border-0 cs:shadow-none cs:flex cs:items-center cs:justify-center cs:cursor-pointer",
    "cs:bg-gray-200 cs:text-gray-700 cs:dark:bg-gray-700 cs:dark:text-gray-200",
    "cs:disabled:bg-gray-100 cs:disabled:text-gray-400 cs:disabled:cursor-default",
    "cs:dark:disabled:bg-gray-800 cs:dark:disabled:text-gray-600",
    "cs:md:flex-none cs:md:bg-transparent cs:md:dark:bg-transparent cs:md:text-current cs:md:dark:text-current",
    "cs:md:disabled:bg-transparent cs:md:dark:disabled:bg-transparent cs:md:disabled:opacity-30 cs:md:p-0",
    fullWidthOnMobile && "cs:flex-1",
    TRANSITION_FAST,
    FOCUS_RING_INSET,
    "cs-focus-visible",
  );

  const summary = renderSummary
    ? renderSummary({ page, totalPages })
    : `${page} / ${totalPages}`;

  return (
    <nav
      aria-label="Pagination"
      // 余白・間隔は offset 方式の containerScaleMap を使わない。ページ方式は
      // 隙間なく連なった分割バーで、同じ種類のクラス（px-*/gap-*）を重ねると
      // どちらが効くかが CSS の出力順まかせになるため。
      className={clsx(
        "cs:flex cs:font-sans cs:tabular-nums cs:gap-0 cs:md:gap-1",
        pageTextScaleMap[scale],
        fullWidthOnMobile
          ? "cs:w-full cs:h-11 cs:items-stretch cs:md:h-auto cs:md:w-auto cs:md:items-center"
          : "cs:items-center",
        className,
      )}
    >
      {showFirstLast && (
        <button
          type="button"
          aria-label={firstLabel}
          disabled={atStart}
          onClick={() => onPageChange(1)}
          className={clsx(control, "cs:rounded-l-md cs:md:rounded-none")}
        >
          <Chevron d={DOUBLE_LEFT} />
        </button>
      )}
      <button
        type="button"
        aria-label={previousLabel}
        disabled={atStart}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        className={clsx(
          control,
          "cs:border-l cs:border-gray-300 cs:dark:border-gray-600 cs:md:border-none",
          !showFirstLast && "cs:rounded-l-md cs:md:rounded-none cs:border-l-0",
        )}
      >
        <Chevron d={SINGLE_LEFT} />
      </button>

      {showSummary && (
        <span
          className={clsx(
            "cs:flex cs:items-center cs:justify-center cs:whitespace-nowrap",
            "cs:bg-gray-200 cs:text-gray-700 cs:dark:bg-gray-700 cs:dark:text-gray-200",
            "cs:border-l cs:border-gray-300 cs:dark:border-gray-600",
            "cs:md:flex-none cs:md:bg-transparent cs:md:dark:bg-transparent cs:md:text-current cs:md:dark:text-current cs:md:border-none cs:md:px-1",
            fullWidthOnMobile && "cs:flex-1",
          )}
        >
          {summary}
        </span>
      )}

      <button
        type="button"
        aria-label={nextLabel}
        disabled={atEnd}
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        className={clsx(
          control,
          "cs:border-l cs:border-gray-300 cs:dark:border-gray-600 cs:md:border-none",
          !showFirstLast && "cs:rounded-r-md cs:md:rounded-none",
        )}
      >
        <Chevron d={SINGLE_RIGHT} />
      </button>
      {showFirstLast && (
        <button
          type="button"
          aria-label={lastLabel}
          disabled={atEnd}
          onClick={() => onPageChange(totalPages)}
          className={clsx(
            control,
            "cs:border-l cs:border-gray-300 cs:dark:border-gray-600 cs:md:border-none",
            "cs:rounded-r-md cs:md:rounded-none",
          )}
        >
          <Chevron d={DOUBLE_RIGHT} />
        </button>
      )}
    </nav>
  );
}

function OffsetPagination({
  offset,
  limit,
  total,
  onChange,
  previousLabel = "Previous",
  nextLabel = "Next",
  showSummary = true,
  renderSummary,
  scale = "md",
  color,
  className,
}: PaginationOffsetProps) {
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
          {renderSummary ? (
            renderSummary({ start, end, total })
          ) : (
            <>
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
            </>
          )}
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
