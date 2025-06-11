import type { Meta, StoryObj } from "@storybook/react-vite";
import { Groupbox } from "./Groupbox";

const meta: Meta<typeof Groupbox> = {
  component: Groupbox,
  title: "System/Groupbox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const groupBoxContent = <div>This is inside of the group box.</div>;

export const Default: Story = {
  args: {
    label: "Label",
    children: groupBoxContent,
  },
};
