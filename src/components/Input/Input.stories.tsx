import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "System/Input",
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    scale: {
      control: { type: "radio" },
      options: ["sm", "md"]
    },
    color: {
      control: { type: "select" },
      options: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'gray', 'zinc', 'neutral', 'stone']
    },
    isInvalid: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'メールアドレス',
    scale: 'md',
    color: "blue",
    placeholder: 'メールアドレス',
    require: false,
    isInvalid: false,
    disabled: false
  }
};

export const Require: Story = {
  args: {
    label: 'メールアドレス',
    scale: 'md',
    color: "blue",
    placeholder: 'メールアドレス',
    require: true,
    isInvalid: false,
    disabled: false
  }
};

export const Invalid: Story = {
  args: {
    label: 'メールアドレス',
    scale: 'md',
    color: "blue",
    placeholder: 'メールアドレス',
    require: false,
    isInvalid: true,
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    label: 'メールアドレス',
    scale: 'md',
    color: "blue",
    placeholder: 'メールアドレス',
    require: false,
    isInvalid: false,
    disabled: true
  }
};