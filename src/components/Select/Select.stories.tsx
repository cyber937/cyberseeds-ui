// stories/Select.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../Input/Input";
import { Select, SelectOption } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "System/Select",
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
    scale: "md",
    "aria-label": "選択",
  },
  render: (args) => (
    <div className="flex">
      <Select {...args}>
        <SelectOption key="0" label="選んでください" value="0" />
        <SelectOption key="1" label="テスト" value="1" />
        <SelectOption key="2" label="テスト2" value="2" />
      </Select>
    </div>
  ),
};

export const Scale: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Select scale="xs" aria-label="極小サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Select scale="sm" aria-label="小サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Select scale="md" aria-label="標準サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Select scale="lg" aria-label="大サイズ">
          <SelectOption key="0" label="選んでください" value="0" />
          <SelectOption key="1" label="テスト" value="1" />
          <SelectOption key="2" label="テスト2" value="2" />
        </Select>
      </div>
    </div>
  ),
};

export const WithInput: Story = {
  render: () => (
    <div className="cs:flex cs:gap-2 cs:max-w-md">
      <div className="cs:w-32 cs:shrink-0">
        <Select scale="md" aria-label="学年">
          <SelectOption value="" label="全学年" />
          <SelectOption value="1" label="小1" />
          <SelectOption value="2" label="小2" />
          <SelectOption value="3" label="小3" />
        </Select>
      </div>
      <div className="cs:flex-1 cs:min-w-0">
        <Input scale="md" placeholder="名前で検索…" aria-label="名前検索" />
      </div>
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    scale: "md",
    isInvalid: true,
    "aria-label": "選択",
  },
  render: (args) => (
    <Select {...args}>
      <SelectOption key="0" label="選んでください" value="0" />
      <SelectOption key="1" label="テスト" value="1" />
      <SelectOption key="2" label="テスト2" value="2" />
    </Select>
  ),
};
