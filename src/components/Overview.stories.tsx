import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overview } from "./Overview";

const meta: Meta<typeof Overview> = {
  component: Overview,
  title: "Overview",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
