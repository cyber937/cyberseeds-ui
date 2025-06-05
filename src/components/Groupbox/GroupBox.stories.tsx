import type { Meta, StoryObj } from "@storybook/react";
import { GroupBox } from "./GroupBox";

const meta: Meta<typeof GroupBox> = {
  component: GroupBox,
  title: "System/GroupBox",
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: "text" },
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>

const groupBoxContent = (
  <div>
    This is inside of the group box.
  </div>
)

export const Default: Story = {
  args: {
    label: '保護者',
    children: groupBoxContent
  }
};