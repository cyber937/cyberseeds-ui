import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "../Badge/Badge";
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
