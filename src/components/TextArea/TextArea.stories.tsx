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
