import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "System/Checkbox",
  tags: ["autodocs"],
  argTypes: {
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
    label: "Check This!",
    scale: "md",
    color: "blue",
  },
  render: (args) => <Checkbox {...args} />,
};

export const Color: Story = {
  args: {
    scale: "md",
  },
  render: (args) => (
    <div className="cs:space-y-4">
      <div className="cs:grid cs:grid-cols-5 cs:gap-6">
        <Checkbox label="Red" {...args} color="red"></Checkbox>
        <Checkbox label="Orange" {...args} color="orange"></Checkbox>
        <Checkbox label="Amber" {...args} color="amber"></Checkbox>
        <Checkbox label="Yellow" {...args} color="yellow"></Checkbox>
        <Checkbox label="Lime" {...args} color="lime"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-5 cs:gap-6">
        <Checkbox label="Green" {...args} color="green"></Checkbox>
        <Checkbox label="Emerald" {...args} color="emerald"></Checkbox>
        <Checkbox label="Teal" {...args} color="teal"></Checkbox>
        <Checkbox label="Cyan" {...args} color="cyan"></Checkbox>
        <Checkbox label="Sky" {...args} color="sky"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-5 cs:gap-6">
        <Checkbox label="Blue" {...args} color="blue"></Checkbox>
        <Checkbox label="Indigo" {...args} color="indigo"></Checkbox>
        <Checkbox label="Violet" {...args} color="violet"></Checkbox>
        <Checkbox label="Purple" {...args} color="purple"></Checkbox>
        <Checkbox label="Fuchsia" {...args} color="fuchsia"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-5 cs:gap-6">
        <Checkbox label="Pink" {...args} color="pink"></Checkbox>
        <Checkbox label="Rose" {...args} color="rose"></Checkbox>
        <Checkbox label="Slate" {...args} color="slate"></Checkbox>
        <Checkbox label="Gray" {...args} color="gray"></Checkbox>
        <Checkbox label="Zinc" {...args} color="zinc"></Checkbox>
      </div>
      <div className="cs:grid cs:grid-cols-5 cs:gap-6">
        <Checkbox label="Neutral" {...args} color="neutral"></Checkbox>
        <Checkbox label="Stone" {...args} color="stone"></Checkbox>
      </div>
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-4 cs:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Checkbox label="利用規約に同意" scale="xs" color="blue" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Checkbox label="利用規約に同意" scale="sm" color="blue" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Checkbox label="利用規約に同意" scale="md" color="blue" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Checkbox label="利用規約に同意" scale="lg" color="blue" />
      </div>
    </div>
  ),
};
