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
      <ButtonGroup.Item value="all">All</ButtonGroup.Item>
      <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
      <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
      <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
    </ButtonGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>("all");
    return (
      <div className="cs:space-y-4">
        <ButtonGroup value={value} onChange={setValue}>
          <ButtonGroup.Item value="all">All</ButtonGroup.Item>
          <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">Selected: {String(value)}</p>
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
          <ButtonGroup.Item value="read">Read</ButtonGroup.Item>
          <ButtonGroup.Item value="write">Write</ButtonGroup.Item>
          <ButtonGroup.Item value="delete">Delete</ButtonGroup.Item>
          <ButtonGroup.Item value="admin">Admin</ButtonGroup.Item>
        </ButtonGroup>
        <p className="cs:text-sm cs:text-gray-500">Selected: {Array.isArray(value) ? value.join(", ") : value}</p>
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

export const FullWidth: Story = {
  render: () => (
    <div className="cs:space-y-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth</p>
        <ButtonGroup defaultValue="all" fullWidth>
          <ButtonGroup.Item value="all">All</ButtonGroup.Item>
          <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
        </ButtonGroup>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">fullWidth (2 items)</p>
        <ButtonGroup defaultValue="lending" fullWidth>
          <ButtonGroup.Item value="lending">Lending</ButtonGroup.Item>
          <ButtonGroup.Item value="return">Return</ButtonGroup.Item>
        </ButtonGroup>
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">default (inline)</p>
        <ButtonGroup defaultValue="all">
          <ButtonGroup.Item value="all">All</ButtonGroup.Item>
          <ButtonGroup.Item value="student">Students</ButtonGroup.Item>
          <ButtonGroup.Item value="parent">Parents</ButtonGroup.Item>
          <ButtonGroup.Item value="staff">Staff</ButtonGroup.Item>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <ButtonGroup defaultValue="a">
      <ButtonGroup.Item value="a">Enabled</ButtonGroup.Item>
      <ButtonGroup.Item value="b" disabled>Disabled</ButtonGroup.Item>
      <ButtonGroup.Item value="c">Enabled</ButtonGroup.Item>
    </ButtonGroup>
  ),
};
