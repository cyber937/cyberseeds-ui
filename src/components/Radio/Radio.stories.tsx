import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "System/Radio",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
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

export const Default: Story = {
  args: {
    label: "Radio option",
    scale: "md",
    color: "blue",
  },
  render: (args) => <Radio {...args} name="default-story" />,
};

export const Checked: Story = {
  args: {
    label: "Selected option",
    defaultChecked: true,
    color: "blue",
  },
  render: (args) => <Radio {...args} name="checked-story" />,
};

export const Disabled: Story = {
  render: () => (
    <div className="cs:flex cs:flex-col cs:gap-2">
      <Radio name="disabled-story" label="Disabled (unchecked)" disabled />
      <Radio name="disabled-story-2" label="Disabled (checked)" disabled defaultChecked />
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((s) => (
        <div key={s}>
          <p className="cs:text-xs cs:text-gray-500 cs:mb-1">{s}</p>
          <Radio name={`scale-${s}`} label={`Scale ${s}`} scale={s} />
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
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4">
        {colors.map((c) => (
          <Radio
            key={c}
            name={`color-${c}`}
            label={c}
            color={c}
            defaultChecked
          />
        ))}
      </div>
    );
  },
};

export const States: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-2 cs:gap-3">
      <Radio name="states-1" label="Unchecked" />
      <Radio name="states-2" label="Checked" defaultChecked />
      <Radio name="states-3" label="Disabled / unchecked" disabled />
      <Radio name="states-4" label="Disabled / checked" disabled defaultChecked />
    </div>
  ),
};
