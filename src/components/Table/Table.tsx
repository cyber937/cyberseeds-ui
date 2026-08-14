import clsx from "clsx";
import {
  createContext,
  forwardRef,
  useContext,
  type CSSProperties,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";

import { FOCUS_RING, TRANSITION_FAST, Z_INDEX } from "../Constants/designTokens";
import type { Scale } from "../DesignSystemUtils";
import {
  useViewportFillHeight,
  type ViewportFillHeightOptions,
} from "../../hooks/useViewportFillHeight";

type Align = "left" | "right" | "center";

/** Column width. A number is read as pixels. */
type CellWidth = number | string;

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  scale?: Scale;
  /** Alternate-row backgrounds. */
  striped?: boolean;
  /** Outer wrapper gets a border and rounded corners when true (default). */
  bordered?: boolean;
  /**
   * Stick the header to the top while the body scrolls. The table's wrapper
   * becomes a vertical scroll container that fills its parent's height — give
   * the parent a bounded height (e.g. a `flex-1 min-h-0` flex child), or hand
   * that job to `autoHeight` instead.
   */
  stickyHeader?: boolean;
  /**
   * Cap the table's height at the space left below its own top edge, so the
   * body scrolls without any ancestor needing a bounded height. Implies
   * `stickyHeader`.
   *
   * Use this instead of threading `h-full` / `flex-1 min-h-0` up the tree — it
   * also works inside a detail page, a tab panel, or a screen with two tables.
   * Pass an object to leave room below (`bottomGap`) or to set a floor
   * (`minHeight`, default 160px).
   */
  autoHeight?: boolean | ViewportFillHeightOptions;
  /**
   * Column sizing algorithm. `"fixed"` honours the widths you set and keeps
   * columns from shifting as data changes; `"auto"` (the browser default) sizes
   * columns to their content.
   */
  layout?: "auto" | "fixed";
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Marks the row as interactive — adds cursor / hover styling. The actual
   * click handler comes from `onClick` (standard prop).
   */
  interactive?: boolean;
  /** Highlight the row as selected and set `aria-selected`. */
  selected?: boolean;
  /**
   * Drop the rule above this row, so it reads as a continuation of the row
   * before it. Use for the expanded detail of a parent row, or for a group's
   * second and subsequent lines.
   */
  noDivider?: boolean;
}

type SortDirection = "asc" | "desc" | false;

/** Width / wrapping controls shared by both cell kinds. */
interface CellSizingProps {
  /** Column width. A number is read as pixels. */
  width?: CellWidth;
  /** Upper bound on the column width. A number is read as pixels. */
  maxWidth?: CellWidth;
  /** Keep the content on one line instead of wrapping. */
  nowrap?: boolean;
  /** Clip overflow with an ellipsis. Needs `width` or `maxWidth` to bite. */
  truncate?: boolean;
}

interface TableHeaderCellProps
  extends Omit<ThHTMLAttributes<HTMLTableCellElement>, "width">,
    CellSizingProps {
  align?: Align;
  /** Render the header as a sort toggle (a button + direction arrows). */
  sortable?: boolean;
  /** Current sort direction for this column (`false` = unsorted). */
  sortDirection?: SortDirection;
  /** Called when a sortable header is activated. */
  onSort?: () => void;
}

interface TableCellProps
  extends Omit<TdHTMLAttributes<HTMLTableCellElement>, "width">,
    CellSizingProps {
  align?: Align;
  /** Apply `tabular-nums` so digits line up at the right edge. */
  numeric?: boolean;
  /** Render in a monospaced face — for IDs, codes, and hashes. */
  mono?: boolean;
}

/** Numbers mean pixels; strings pass through so `%` and `rem` still work. */
const toLength = (value: CellWidth | undefined) =>
  typeof value === "number" ? `${value}px` : value;

function cellSizingStyle(
  { width, maxWidth }: CellSizingProps,
  style: CSSProperties | undefined,
): CSSProperties | undefined {
  if (width === undefined && maxWidth === undefined) return style;
  return {
    ...style,
    ...(width !== undefined && { width: toLength(width) }),
    ...(maxWidth !== undefined && { maxWidth: toLength(maxWidth) }),
  };
}

const cellSizingClass = ({ nowrap, truncate }: CellSizingProps) =>
  clsx(nowrap && "cs:whitespace-nowrap", truncate && "cs:truncate");

const TableScaleContext = createContext<Scale>("md");
const TableStickyContext = createContext<boolean>(false);

const cellScaleMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-1.5 cs:text-xs",
  sm: "cs:px-3 cs:py-2 cs:text-xs",
  md: "cs:px-4 cs:py-2 cs:text-sm",
  lg: "cs:px-5 cs:py-3 cs:text-base",
};

const headCellScaleMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-2 cs:text-[0.625rem]",
  sm: "cs:px-3 cs:py-2.5 cs:text-xs",
  md: "cs:px-4 cs:py-3 cs:text-xs",
  lg: "cs:px-5 cs:py-3 cs:text-sm",
};

const alignClass: Record<Align, string> = {
  left: "cs:text-left",
  right: "cs:text-right",
  center: "cs:text-center",
};

/**
 * Compound table primitive.
 *
 * ```tsx
 * <Table striped scale="md">
 *   <Table.Head>
 *     <Table.Row>
 *       <Table.HeaderCell>SKU</Table.HeaderCell>
 *       <Table.HeaderCell align="right">On hand</Table.HeaderCell>
 *     </Table.Row>
 *   </Table.Head>
 *   <Table.Body>
 *     {rows.map(r => (
 *       <Table.Row key={r.sku} interactive onClick={() => open(r)}>
 *         <Table.Cell>{r.sku}</Table.Cell>
 *         <Table.Cell align="right" numeric>{r.onHand}</Table.Cell>
 *       </Table.Row>
 *     ))}
 *   </Table.Body>
 * </Table>
 * ```
 *
 * Works alongside TanStack Table's headless mode — feed `flexRender(...)` into
 * `<Table.Cell>` / `<Table.HeaderCell>` and let TanStack drive data while the
 * compound handles styling and accessibility.
 *
 * `scale` propagates through context so nested cells pick up the right
 * padding without prop drilling.
 */
const TableRoot = forwardRef<HTMLDivElement, TableProps>(function Table(
  {
    scale = "md",
    striped,
    bordered = true,
    stickyHeader = false,
    autoHeight = false,
    layout,
    className,
    children,
    ...props
  },
  ref,
) {
  const autoHeightOn = autoHeight !== false;
  const { ref: measuredRef, maxHeight } = useViewportFillHeight<HTMLDivElement>(
    autoHeightOn,
    typeof autoHeight === "object" ? autoHeight : undefined,
  );
  // autoHeight bounds the wrapper itself, which is exactly the condition
  // stickyHeader needs — so turning it on implies a sticky header.
  const sticky = stickyHeader || autoHeightOn;

  const setRefs = (node: HTMLDivElement | null) => {
    measuredRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <TableScaleContext.Provider value={scale}>
      <TableStickyContext.Provider value={sticky}>
        <div
          ref={setRefs}
          style={maxHeight === undefined ? undefined : { maxHeight }}
          className={clsx(
            "cs:bg-white cs:dark:bg-gray-800",
            sticky ? "cs:overflow-auto" : "cs:overflow-x-auto",
            // Fill the parent only when the parent is the one doing the
            // bounding. With autoHeight the wrapper sizes itself, and h-full
            // would stretch it back to the (unbounded) parent.
            stickyHeader && !autoHeightOn && "cs:h-full",
            bordered &&
              "cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700 cs:shadow-sm",
          )}
        >
          <table
            {...props}
            data-striped={striped ? "true" : undefined}
            className={clsx(
              "cs:min-w-full cs:divide-y cs:divide-gray-200 cs:dark:divide-gray-700 cs:font-sans",
              layout === "fixed" && "cs:table-fixed",
              layout === "auto" && "cs:table-auto",
              className,
            )}
          >
            {children}
          </table>
        </div>
      </TableStickyContext.Provider>
    </TableScaleContext.Provider>
  );
});

function TableHead({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  const stickyHeader = useContext(TableStickyContext);
  return (
    <thead
      {...props}
      className={clsx(
        "cs:bg-gray-50 cs:dark:bg-gray-900",
        "cs:text-gray-500 cs:dark:text-gray-300",
        "cs:uppercase cs:tracking-wide",
        stickyHeader && ["cs:sticky cs:top-0", Z_INDEX.STICKY],
        className,
      )}
    >
      {children}
    </thead>
  );
}

function TableBody({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody
      {...props}
      className={clsx(
        "cs:divide-y cs:divide-gray-100 cs:dark:divide-gray-800",
        // Striping is opt-in via the parent <table data-striped>.
        "cs:[table[data-striped='true']_&>tr:nth-child(even)]:bg-gray-50",
        "cs:dark:[table[data-striped='true']_&>tr:nth-child(even)]:bg-gray-900/40",
        className,
      )}
    >
      {children}
    </tbody>
  );
}

function TableRow({
  interactive,
  selected,
  noDivider,
  className,
  children,
  ...props
}: TableRowProps) {
  return (
    <tr
      {...props}
      data-interactive={interactive ? "true" : undefined}
      aria-selected={selected || undefined}
      className={clsx(
        "cs:transition-colors",
        interactive
          ? "cs:cursor-pointer cs:hover:bg-gray-50 cs:dark:hover:bg-gray-700/40"
          : "cs:hover:bg-gray-50 cs:dark:hover:bg-gray-700/20",
        selected && "cs:bg-gray-100 cs:dark:bg-gray-700/50",
        // The rule comes from `divide-y` on the section, which lands on the row
        // in the collapsed border model and on the cells in the separated one.
        // Clear both so the prop behaves the same either way.
        noDivider && "cs:border-t-0 cs:[&>td]:border-t-0 cs:[&>th]:border-t-0",
        className,
      )}
    >
      {children}
    </tr>
  );
}

const ariaSortMap: Record<"asc" | "desc" | "none", "ascending" | "descending" | "none"> = {
  asc: "ascending",
  desc: "descending",
  none: "none",
};

/**
 * Sort indicator.
 *
 * Unsorted columns show a muted up/down chevron pair ("this column can be
 * sorted"); the sorted column shows the matching single chevron. The single
 * chevron is drawn at exactly the size of one half of the pair and with the
 * same stroke width, so switching states changes only the colour — not the
 * visual weight of the header.
 *
 * Direction is still conveyed by shape (up vs down), so it survives
 * low-contrast displays and greyscale printing.
 *
 * Kept `aria-hidden` — the direction is already announced through the
 * `aria-sort` attribute on the `<th>`.
 */
function SortArrows({ direction }: { direction: SortDirection }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className={clsx("cs:size-4 cs:shrink-0", !direction && "cs:opacity-50")}
    >
      {direction === "asc" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 13.875 12 10.125l3.75 3.75" />
      ) : direction === "desc" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.125 12 13.875l3.75-3.75" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
      )}
    </svg>
  );
}

function TableHeaderCell({
  align = "left",
  sortable,
  sortDirection = false,
  onSort,
  width,
  maxWidth,
  nowrap,
  truncate,
  className,
  style,
  children,
  ...props
}: TableHeaderCellProps) {
  const scale = useContext(TableScaleContext);
  const sizing = { width, maxWidth, nowrap, truncate };
  return (
    <th
      scope="col"
      {...props}
      style={cellSizingStyle(sizing, style)}
      aria-sort={sortable ? ariaSortMap[sortDirection || "none"] : undefined}
      className={clsx(
        "cs:font-semibold",
        headCellScaleMap[scale],
        alignClass[align],
        cellSizingClass(sizing),
        className,
      )}
    >
      {sortable ? (
        <button
          type="button"
          onClick={onSort}
          className={clsx(
            "cs:inline-flex cs:items-center cs:gap-1.5 cs:cursor-pointer cs:select-none",
            "cs:uppercase cs:tracking-wide cs:rounded-sm",
            TRANSITION_FAST,
            FOCUS_RING,
            "cs-focus-visible",
            // The sorted column reads as the active one: stronger weight and
            // the UI accent colour, not just a darker arrow.
            sortDirection
              ? "cs:font-bold cs-sort-active"
              : "cs:font-semibold cs:hover:text-gray-900 cs:dark:hover:text-gray-100",
            align === "right" && "cs:flex-row-reverse",
          )}
        >
          {children}
          <SortArrows direction={sortDirection} />
        </button>
      ) : (
        children
      )}
    </th>
  );
}

function TableCell({
  align = "left",
  numeric,
  mono,
  width,
  maxWidth,
  nowrap,
  truncate,
  className,
  style,
  children,
  ...props
}: TableCellProps) {
  const scale = useContext(TableScaleContext);
  const sizing = { width, maxWidth, nowrap, truncate };
  return (
    <td
      {...props}
      style={cellSizingStyle(sizing, style)}
      className={clsx(
        "cs:text-gray-700 cs:dark:text-gray-200 cs:align-middle",
        cellScaleMap[scale],
        alignClass[align],
        numeric && "cs:tabular-nums",
        mono && "cs:font-mono",
        cellSizingClass(sizing),
        className,
      )}
    >
      {children}
    </td>
  );
}

export const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  HeaderCell: TableHeaderCell,
  Cell: TableCell,
});

export type { Align as TableAlign };
