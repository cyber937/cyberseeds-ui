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
