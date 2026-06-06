import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../Button/Button";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Display/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    scale: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Primary: Story = {
  args: {
    title: "No items match these filters",
    description: "Try clearing the search box or relaxing the status filter.",
  },
};

export const WithIcon: Story = {
  args: {
    icon: "📦",
    title: "No items yet",
    description: "Import an .xlsx workbook or create your first item to get started.",
  },
};

export const WithAction: Story = {
  args: {
    icon: "📊",
    title: "No data to chart",
    description: "Record at least one stock movement and the trend line will appear here.",
    action: <Button>Record movement</Button>,
  },
};

export const SilentEmpty: Story = {
  args: {
    description: "No results.",
  },
};

export const Scales: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((scale) => (
        <EmptyState
          key={scale}
          scale={scale}
          icon="🪹"
          title={`scale="${scale}"`}
          description="Same content, four sizes."
        />
      ))}
    </div>
  ),
};
