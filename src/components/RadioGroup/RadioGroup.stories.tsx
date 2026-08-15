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
        <RadioGroup.Option label="Male" value="male" />
        <RadioGroup.Option label="Female" value="female" />
        <RadioGroup.Option label="Other" value="other" />
      </RadioGroup>
    );
  },
};

export const Scale: Story = {
  render: () => {
    const [xsVal, setXsVal] = useState<string>("male");
    const [smVal, setSmVal] = useState<string>("male");
    const [mdVal, setMdVal] = useState<string>("male");
    const [lgVal, setLgVal] = useState<string>("male");
    return (
      <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
        <GroupBox label="Extra Small (xs)">
          <RadioGroup
            scale="xs"
            color="blue"
            value={xsVal}
            onChange={setXsVal}
          >
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Small (sm)">
          <RadioGroup
            scale="sm"
            color="blue"
            value={smVal}
            onChange={setSmVal}
          >
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Standard (md)">
          <RadioGroup
            scale="md"
            color="blue"
            value={mdVal}
            onChange={setMdVal}
          >
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
        <GroupBox label="Large (lg)">
          <RadioGroup
            scale="lg"
            color="blue"
            value={lgVal}
            onChange={setLgVal}
          >
            <RadioGroup.Option label="Male" value="male" />
            <RadioGroup.Option label="Female" value="female" />
            <RadioGroup.Option label="Other" value="other" />
          </RadioGroup>
        </GroupBox>
      </div>
    );
  },
};

/**
 * 入力済みの内容を見せるだけの画面（確認画面など）向け。
 *
 * `disabled` を付けても選ばれている項目は分かるので、
 * `<input type="radio" disabled>` を自前で書く必要がない。
 * 1 つだけ外したいときは `RadioGroup.Option` の `disabled={false}`。
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <GroupBox label="Whole group disabled">
        <RadioGroup value="female" disabled>
          <RadioGroup.Option label="Male" value="male" />
          <RadioGroup.Option label="Female" value="female" />
          <RadioGroup.Option label="Other" value="other" />
        </RadioGroup>
      </GroupBox>
      <GroupBox label="One option disabled">
        <RadioGroup value="male">
          <RadioGroup.Option label="Male" value="male" />
          <RadioGroup.Option label="Female" value="female" />
          <RadioGroup.Option label="Other (not available)" value="other" disabled />
        </RadioGroup>
      </GroupBox>
    </div>
  ),
};
