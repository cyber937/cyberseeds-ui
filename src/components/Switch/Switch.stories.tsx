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
      options: ["xs", "sm", "md", "lg"],
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
      onLabel="ON"
      offLabel="OFF"
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
    const [xsSwitch, setXsSwitch] = useState<boolean>(true);
    const [smSwitch, setSmSwitch] = useState<boolean>(true);
    const [mdSwitch, setMdSwitch] = useState<boolean>(true);
    const [lgSwitch, setLgSwitch] = useState<boolean>(true);
    return (
      <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
          <Switch
            scale="xs"
            checked={xsSwitch}
            onClick={() => setXsSwitch(!xsSwitch)}
            onLabel="ON"
            offLabel="OFF"
          />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
          <Switch
            scale="sm"
            checked={smSwitch}
            onClick={() => setSmSwitch(!smSwitch)}
            onLabel="ON"
            offLabel="OFF"
          />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
          <Switch
            checked={mdSwitch}
            onClick={() => setMdSwitch(!mdSwitch)}
            onLabel="ON"
            offLabel="OFF"
          />
        </div>
        <div>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
          <Switch
            scale="lg"
            checked={lgSwitch}
            onClick={() => setLgSwitch(!lgSwitch)}
            onLabel="ON"
            offLabel="OFF"
          />
        </div>
      </div>
    );
  },
};
