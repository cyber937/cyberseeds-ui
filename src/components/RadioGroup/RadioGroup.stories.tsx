import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { GroupBox } from "../GroupBox/GroupBox";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "System/RadioGroup",
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: "md",
    color: "blue",
  },
  render: (args) => {
    const [gender, setGender] = useState<string>("male");
    return (
      <RadioGroup {...args} value={gender} onChange={setGender}>
        <RadioGroup.Option label="男性" value="male" />
        <RadioGroup.Option label="女性" value="female" />
        <RadioGroup.Option label="その他" value="other" />
      </RadioGroup>
    );
  },
};

export const Scale: Story = {
  render: () => {
    const [standardSender, setStandarGender] = useState<string>("male");
    const [smallSender, setSmallGender] = useState<string>("male");
    return (
      <div className="cs:grid cs:grid-cols-2 cs:gap-4">
        <GroupBox label="Standard Size">
          <RadioGroup
            scale="md"
            color="blue"
            value={standardSender}
            onChange={setStandarGender}
          >
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Small Size">
          <RadioGroup
            scale="sm"
            color="blue"
            value={smallSender}
            onChange={setSmallGender}
          >
            <RadioGroup.Option label="男性" value="male" />
            <RadioGroup.Option label="女性" value="female" />
            <RadioGroup.Option label="その他" value="other" />
          </RadioGroup>
        </GroupBox>
      </div>
    );
  },
};
