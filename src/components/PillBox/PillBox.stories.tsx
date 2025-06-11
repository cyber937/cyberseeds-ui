import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pillbox } from "./Pillbox";

const meta: Meta<typeof Pillbox> = {
  component: Pillbox,
  title: "System/PillBox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    scale: {
      control: { type: "radio" },
      options: ["sm", "md"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "gray",
        "zinc",
        "neutral",
        "stone",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "PillBox",
    color: "red",
    scale: "md",
    className: "",
  },
};

export const Color: Story = {
  render: () => (
    <div className="cs:space-y-4">
      <div className="cs:grid cs:grid-cols-5 cs:gap-6">
        <Pillbox label="Red" color="red" />
        <Pillbox label="Orange" color="orange" />
        <Pillbox label="Amber" color="amber" />
        <Pillbox label="Yellow" color="yellow" />
        <Pillbox label="Lime" color="lime" />
        <Pillbox label="Green" color="green" />
        <Pillbox label="Emerald" color="emerald" />
        <Pillbox label="Teal" color="teal" />
        <Pillbox label="Cyan" color="cyan" />
        <Pillbox label="Sky" color="sky" />
        <Pillbox label="Blue" color="blue" />
        <Pillbox label="Indigo" color="indigo" />
        <Pillbox label="Violet" color="violet" />
        <Pillbox label="Purple" color="purple" />
        <Pillbox label="Fuchsia" color="fuchsia" />
        <Pillbox label="Pink" color="pink" />
        <Pillbox label="Rose" color="rose" />
        <Pillbox label="Slate" color="slate" />
        <Pillbox label="Gray" color="gray" />
        <Pillbox label="Zinc" color="zinc" />
        <Pillbox label="Neutral" color="neutral" />
        <Pillbox label="Stone" color="stone" />
      </div>
    </div>
  ),
};

export const Scale: Story = {
  render: () => (
    <div className="cs:space-y-4">
      <div className="cs:grid cs:grid-cols-5 cs:gap-6">
        <Pillbox label="Red" color="red" scale="md" />
        <Pillbox label="Red" color="red" scale="sm" />
      </div>
    </div>
  ),
};
