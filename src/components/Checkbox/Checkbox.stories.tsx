import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "System/Checkbox",
  tags: ['autodocs'],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["sm", "md"],
    },
    color: {
      control: { type: "select" },
      options: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'gray', 'zinc', 'neutral', 'stone']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '運営',
    scale: "md",
    color: "blue",
  }
};