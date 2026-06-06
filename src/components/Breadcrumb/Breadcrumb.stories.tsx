import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: "Layout/Breadcrumb",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/items">Items</Breadcrumb.Item>
      <Breadcrumb.Item current>SKU-1234</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const Deep: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/items">Items</Breadcrumb.Item>
      <Breadcrumb.Item href="/items/sku-1234">SKU-1234</Breadcrumb.Item>
      <Breadcrumb.Item current>Movements</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const ChevronSeparator: Story = {
  render: () => (
    <Breadcrumb separator="›">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item current>Settings</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const SvgSeparator: Story = {
  render: () => (
    <Breadcrumb
      separator={
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      }
    >
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/admin">Admin</Breadcrumb.Item>
      <Breadcrumb.Item current>Users</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item current>Dashboard</Breadcrumb.Item>
    </Breadcrumb>
  ),
};
