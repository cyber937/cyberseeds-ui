import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ButtonGroup } from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "System/ButtonGroup",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red", "orange", "amber", "yellow", "lime", "green",
        "emerald", "teal", "cyan", "sky", "blue", "indigo",
        "violet", "purple", "fuchsia", "pink", "gray",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "all",
    scale: "md",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
      <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
      <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
      <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
    </ButtonGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>("all");
    return (
      <div className="cs:space-y-4">
        <ButtonGroup value={value} onChange={setValue}>
          <ButtonGroup.Item value="all">全員</ButtonGroup.Item>
          <ButtonGroup.Item value="student">生徒</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">保護者</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">教務</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">選択中: {String(value)}</p>
      </div>
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>(["read", "write"]);
    return (
      <div className="cs:space-y-4">
        <ButtonGroup multiple value={value} onChange={setValue}>
          <ButtonGroup.Item value="read">読み取り</ButtonGroup.Item>
          <ButtonGroup.Item value="write">書き込み</ButtonGroup.Item>
          <ButtonGroup.Item value="delete">削除</ButtonGroup.Item>
          <ButtonGroup.Item value="admin">管理</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">選択中: {Array.isArray(value) ? value.join(", ") : value}</p>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <div className="cs:space-y-3">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => (
        <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{color}</p>
          <ButtonGroup defaultValue="a" color={color}>
            <ButtonGroup.Item value="a">Option A</ButtonGroup.Item>
            <ButtonGroup.Item value="b">Option B</ButtonGroup.Item>
            <ButtonGroup.Item value="c">Option C</ButtonGroup.Item>
          </ButtonGroup>
        </div>
      ))}
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:space-y-3">
      {(["xs", "sm", "md", "lg"] as const).map(scale => (
        <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{scale}</p>
          <ButtonGroup defaultValue="a" scale={scale}>
            <ButtonGroup.Item value="a">Option A</ButtonGroup.Item>
            <ButtonGroup.Item value="b">Option B</ButtonGroup.Item>
            <ButtonGroup.Item value="c">Option C</ButtonGroup.Item>
          </ButtonGroup>
        </div>
      ))}
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <ButtonGroup defaultValue="a">
      <ButtonGroup.Item value="a">有効</ButtonGroup.Item>
      <ButtonGroup.Item value="b" disabled>無効</ButtonGroup.Item>
      <ButtonGroup.Item value="c">有効</ButtonGroup.Item>
    </ButtonGroup>
  ),
};
