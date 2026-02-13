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
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          Manage your account settings. You can change your name, email address, and more.
        </p>
      </Tabs.Content>
      <Tabs.Content value="password">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          Change your password. We recommend updating it regularly for security.
        </p>
      </Tabs.Content>
      <Tabs.Content value="notifications">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          Customize your notification settings. Control email and push notifications.
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
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Tab 1 content</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2 content</Tabs.Content>
          <Tabs.Content value="tab3">Tab 3 content</Tabs.Content>
        </Tabs>
        <p className="cs:mt-2 cs:text-sm cs:text-gray-500">
          Current tab: {tab}
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
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <span className="cs:text-gray-600 cs:dark:text-gray-400">
                {color} theme content
              </span>
            </Tabs.Content>
            <Tabs.Content value="tab2">Tab 2</Tabs.Content>
            <Tabs.Content value="tab3">Tab 3</Tabs.Content>
          </Tabs>
        </GroupBox>
      ))}
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Tabs defaultValue="tab1" scale="xs">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Extra Small size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Tabs defaultValue="tab1" scale="sm">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Small size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Tabs defaultValue="tab1" scale="md">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Standard size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Tabs defaultValue="tab1" scale="lg">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Large size</Tabs.Content>
          <Tabs.Content value="tab2">Tab 2</Tabs.Content>
        </Tabs>
      </GroupBox>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Enabled</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          Disabled
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">Enabled</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Enabled tab content</Tabs.Content>
      <Tabs.Content value="tab2">Disabled tab content</Tabs.Content>
      <Tabs.Content value="tab3">Third tab content</Tabs.Content>
    </Tabs>
  ),
};

export const MobileScroll: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  render: () => (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Home</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Profile</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
        <Tabs.Trigger value="tab4">Notifications</Tabs.Trigger>
        <Tabs.Trigger value="tab5">Messages</Tabs.Trigger>
        <Tabs.Trigger value="tab6">Help</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="cs:text-gray-700 cs:dark:text-gray-400">
          On mobile, you can scroll horizontally to switch between tabs.
        </p>
      </Tabs.Content>
      <Tabs.Content value="tab2">Profile</Tabs.Content>
      <Tabs.Content value="tab3">Settings</Tabs.Content>
      <Tabs.Content value="tab4">Notifications</Tabs.Content>
      <Tabs.Content value="tab5">Messages</Tabs.Content>
      <Tabs.Content value="tab6">Help</Tabs.Content>
    </Tabs>
  ),
};
