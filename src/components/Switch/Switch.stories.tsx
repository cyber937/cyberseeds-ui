import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "System/Switch",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["sm", "md"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "gray",
        "zinc",
        "neutral",
        "stone",
      ],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const BasicSwitch = (args: React.ComponentProps<typeof Switch>) => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <Switch
      {...args}
      checked={value}
      onClick={() => setValue(!value)}
      onLabel="オン"
      offLabel="オフ"
    />
  );
};

export const Primary: Story = {
  args: {
    scale: "md",
    color: "blue",
    disabled: false,
  },
  render: (args) => <BasicSwitch {...args} />,
};

export const Scale: Story = {
  render: () => {
    const [standardSwitch, setStandardSwitch] = useState<boolean>(true);
    const [smallSwitch, setSmallSwitch] = useState<boolean>(true);
    return (
      <div className="cs:grid cs:grid-cols-2">
        <Switch
          checked={standardSwitch}
          onClick={() => setStandardSwitch(!standardSwitch)}
          onLabel="オン"
          offLabel="オフ"
        />
        <Switch
          scale="sm"
          checked={smallSwitch}
          onClick={() => setSmallSwitch(!smallSwitch)}
          onLabel="オン"
          offLabel="オフ"
        />
      </div>
    );
  },
};
