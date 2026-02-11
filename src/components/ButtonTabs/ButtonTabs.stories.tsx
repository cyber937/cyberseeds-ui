import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import { ButtonTabs } from "./ButtonTabs";

const meta: Meta<typeof ButtonTabs> = {
  component: ButtonTabs,
  title: "Navigation/ButtonTabs",
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
    defaultValue: "lending",
    scale: "md",
  },
  render: (args) => (
    <ButtonTabs {...args}>
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="lending">貸出</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="return">返却</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="lending">貸出画面の内容</ButtonTabs.Content>
      <ButtonTabs.Content value="return">返却画面の内容</ButtonTabs.Content>
    </ButtonTabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("tab1");
    return (
      <div className="cs:space-y-4">
        <ButtonTabs value={value} onChange={setValue}>
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="tab1">タブ 1</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab2">タブ 2</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab3">タブ 3</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="tab1">タブ 1 のコンテンツ</ButtonTabs.Content>
          <ButtonTabs.Content value="tab2">タブ 2 のコンテンツ</ButtonTabs.Content>
          <ButtonTabs.Content value="tab3">タブ 3 のコンテンツ</ButtonTabs.Content>
        </ButtonTabs>
        <p className="cs:text-sm cs:text-gray-500">選択中: {value}</p>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <div className="cs:space-y-4">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => (
        <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{color}</p>
          <ButtonTabs defaultValue="a" color={color}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">タブ A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">タブ B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">タブ C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">コンテンツ A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">コンテンツ B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">コンテンツ C</ButtonTabs.Content>
          </ButtonTabs>
        </div>
      ))}
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => (
        <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{scale}</p>
          <ButtonTabs defaultValue="a" scale={scale}>
            <ButtonTabs.List>
              <ButtonTabs.Trigger value="a">タブ A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">タブ B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">タブ C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">コンテンツ A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">コンテンツ B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">コンテンツ C</ButtonTabs.Content>
          </ButtonTabs>
        </div>
      ))}
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <ButtonTabs defaultValue="a">
      <ButtonTabs.List>
        <ButtonTabs.Trigger value="a">有効</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="b" disabled>無効</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="c">有効</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="a">タブ A のコンテンツ</ButtonTabs.Content>
      <ButtonTabs.Content value="c">タブ C のコンテンツ</ButtonTabs.Content>
    </ButtonTabs>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="cs:space-y-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth</p>
        <ButtonTabs defaultValue="lending">
          <ButtonTabs.List fullWidth>
            <ButtonTabs.Trigger value="lending">貸出</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">返却</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">貸出画面の内容</ButtonTabs.Content>
          <ButtonTabs.Content value="return">返却画面の内容</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth (3 tabs)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List fullWidth>
            <ButtonTabs.Trigger value="a">タブ A</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">タブ B</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="c">タブ C</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">コンテンツ A</ButtonTabs.Content>
          <ButtonTabs.Content value="b">コンテンツ B</ButtonTabs.Content>
          <ButtonTabs.Content value="c">コンテンツ C</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">default (inline)</p>
        <ButtonTabs defaultValue="lending">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="lending">貸出</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">返却</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">貸出画面の内容</ButtonTabs.Content>
          <ButtonTabs.Content value="return">返却画面の内容</ButtonTabs.Content>
        </ButtonTabs>
      </div>
    </div>
  ),
};

export const ComparedWithTabs: Story = {
  render: () => (
    <div className="cs:space-y-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">ButtonTabs (ボタン形式)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">貸出</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">返却</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">貸出画面</ButtonTabs.Content>
          <ButtonTabs.Content value="b">返却画面</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Tabs (アンダーライン形式)</p>
        <Tabs defaultValue="a">
          <Tabs.List>
            <Tabs.Trigger value="a">貸出</Tabs.Trigger>
            <Tabs.Trigger value="b">返却</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">貸出画面</Tabs.Content>
          <Tabs.Content value="b">返却画面</Tabs.Content>
        </Tabs>
      </div>
    </div>
  ),
};
