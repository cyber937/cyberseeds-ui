import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Feedback/Progress",
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
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
    showValue: { control: "boolean" },
    animated: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    scale: "md",
    color: "blue",
    showValue: false,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={30} label="アップロード中" showValue color="blue" />
      <Progress value={75} label="処理中" showValue color="green" />
      <Progress value={100} label="完了" showValue color="emerald" />
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <GroupBox label="Extra Small (xs)">
        <Progress value={65} scale="xs" color="blue" />
      </GroupBox>
      <GroupBox label="Small (sm)">
        <Progress value={65} scale="sm" color="blue" />
      </GroupBox>
      <GroupBox label="Standard (md)">
        <Progress value={65} scale="md" color="blue" />
      </GroupBox>
      <GroupBox label="Large (lg)">
        <Progress value={65} scale="lg" color="blue" />
      </GroupBox>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="cs:space-y-3 cs:max-w-md">
      {(["red", "orange", "amber", "green", "emerald", "cyan", "blue", "indigo", "violet", "purple", "pink"] as const).map((color, i) => (
        <div key={color} className="cs:flex cs:items-center cs:gap-3">
          <span className="cs:text-xs cs:text-gray-500 cs:w-14">{color}</span>
          <Progress value={30 + i * 6} color={color} />
        </div>
      ))}
    </div>
  ),
};

export const Values: Story = {
  render: () => (
    <div className="cs:space-y-3 cs:max-w-md">
      <Progress value={0} showValue label="0%" color="gray" />
      <Progress value={25} showValue label="25%" color="blue" />
      <Progress value={50} showValue label="50%" color="indigo" />
      <Progress value={75} showValue label="75%" color="violet" />
      <Progress value={100} showValue label="100%" color="green" />
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div className="cs:space-y-4 cs:max-w-md">
      <Progress value={45} label="アップロード中..." showValue animated color="blue" />
      <Progress value={70} label="処理中..." showValue animated color="green" />
      <Progress value={30} label="ダウンロード中..." showValue animated color="violet" />
      <Progress value={90} label="ほぼ完了" showValue animated color="emerald" />
    </div>
  ),
};
