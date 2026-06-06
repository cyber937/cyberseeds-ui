import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Data Display/Avatar",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: { type: "radio" },
      options: ["circle", "square"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal",
        "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink",
        "gray", "zinc", "neutral", "stone",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE_IMAGE = "https://i.pravatar.cc/150?img=12";

export const WithImage: Story = {
  args: { src: SAMPLE_IMAGE, alt: "Sample user", scale: "md" },
};

export const Initials: Story = {
  args: { name: "Kiyoshi Nagahama", color: "blue", scale: "md" },
};

export const SingleNameInitial: Story = {
  args: { name: "Cher", color: "purple", scale: "md" },
};

export const CustomFallback: Story = {
  args: {
    fallback: "🦊",
    color: "amber",
    scale: "md",
    alt: "Fox avatar",
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://this-url-does-not-resolve.invalid/x.png",
    name: "Fallback User",
    color: "red",
    scale: "md",
  },
};

export const Square: Story = {
  args: {
    src: SAMPLE_IMAGE,
    shape: "square",
    scale: "md",
    alt: "Square avatar",
  },
};

export const Scales: Story = {
  render: () => (
    <div className="cs:flex cs:items-end cs:gap-3">
      {(["xs", "sm", "md", "lg"] as const).map((s) => (
        <div key={s} className="cs:flex cs:flex-col cs:items-center cs:gap-1">
          <Avatar name="KN" color="blue" scale={s} />
          <span className="cs:text-xs cs:text-gray-500">{s}</span>
        </div>
      ))}
    </div>
  ),
};

export const Color: Story = {
  render: () => {
    const colors = [
      "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal",
      "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink",
      "gray", "zinc", "neutral", "stone",
    ] as const;
    return (
      <div className="cs:grid cs:grid-cols-5 cs:gap-3">
        {colors.map((c) => (
          <Avatar key={c} name={c.charAt(0).toUpperCase() + c.charAt(1)} color={c} scale="md" />
        ))}
      </div>
    );
  },
};

export const Stack: Story = {
  render: () => (
    <div className="cs:flex cs:-space-x-2">
      <Avatar name="Alice Apple" color="red" scale="md" className="cs:ring-2 cs:ring-white" />
      <Avatar name="Bob Berry" color="blue" scale="md" className="cs:ring-2 cs:ring-white" />
      <Avatar name="Cara Cherry" color="green" scale="md" className="cs:ring-2 cs:ring-white" />
      <Avatar name="+3" color="gray" scale="md" className="cs:ring-2 cs:ring-white" />
    </div>
  ),
};
