// stories/Select.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, SelectOption } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "System/Select",
  tags: ["autodocs"],
  argTypes: {
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
    scale: "md",
  },
  render: (args) => (
    <Select {...args}>
      <SelectOption key="0" label="選んでください" value="0" />
      <SelectOption key="1" label="テスト" value="1" />
      <SelectOption key="2" label="テスト2" value="2" />
    </Select>
  ),
};
