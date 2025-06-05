import type { Meta } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "System/RadioGroup",
  tags: ['autodocs'],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["sm", "md"]
    },
    color: {
      control: { type: "select" },
      options: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'gray', 'zinc', 'neutral', 'stone']
    }
  }
};

export default meta;

export function Default() {

  const [gender, setGender] = useState<string>('male');

  return (
    <RadioGroup scale='sm' color='blue' value={gender} onChange={setGender}>
      <RadioGroup.Option label="男性" value="male" />
      <RadioGroup.Option label="女性" value="female" />
      <RadioGroup.Option label="その他" value="other" />
    </RadioGroup>
  )
};