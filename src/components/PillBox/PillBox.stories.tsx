import type { Meta, StoryObj } from "@storybook/react-vite";
import { PillBox } from "./PillBox";

const meta: Meta<typeof PillBox> = {
  component: PillBox,
  title: "System/PillBox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
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
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6">
        <PillBox label="Red" color="red" />
        <PillBox label="Orange" color="orange" />
        <PillBox label="Amber" color="amber" />
        <PillBox label="Yellow" color="yellow" />
        <PillBox label="Lime" color="lime" />
        <PillBox label="Green" color="green" />
        <PillBox label="Emerald" color="emerald" />
        <PillBox label="Teal" color="teal" />
        <PillBox label="Cyan" color="cyan" />
        <PillBox label="Sky" color="sky" />
        <PillBox label="Blue" color="blue" />
        <PillBox label="Indigo" color="indigo" />
        <PillBox label="Violet" color="violet" />
        <PillBox label="Purple" color="purple" />
        <PillBox label="Fuchsia" color="fuchsia" />
        <PillBox label="Pink" color="pink" />
        <PillBox label="Rose" color="rose" />
        <PillBox label="Slate" color="slate" />
        <PillBox label="Gray" color="gray" />
        <PillBox label="Zinc" color="zinc" />
        <PillBox label="Neutral" color="neutral" />
        <PillBox label="Stone" color="stone" />
      </div>
    </div>
  ),
};

export const Scale: Story = {
  render: () => (
    <div className="cs:flex cs:gap-4 cs:items-center">
      <PillBox label="XS" color="red" scale="xs" />
      <PillBox label="SM" color="red" scale="sm" />
      <PillBox label="MD" color="red" scale="md" />
      <PillBox label="LG" color="red" scale="lg" />
    </div>
  ),
};
