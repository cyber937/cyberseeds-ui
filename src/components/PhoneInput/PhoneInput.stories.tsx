import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { PhoneInput } from "./PhoneInput";

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: "System/PhoneInput",
  tags: ["autodocs"],
  argTypes: {
    label: { control: { type: "text" } },
    isInvalid: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "電話番号",
    scale: "md",
    color: "blue",
    isInvalid: false,
    disabled: false,
  },
  render: (args) => {
    const [phoneNyumber, setPhoneNumber] = useState<string>("");
    return (
      <PhoneInput value={phoneNyumber} onChange={setPhoneNumber} {...args} />
    );
  },
};
