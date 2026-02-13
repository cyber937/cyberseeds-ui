import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: "Feedback/Spinner",
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
  args: {
    scale: "md",
    color: "blue",
  },
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Spinner scale="xs" />
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Spinner scale="sm" />
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Spinner scale="md" />
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Spinner scale="lg" />
      </GroupBox>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="cs:flex cs:flex-wrap cs:gap-4 cs:items-center">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink", "gray"] as const).map((color) => (
        <div key={color} className="cs:flex cs:flex-col cs:items-center cs:gap-1">
          <Spinner color={color} />
          <span className="cs:text-xs cs:text-gray-500">{color}</span>
        </div>
      ))}
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="cs:flex cs:items-center cs:gap-3">
      <Spinner color="blue" />
      <span className="cs:text-sm cs:text-gray-600 cs:dark:text-gray-400">
        Loading...
      </span>
    </div>
  ),
};
