import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Data Display/Badge",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "dot"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red", "orange", "amber", "yellow", "lime", "green",
        "emerald", "teal", "cyan", "sky", "blue", "indigo",
        "violet", "purple", "fuchsia", "pink", "rose", "gray",
      ],
    },
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    max: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "5",
    variant: "solid",
    color: "blue",
    scale: "md",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="cs:flex cs:items-center cs:gap-4">
      <GroupBox label="Solid">
        <div className="cs:flex cs:gap-2">
          <Badge variant="solid" color="blue">3</Badge>
          <Badge variant="solid" color="red">New</Badge>
          <Badge variant="solid" color="green">Active</Badge>
        </div>
      </GroupBox>
      <GroupBox label="Outline">
        <div className="cs:flex cs:gap-2">
          <Badge variant="outline" color="blue">3</Badge>
          <Badge variant="outline" color="red">New</Badge>
          <Badge variant="outline" color="green">Active</Badge>
        </div>
      </GroupBox>
      <GroupBox label="Dot">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge variant="dot" color="green" />
          <Badge variant="dot" color="red" />
          <Badge variant="dot" color="amber" />
        </div>
      </GroupBox>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="cs:flex cs:flex-wrap cs:gap-2">
      {(["red", "orange", "amber", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "gray"] as const).map((color) => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  ),
};

export const WithMax: Story = {
  render: () => (
    <div className="cs:flex cs:items-center cs:gap-4">
      <Badge color="red" max={99}>{5}</Badge>
      <Badge color="red" max={99}>{42}</Badge>
      <Badge color="red" max={99}>{99}</Badge>
      <Badge color="red" max={99}>{150}</Badge>
      <Badge color="red" max={9}>{1000}</Badge>
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <GroupBox label="Extra Small (xs)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="xs" color="blue">12</Badge>
          <Badge scale="xs" variant="outline" color="red">New</Badge>
          <Badge scale="xs" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="sm" color="blue">12</Badge>
          <Badge scale="sm" variant="outline" color="red">New</Badge>
          <Badge scale="sm" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="md" color="blue">12</Badge>
          <Badge scale="md" variant="outline" color="red">New</Badge>
          <Badge scale="md" variant="dot" color="green" />
        </div>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Badge scale="lg" color="blue">12</Badge>
          <Badge scale="lg" variant="outline" color="red">New</Badge>
          <Badge scale="lg" variant="dot" color="green" />
        </div>
      </GroupBox>
    </div>
  ),
};

export const WithWrapper: Story = {
  render: () => (
    <div className="cs:flex cs:gap-8 cs:items-center">
      <Badge.Wrapper>
        <div className="cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded-full cs:flex cs:items-center cs:justify-center">
          <span className="cs:text-gray-600 cs:text-sm">U</span>
        </div>
        <Badge color="red" className="cs:absolute cs:-top-1 cs:-right-1">3</Badge>
      </Badge.Wrapper>
      <Badge.Wrapper>
        <div className="cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center">
          <span className="cs:text-gray-600 cs:text-sm">M</span>
        </div>
        <Badge variant="dot" color="green" className="cs:absolute cs:top-0 cs:right-0" />
      </Badge.Wrapper>
      <Badge.Wrapper>
        <div className="cs:h-10 cs:w-10 cs:bg-gray-200 cs:rounded cs:flex cs:items-center cs:justify-center">
          <span className="cs:text-gray-600 cs:text-sm">N</span>
        </div>
        <Badge color="red" scale="sm" max={99} className="cs:absolute cs:-top-1 cs:-right-2">{150}</Badge>
      </Badge.Wrapper>
    </div>
  ),
};
