import type { Meta, StoryObj } from "@storybook/react-vite";
import { useMemo, useState } from "react";

import { Badge } from "../Badge/Badge";
import { Checkbox } from "../Checkbox/Checkbox";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Display/Table",
  component: Table,
  parameters: { layout: "padded" },
  argTypes: {
    scale: { control: "select", options: ["xs", "sm", "md", "lg"] },
    striped: { control: "boolean" },
    bordered: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const rows = [
  { sku: "WIDGET-1", description: "Standard widget", status: "active", on_hand: 12, price: "1.50" },
  { sku: "WIDGET-2", description: "Heavy duty widget", status: "active", on_hand: 4, price: "2.99" },
  { sku: "GADGET-1", description: "Discontinued gadget", status: "discontinued", on_hand: 0, price: "9.99" },
  { sku: "TOOL-7", description: "Clearance tool", status: "clearance", on_hand: 3, price: "0.50" },
];

export const Primary: Story = {
  args: { scale: "md" },
  render: (args) => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>SKU</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell align="right">On hand</Table.HeaderCell>
          <Table.HeaderCell align="right">Price</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((r) => (
          <Table.Row key={r.sku}>
            <Table.Cell>{r.sku}</Table.Cell>
            <Table.Cell>{r.description}</Table.Cell>
            <Table.Cell>{r.status}</Table.Cell>
            <Table.Cell align="right" numeric>{r.on_hand}</Table.Cell>
            <Table.Cell align="right" numeric>${r.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Striped: Story = {
  args: { striped: true },
  render: Primary.render,
};

export const Interactive: Story = {
  args: {},
  render: (args) => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>SKU</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((r) => (
          <Table.Row
            key={r.sku}
            interactive
            onClick={() => alert(`Clicked ${r.sku}`)}
          >
            <Table.Cell>{r.sku}</Table.Cell>
            <Table.Cell>{r.description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const WithBadges: Story = {
  args: {},
  render: (args) => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>SKU</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((r) => (
          <Table.Row key={r.sku}>
            <Table.Cell>{r.sku}</Table.Cell>
            <Table.Cell>
              <Badge
                color={
                  r.status === "active"
                    ? "emerald"
                    : r.status === "clearance"
                      ? "amber"
                      : "slate"
                }
              >
                {r.status}
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((scale) => (
        <div key={scale}>
          <p className="mb-1 text-xs text-slate-500">scale="{scale}"</p>
          <Table scale={scale}>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>SKU</Table.HeaderCell>
                <Table.HeaderCell align="right">Qty</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {rows.slice(0, 2).map((r) => (
                <Table.Row key={r.sku}>
                  <Table.Cell>{r.sku}</Table.Cell>
                  <Table.Cell align="right" numeric>{r.on_hand}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ))}
    </div>
  ),
};

/**
 * The three sort states side by side. The sorted column is the only one drawn
 * in the UI accent colour with a bold label and a single solid chevron —
 * sortable-but-unsorted columns stay muted with a double chevron.
 */
export const SortIndicatorStates: Story = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell sortable onSort={() => {}}>
            Unsorted
          </Table.HeaderCell>
          <Table.HeaderCell sortable sortDirection="asc" onSort={() => {}}>
            Ascending
          </Table.HeaderCell>
          <Table.HeaderCell sortable sortDirection="desc" onSort={() => {}}>
            Descending
          </Table.HeaderCell>
          <Table.HeaderCell>Not sortable</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.slice(0, 2).map((r) => (
          <Table.Row key={r.sku}>
            <Table.Cell>{r.sku}</Table.Cell>
            <Table.Cell>{r.description}</Table.Cell>
            <Table.Cell>{r.status}</Table.Cell>
            <Table.Cell>{r.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const SortableAndSelectable: Story = {
  render: () => {
    const [sortKey, setSortKey] = useState<"sku" | "on_hand">("sku");
    const [dir, setDir] = useState<"asc" | "desc">("asc");
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    const sorted = useMemo(() => {
      const copy = [...rows];
      copy.sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return dir === "asc" ? cmp : -cmp;
      });
      return copy;
    }, [sortKey, dir]);

    function toggleSort(key: "sku" | "on_hand") {
      if (sortKey === key) setDir((d) => (d === "asc" ? "desc" : "asc"));
      else {
        setSortKey(key);
        setDir("asc");
      }
    }

    const allSelected = sorted.every((r) => selected[r.sku]);

    return (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox
                aria-label="Select all"
                checked={allSelected}
                onCheckedChange={(c) =>
                  setSelected(
                    c ? Object.fromEntries(sorted.map((r) => [r.sku, true])) : {},
                  )
                }
              />
            </Table.HeaderCell>
            <Table.HeaderCell
              sortable
              sortDirection={sortKey === "sku" ? dir : false}
              onSort={() => toggleSort("sku")}
            >
              SKU
            </Table.HeaderCell>
            <Table.HeaderCell
              align="right"
              sortable
              sortDirection={sortKey === "on_hand" ? dir : false}
              onSort={() => toggleSort("on_hand")}
            >
              On hand
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sorted.map((r) => (
            <Table.Row key={r.sku} selected={!!selected[r.sku]}>
              <Table.Cell>
                <Checkbox
                  aria-label={`Select ${r.sku}`}
                  checked={!!selected[r.sku]}
                  onCheckedChange={(c) =>
                    setSelected((s) => ({ ...s, [r.sku]: c }))
                  }
                />
              </Table.Cell>
              <Table.Cell>{r.sku}</Table.Cell>
              <Table.Cell align="right" numeric>{r.on_hand}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

const manyRows = Array.from({ length: 60 }, (_, i) => ({
  sku: `SKU-${String(i + 1).padStart(3, "0")}`,
  description:
    i % 4 === 0
      ? "A deliberately long description that would otherwise wrap onto a second line and make the rows uneven"
      : "Standard widget",
  on_hand: (i * 7) % 40,
}));

/**
 * `autoHeight` measures the table's own top edge and caps its height at the
 * room left below it, so the header sticks and the body scrolls **without any
 * ancestor needing a bounded height**.
 *
 * Compare with `stickyHeader`, which only pins the header and leaves the
 * bounding to the caller — that needs `h-full` / `flex-1 min-h-0` threaded all
 * the way up, and breaks inside detail pages, tab panels, and screens with two
 * tables. Resize the preview to watch it follow the viewport.
 */
export const AutoHeight: Story = {
  render: () => (
    <div>
      <p className="cs:mb-3 cs:text-sm cs:text-gray-600">
        Content above the table. The table below starts here and runs to the
        bottom of the viewport.
      </p>
      <Table autoHeight={{ bottomGap: 24 }} scale="sm">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell width={140}>SKU</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell width={100} align="right">
              On hand
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {manyRows.map((r) => (
            <Table.Row key={r.sku}>
              <Table.Cell mono nowrap>
                {r.sku}
              </Table.Cell>
              <Table.Cell>{r.description}</Table.Cell>
              <Table.Cell align="right" numeric>
                {r.on_hand}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
};

/**
 * `width` pins a column, `nowrap` keeps a value on one line, and `truncate`
 * clips the overflow with an ellipsis. Pair `layout="fixed"` with widths so the
 * columns stop shifting as the data changes.
 */
export const ColumnSizing: Story = {
  render: () => (
    <Table layout="fixed" scale="sm">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell width={140}>SKU</Table.HeaderCell>
          <Table.HeaderCell>Description (truncates)</Table.HeaderCell>
          <Table.HeaderCell width="20%" align="right">
            On hand
          </Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {manyRows.slice(0, 5).map((r) => (
          <Table.Row key={r.sku}>
            <Table.Cell mono nowrap>
              {r.sku}
            </Table.Cell>
            <Table.Cell truncate maxWidth={280}>
              {r.description}
            </Table.Cell>
            <Table.Cell align="right" numeric>
              {r.on_hand}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

/**
 * `noDivider` drops the rule above a row so it reads as a continuation of the
 * one before it — for an expanded detail row, or the second line of a group.
 */
export const GroupedRows: Story = {
  render: () => (
    <Table scale="sm">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell width={160}>Grade</Table.HeaderCell>
          <Table.HeaderCell>Breakdown</Table.HeaderCell>
          <Table.HeaderCell align="right" width={100}>
            Count
          </Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell nowrap>Grade 1</Table.Cell>
          <Table.Cell />
          <Table.Cell align="right" numeric>
            32
          </Table.Cell>
        </Table.Row>
        <Table.Row noDivider>
          <Table.Cell />
          <Table.Cell>Boys</Table.Cell>
          <Table.Cell align="right" numeric>
            17
          </Table.Cell>
        </Table.Row>
        <Table.Row noDivider>
          <Table.Cell />
          <Table.Cell>Girls</Table.Cell>
          <Table.Cell align="right" numeric>
            15
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell nowrap>Grade 2</Table.Cell>
          <Table.Cell />
          <Table.Cell align="right" numeric>
            28
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
