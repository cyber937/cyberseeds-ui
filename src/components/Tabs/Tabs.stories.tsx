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

/** asChild パターン — Trigger を `<a>` としてレンダリング。Next.js の `<Link>` でも同様に使用可能。 */
export const LinkNavigation: Story = {
  name: "Link Navigation (asChild)",
  render: () => (
    <Tabs value="account">
      <Tabs.List>
        <Tabs.Trigger value="account" asChild>
          <a href="#account">Account</a>
        </Tabs.Trigger>
        <Tabs.Trigger value="password" asChild>
          <a href="#password">Password</a>
        </Tabs.Trigger>
        <Tabs.Trigger value="billing" asChild>
          <a href="#billing">Billing</a>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs>
  ),
};

/** A user glyph, sized by Tabs rather than by the caller. */
const UsersIcon = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

/**
 * `icon` and `count` remove the two things every consumer was rebuilding by
 * hand: sizing the glyph, and colouring the count so the active tab reads with
 * its underline.
 *
 * The count pill follows the theme on the active tab and stays grey elsewhere.
 * `0` still renders — "no items" is information worth showing.
 */
export const WithIconAndCount: Story = {
  render: () => {
    const [tab, setTab] = useState("enrolled");
    return (
      <Tabs value={tab} onChange={setTab}>
        <Tabs.List>
          <Tabs.Trigger value="enrolled" icon={<UsersIcon />} count={147}>
            在籍
          </Tabs.Trigger>
          <Tabs.Trigger value="withdrawn" icon={<UsersIcon />} count={12}>
            退学
          </Tabs.Trigger>
          <Tabs.Trigger value="graduated" icon={<UsersIcon />} count={0}>
            卒業
          </Tabs.Trigger>
          <Tabs.Trigger value="all">すべて</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
  },
};

/** The icon and the pill both track the Tabs `scale`. */
export const IconAndCountScales: Story = {
  render: () => (
    <div className="cs:flex cs:flex-col cs:gap-6">
      {(["xs", "sm", "md", "lg"] as const).map((scale) => (
        <div key={scale}>
          <p className="cs:mb-1 cs:text-xs cs:text-gray-500">{scale}</p>
          <Tabs defaultValue="a" scale={scale}>
            <Tabs.List>
              <Tabs.Trigger value="a" icon={<UsersIcon />} count={147}>
                在籍
              </Tabs.Trigger>
              <Tabs.Trigger value="b" icon={<UsersIcon />} count={12}>
                退学
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs>
        </div>
      ))}
    </div>
  ),
};
