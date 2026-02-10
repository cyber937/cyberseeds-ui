import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Tabs } from "./Tabs";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Navigation/Tabs",
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "red", "orange", "amber", "green", "blue",
        "indigo", "violet", "purple", "pink", "gray",
      ],
    },
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">アカウント</Tabs.Trigger>
        <Tabs.Trigger value="password">パスワード</Tabs.Trigger>
        <Tabs.Trigger value="notifications">通知</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          アカウント設定を管理します。名前、メールアドレスなどを変更できます。
        </p>
      </Tabs.Content>
      <Tabs.Content value="password">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          パスワードを変更します。セキュリティのため、定期的な変更をお勧めします。
        </p>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          通知設定をカスタマイズします。メール通知やプッシュ通知を制御できます。
        </p>
      </Tabs.Content>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [tab, setTab] = useState("tab1");
    return (
      <div>
        <Tabs value={tab} onChange={setTab}>
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">タブ 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">タブ1のコンテンツ</Tabs.Content>
          <Tabs.Content value="tab2">タブ2のコンテンツ</Tabs.Content>
          <Tabs.Content value="tab3">タブ3のコンテンツ</Tabs.Content>
        </Tabs>
        <p className="cs:mt-2 cs:text-sm cs:text-gray-500">
          現在のタブ: {tab}
        </p>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <div className="cs:space-y-6">
      {(["blue", "red", "green", "purple", "amber"] as const).map((color) => (
        <GroupBox key={color} label={color}>
          <Tabs defaultValue="tab1" color={color}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">タブ 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <span className="cs:text-gray-600 cs:dark:text-gray-400">
                {color} テーマのコンテンツ
              </span>
            </Tabs.Content>
            <Tabs.Content value="tab2">タブ 2</Tabs.Content>
            <Tabs.Content value="tab3">タブ 3</Tabs.Content>
          </Tabs>
        </GroupBox>
      ))}
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-2 cs:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Tabs defaultValue="tab1" scale="xs">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Extra Small サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Tabs defaultValue="tab1" scale="sm">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Small サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Tabs defaultValue="tab1" scale="md">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Standard サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Tabs defaultValue="tab1" scale="lg">
          <Tabs.List>
            <Tabs.Trigger value="tab1">タブ 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">タブ 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Large サイズ</Tabs.Content>
          <Tabs.Content value="tab2">タブ 2</Tabs.Content>
        </Tabs>
      </GroupBox>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">有効</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          無効
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">有効</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">有効なタブのコンテンツ</Tabs.Content>
      <Tabs.Content value="tab2">無効なタブのコンテンツ</Tabs.Content>
      <Tabs.Content value="tab3">3番目のタブのコンテンツ</Tabs.Content>
    </Tabs>
  ),
};
