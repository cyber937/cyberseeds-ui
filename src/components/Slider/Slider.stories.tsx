import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Form/Slider",
  tags: ["autodocs"],
  argTypes: {
    scale: { control: { type: "radio" }, options: ["xs", "sm", "md", "lg"] },
    color: {
      control: { type: "select" },
      options: ["red", "amber", "green", "blue", "indigo", "violet", "pink", "gray"],
    },
    disabled: { control: { type: "boolean" } },
    showValue: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Range input tinted with the UI color (preset / custom / context). " +
          "Controlled or uncontrolled, with optional value display, label, and " +
          "`formatValue`.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [v, setV] = useState(40);
    return (
      <div style={{ width: 280 }}>
        <Slider {...args} value={v} onChange={setV} />
      </div>
    );
  },
  args: { showValue: true, label: "Volume" },
};

export const Currency: Story = {
  render: () => {
    const [v, setV] = useState(2500);
    return (
      <div style={{ width: 280 }}>
        <Slider
          value={v}
          onChange={setV}
          min={0}
          max={10000}
          step={100}
          color="emerald"
          showValue
          label="Budget"
          formatValue={(n) => `$${n.toLocaleString()}`}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { defaultValue: 60, disabled: true, showValue: true, label: "Locked" },
};
