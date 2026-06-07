import clsx from "clsx";
import {
  createContext,
  useContext,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";

import type { Scale } from "../DesignSystemUtils";

type Align = "left" | "right" | "center";

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  scale?: Scale;
  /** Alternate-row backgrounds. */
  striped?: boolean;
  /** Outer wrapper gets a border and rounded corners when true (default). */
  bordered?: boolean;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Marks the row as interactive — adds cursor / hover styling. The actual
   * click handler comes from `onClick` (standard prop).
   */
  interactive?: boolean;
  /** Highlight the row as selected and set `aria-selected`. */
  selected?: boolean;
}

type SortDirection = "asc" | "desc" | false;

interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  align?: Align;
  /** Render the header as a sort toggle (a button + direction arrows). */
  sortable?: boolean;
  /** Current sort direction for this column (`false` = unsorted). */
  sortDirection?: SortDirection;
  /** Called when a sortable header is activated. */
  onSort?: () => void;
}

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: Align;
  /** Apply `tabular-nums` so digits line up at the right edge. */
  numeric?: boolean;
}

const TableScaleContext = createContext<Scale>("md");

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
export function Table({
  scale = "md",
  striped,
  bordered = true,
  className,
  children,
  ...props
}: TableProps) {
  return (
    <TableScaleContext.Provider value={scale}>
      <div
        className={clsx(
          "cs:overflow-x-auto cs:bg-white cs:dark:bg-gray-800",
          bordered &&
            "cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700 cs:shadow-sm",
        )}
      >
        <table
          {...props}
          data-striped={striped ? "true" : undefined}
          className={clsx(
            "cs:min-w-full cs:divide-y cs:divide-gray-200 cs:dark:divide-gray-700 cs:font-sans",
            className,
          )}
        >
          {children}
        </table>
      </div>
    </TableScaleContext.Provider>
  );
}

function TableHead({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      {...props}
      className={clsx(
        "cs:bg-gray-50 cs:dark:bg-gray-900",
        "cs:text-gray-500 cs:dark:text-gray-300",
        "cs:uppercase cs:tracking-wide",
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

function SortArrows({ direction }: { direction: SortDirection }) {
  return (
    <span className="cs:inline-flex cs:flex-col cs:leading-[0.5]" aria-hidden="true">
      <span className={clsx("cs:text-[0.6em]", direction === "asc" ? "cs:opacity-100" : "cs:opacity-30")}>
        ▲
      </span>
      <span className={clsx("cs:text-[0.6em]", direction === "desc" ? "cs:opacity-100" : "cs:opacity-30")}>
        ▼
      </span>
    </span>
  );
}

function TableHeaderCell({
  align = "left",
  sortable,
  sortDirection = false,
  onSort,
  className,
  children,
  ...props
}: TableHeaderCellProps) {
  const scale = useContext(TableScaleContext);
  return (
    <th
      scope="col"
      {...props}
      aria-sort={sortable ? ariaSortMap[sortDirection || "none"] : undefined}
      className={clsx(
        "cs:font-semibold",
        headCellScaleMap[scale],
        alignClass[align],
        className,
      )}
    >
      {sortable ? (
        <button
          type="button"
          onClick={onSort}
          className={clsx(
            "cs:inline-flex cs:items-center cs:gap-1.5 cs:cursor-pointer cs:select-none",
            "cs:font-semibold cs:uppercase cs:tracking-wide",
            "cs:hover:text-gray-900 cs:dark:hover:text-gray-100",
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
  className,
  children,
  ...props
}: TableCellProps) {
  const scale = useContext(TableScaleContext);
  return (
    <td
      {...props}
      className={clsx(
        "cs:text-gray-700 cs:dark:text-gray-200 cs:align-middle",
        cellScaleMap[scale],
        alignClass[align],
        numeric && "cs:tabular-nums",
        className,
      )}
    >
      {children}
    </td>
  );
}

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableCell;

export type { Align as TableAlign };
