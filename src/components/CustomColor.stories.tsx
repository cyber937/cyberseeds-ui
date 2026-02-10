import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { Button } from "./Button/Button";
import { Checkbox } from "./Checkbox/Checkbox";
import type { CustomColor } from "./DesignSystemUtils";
import { GroupBox } from "./GroupBox/GroupBox";
import { Input } from "./Input/Input";
import { PhoneInput } from "./PhoneInput/PhoneInput";
import { PillBox } from "./PillBox/PillBox";
import { Radio } from "./Radio/Radio";
import { RadioGroup } from "./RadioGroup/RadioGroup";
import { Switch } from "./Switch/Switch";
import { TextArea } from "./TextArea/TextArea";
import { UIColorProvider } from "./UIColorProvider/UIColorContext";

// --- CustomColor presets ---

const indigo: CustomColor = {
  base: "#4f46e5",
  hover: "#4338ca",
  active: "#3730a3",
  focus: "#4f46e5",
  light: "#e0e7ff",
  lightText: "#312e81",
  border: "#a5b4fc",
};

const coral: CustomColor = {
  base: "#f97066",
  hover: "#e04e45",
  active: "#c53030",
  focus: "#f97066",
  light: "#fff1f0",
  lightText: "#9b1c1c",
  border: "#fca5a1",
};

const forest: CustomColor = {
  base: "#16a34a",
  hover: "#15803d",
  active: "#166534",
  focus: "#16a34a",
  light: "#dcfce7",
  lightText: "#14532d",
  border: "#86efac",
};

// --- Story wrapper component ---

interface CustomColorDemoProps {
  brandColor: CustomColor;
}

const CustomColorDemo = ({ brandColor }: CustomColorDemoProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [language, setLanguage] = useState("");
  const [switchValue, setSwitchValue] = useState(true);

  return (
    <UIColorProvider initialColor={brandColor}>
      <GroupBox label="CustomColor Demo" className="cs:space-y-4">
        <div className="cs:flex cs:gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
        </div>

        <Checkbox label="Checkbox" />

        <Input label="Input" placeholder="Focus to see custom outline" />

        <PhoneInput
          label="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <div className="cs:flex cs:gap-2">
          <PillBox label="Custom Pill" />
          <PillBox label="Another Pill" />
        </div>

        <GroupBox label="Radio Group">
          <RadioGroup value={language} onChange={setLanguage}>
            <RadioGroup.Option label="Option A" value="a" />
            <RadioGroup.Option label="Option B" value="b" />
            <RadioGroup.Option label="Option C" value="c" />
          </RadioGroup>
        </GroupBox>

        <Switch
          checked={switchValue}
          onClick={() => setSwitchValue(!switchValue)}
          onLabel="On"
          offLabel="Off"
        />

        <TextArea placeholder="Focus to see custom outline" />
      </GroupBox>
    </UIColorProvider>
  );
};

const meta: Meta<typeof CustomColorDemo> = {
  component: CustomColorDemo,
  title: "CustomColor",
  tags: ["autodocs"],
  argTypes: {
    brandColor: {
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- Stories ---

export const Indigo: Story = {
  args: {
    brandColor: indigo,
  },
};

export const Coral: Story = {
  args: {
    brandColor: coral,
  },
};

export const Forest: Story = {
  args: {
    brandColor: forest,
  },
};

/** Each component with its own CustomColor (no UIColorProvider) */
export const PerComponent: Story = {
  render: () => (
    <div className="cs:space-y-4">
      <h3 className="cs:text-sm cs:font-semibold cs:text-gray-700">
        Per-component custom color (without UIColorProvider)
      </h3>

      <div className="cs:flex cs:gap-4">
        <Button color={indigo}>Indigo</Button>
        <Button color={coral}>Coral</Button>
        <Button color={forest}>Forest</Button>
      </div>

      <div className="cs:flex cs:gap-4">
        <Checkbox label="Indigo" color={indigo} />
        <Checkbox label="Coral" color={coral} />
        <Checkbox label="Forest" color={forest} />
      </div>

      <div className="cs:flex cs:gap-4">
        <Radio label="Indigo" color={indigo} name="custom-radio" value="indigo" />
        <Radio label="Coral" color={coral} name="custom-radio" value="coral" />
        <Radio label="Forest" color={forest} name="custom-radio" value="forest" />
      </div>

      <div className="cs:flex cs:gap-2">
        <PillBox label="Indigo" color={indigo} />
        <PillBox label="Coral" color={coral} />
        <PillBox label="Forest" color={forest} />
      </div>

      <div className="cs:grid cs:grid-cols-3 cs:gap-4">
        <Input label="Indigo" color={indigo} placeholder="Focus me" />
        <Input label="Coral" color={coral} placeholder="Focus me" />
        <Input label="Forest" color={forest} placeholder="Focus me" />
      </div>
    </div>
  ),
};

/** Side-by-side comparison: preset vs custom color */
export const PresetVsCustom: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-2 cs:gap-8">
      <div>
        <h3 className="cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4">
          Preset: indigo
        </h3>
        <UIColorProvider initialColor="indigo">
          <div className="cs:space-y-4">
            <Button>Button</Button>
            <Checkbox label="Checkbox" />
            <PillBox label="PillBox" />
            <Input placeholder="Input" />
          </div>
        </UIColorProvider>
      </div>
      <div>
        <h3 className="cs:text-sm cs:font-semibold cs:text-gray-700 cs:mb-4">
          Custom: brand indigo
        </h3>
        <UIColorProvider initialColor={indigo}>
          <div className="cs:space-y-4">
            <Button>Button</Button>
            <Checkbox label="Checkbox" />
            <PillBox label="PillBox" />
            <Input placeholder="Input" />
          </div>
        </UIColorProvider>
      </div>
    </div>
  ),
};
