import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "Navigation/Stepper",
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

const librarySteps = [
  { label: "Select Borrower" },
  { label: "Confirm Borrower" },
  { label: "Scan Book" },
  { label: "Confirm" },
  { label: "Complete" },
];

export const Default: Story = {
  args: {
    steps: librarySteps,
    currentStep: 0,
    scale: "md",
  },
};

export const SecondStep: Story = {
  args: {
    steps: librarySteps,
    currentStep: 1,
  },
};

export const AllCompleted: Story = {
  args: {
    steps: librarySteps,
    currentStep: 4,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="cs:space-y-6">
      {(["blue", "green", "red", "amber", "purple"] as const).map(color => (
        <div key={color}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{color}</p>
          <Stepper steps={librarySteps} currentStep={2} color={color} />
        </div>
      ))}
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:space-y-6">
      {(["xs", "sm", "md", "lg"] as const).map(scale => (
        <div key={scale}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">{scale}</p>
          <Stepper steps={librarySteps} currentStep={2} scale={scale} />
        </div>
      ))}
    </div>
  ),
};

export const ThreeSteps: Story = {
  args: {
    steps: [
      { label: "Input" },
      { label: "Confirm" },
      { label: "Complete" },
    ],
    currentStep: 1,
  },
};
