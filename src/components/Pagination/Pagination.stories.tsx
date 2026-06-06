import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: { layout: "padded" },
  argTypes: {
    scale: { control: "select", options: ["xs", "sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: { offset: 0, limit: 50, total: 39553 },
  render: (args) => {
    const [offset, setOffset] = useState(args.offset);
    return (
      <Pagination
        {...args}
        offset={offset}
        onChange={(next) => setOffset(next)}
      />
    );
  },
};

export const FirstPage: Story = {
  args: { offset: 0, limit: 25, total: 200, onChange: () => {} },
};

export const MiddlePage: Story = {
  args: { offset: 100, limit: 25, total: 200, onChange: () => {} },
};

export const LastPage: Story = {
  args: { offset: 175, limit: 25, total: 200, onChange: () => {} },
};

export const SingleRow: Story = {
  args: { offset: 0, limit: 50, total: 1, onChange: () => {} },
};

export const Empty: Story = {
  args: { offset: 0, limit: 50, total: 0, onChange: () => {} },
};

export const HiddenSummary: Story = {
  args: {
    offset: 50,
    limit: 50,
    total: 200,
    showSummary: false,
    onChange: () => {},
  },
};
