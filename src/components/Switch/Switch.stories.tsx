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

export const Color: Story = {
  render: () => {
    const colors = [
      "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal",
      "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink",
      "gray", "zinc", "neutral", "stone",
    ] as const;
    return (
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-4 cs:md:grid-cols-5 cs:gap-4">
        {colors.map((c) => (
          <div key={c} className="cs:flex cs:items-center cs:gap-2">
            <Switch checked color={c} onLabel="ON" offLabel="OFF" />
            <span className="cs:text-xs cs:text-gray-500">{c}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="cs:flex cs:flex-wrap cs:gap-6 cs:items-center">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled / unchecked</p>
        <Switch disabled checked={false} onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled / checked</p>
        <Switch disabled checked onLabel="ON" offLabel="OFF" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-2 cs:gap-4">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Unchecked</p>
        <Switch checked={false} onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Checked</p>
        <Switch checked onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled (off)</p>
        <Switch disabled checked={false} onLabel="ON" offLabel="OFF" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-1">Disabled (on)</p>
        <Switch disabled checked onLabel="ON" offLabel="OFF" />
      </div>
    </div>
  ),
};
