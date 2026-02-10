import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "System/TextArea",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
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

export const Default: Story = {
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: false,
    disabled: false,
  },
};

export const Require: Story = {
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: true,
    isInvalid: false,
    disabled: false,
  },
};

export const Invalid: Story = {
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Text Area",
    scale: "md",
    color: "blue",
    require: false,
    isInvalid: false,
    disabled: true,
  },
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <TextArea label="コメント" scale="xs" placeholder="入力してください" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <TextArea label="コメント" scale="sm" placeholder="入力してください" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <TextArea label="コメント" scale="md" placeholder="入力してください" rows={3} />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <TextArea label="コメント" scale="lg" placeholder="入力してください" rows={3} />
      </div>
    </div>
  ),
};
