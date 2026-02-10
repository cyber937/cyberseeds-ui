import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { PhoneInput } from "./PhoneInput";

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: "System/PhoneInput",
  tags: ["autodocs"],
  argTypes: {
    label: { control: { type: "text" } },
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red", "orange", "amber", "yellow", "lime", "green",
        "emerald", "teal", "cyan", "sky", "blue", "indigo",
        "violet", "purple", "fuchsia", "pink", "gray", "zinc",
        "neutral", "stone",
      ],
    },
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

export const Scales: Story = {
  render: () => {
    const [xs, setXs] = useState("");
    const [sm, setSm] = useState("");
    const [md, setMd] = useState("");
    const [lg, setLg] = useState("");
    return (
      <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
          <PhoneInput label="電話番号" scale="xs" value={xs} onChange={setXs} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
          <PhoneInput label="電話番号" scale="sm" value={sm} onChange={setSm} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
          <PhoneInput label="電話番号" scale="md" value={md} onChange={setMd} />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
          <PhoneInput label="電話番号" scale="lg" value={lg} onChange={setLg} />
        </div>
      </div>
    );
  },
};
