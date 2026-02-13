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
        <ButtonTabs.Trigger value="lending">Lending</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="return">Return</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="lending">Lending screen content</ButtonTabs.Content>
      <ButtonTabs.Content value="return">Return screen content</ButtonTabs.Content>
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
            <ButtonTabs.Trigger value="tab1">Tab 1</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab2">Tab 2</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="tab3">Tab 3</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="tab1">Tab 1 content</ButtonTabs.Content>
          <ButtonTabs.Content value="tab2">Tab 2 content</ButtonTabs.Content>
          <ButtonTabs.Content value="tab3">Tab 3 content</ButtonTabs.Content>
        </ButtonTabs>
        <p className="cs:text-sm cs:text-gray-500">Selected: {value}</p>
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
              <ButtonTabs.Trigger value="a">Tab A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">Tab B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">Tab C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">Content A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">Content B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">Content C</ButtonTabs.Content>
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
              <ButtonTabs.Trigger value="a">Tab A</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="b">Tab B</ButtonTabs.Trigger>
              <ButtonTabs.Trigger value="c">Tab C</ButtonTabs.Trigger>
            </ButtonTabs.List>
            <ButtonTabs.Content value="a">Content A</ButtonTabs.Content>
            <ButtonTabs.Content value="b">Content B</ButtonTabs.Content>
            <ButtonTabs.Content value="c">Content C</ButtonTabs.Content>
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
        <ButtonTabs.Trigger value="a">Enabled</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="b" disabled>Disabled</ButtonTabs.Trigger>
        <ButtonTabs.Trigger value="c">Enabled</ButtonTabs.Trigger>
      </ButtonTabs.List>
      <ButtonTabs.Content value="a">Tab A content</ButtonTabs.Content>
      <ButtonTabs.Content value="c">Tab C content</ButtonTabs.Content>
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
            <ButtonTabs.Trigger value="lending">Lending</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">Return</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">Lending screen content</ButtonTabs.Content>
          <ButtonTabs.Content value="return">Return screen content</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth (3 tabs)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List fullWidth>
            <ButtonTabs.Trigger value="a">Tab A</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">Tab B</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="c">Tab C</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">Content A</ButtonTabs.Content>
          <ButtonTabs.Content value="b">Content B</ButtonTabs.Content>
          <ButtonTabs.Content value="c">Content C</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">default (inline)</p>
        <ButtonTabs defaultValue="lending">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="lending">Lending</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="return">Return</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="lending">Lending screen content</ButtonTabs.Content>
          <ButtonTabs.Content value="return">Return screen content</ButtonTabs.Content>
        </ButtonTabs>
      </div>
    </div>
  ),
};

export const ComparedWithTabs: Story = {
  render: () => (
    <div className="cs:space-y-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">ButtonTabs (button style)</p>
        <ButtonTabs defaultValue="a">
          <ButtonTabs.List>
            <ButtonTabs.Trigger value="a">Lending</ButtonTabs.Trigger>
            <ButtonTabs.Trigger value="b">Return</ButtonTabs.Trigger>
          </ButtonTabs.List>
          <ButtonTabs.Content value="a">Lending screen</ButtonTabs.Content>
          <ButtonTabs.Content value="b">Return screen</ButtonTabs.Content>
        </ButtonTabs>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Tabs (underline style)</p>
        <Tabs defaultValue="a">
          <Tabs.List>
            <Tabs.Trigger value="a">Lending</Tabs.Trigger>
            <Tabs.Trigger value="b">Return</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="a">Lending screen</Tabs.Content>
          <Tabs.Content value="b">Return screen</Tabs.Content>
        </Tabs>
      </div>
    </div>
  ),
};
