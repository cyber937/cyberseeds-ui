import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Display/Skeleton",
  component: Skeleton,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["text", "circular", "rectangular"] },
    scale: { control: "select", options: ["xs", "sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: { width: 200 },
};

export const Avatar: Story = {
  args: { variant: "circular", width: 40, height: 40 },
};

export const Rectangle: Story = {
  args: { variant: "rectangular", width: "100%", height: 120 },
};

export const Paragraph: Story = {
  args: { lines: 4 },
};

export const RowOfThree: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton width="40%" />
        <Skeleton width="80%" />
      </div>
    </div>
  ),
};

export const CardLoader: Story = {
  render: () => (
    <div className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4">
      <Skeleton variant="rectangular" width="100%" height={120} />
      <Skeleton width="70%" />
      <Skeleton lines={2} />
    </div>
  ),
};
