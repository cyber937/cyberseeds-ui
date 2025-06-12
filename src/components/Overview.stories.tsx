import type { Meta, StoryObj } from "@storybook/react-vite";

import { useEffect, useState } from "react";
import { Button } from "./Button/Button";
import { Checkbox } from "./Checkbox/Checkbox";
import type { Color } from "./DesignSystemUtils";
import { GroupBox } from "./GroupBox/GroupBox";
import { Input } from "./Input/Input";
import { Modal } from "./Modal/Modal";
import { PhoneInput } from "./PhoneInput/PhoneInput";
import { Pillbox } from "./Pillbox/Pillbox";
import { RadioGroup } from "./RadioGroup/RadioGroup";
import { Select, SelectOption } from "./Select/Select";
import { Switch } from "./Switch/Switch";
import { TextArea } from "./TextArea/TextArea";
import { UIColorProvider } from "./UIColorContext";

interface OverviewProps {
  initialColor: Color;
}

const Overview = ({ initialColor }: OverviewProps) => {
  const [isModalOpen, setIsMobalOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [switchValue, setSwitchValue] = useState<boolean>(true);

  const [color, setColor] = useState<Color>(initialColor);

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  return (
    <div>
      <UIColorProvider initialColor={color}>
        <GroupBox label="Groupbox" className="cs:space-y-4">
          <div className="cs:flex cs:gap-4">
            <Button onClick={() => setIsMobalOpen(!isModalOpen)}>
              Open Modal
            </Button>
            <Button variant="secondary">Secondary</Button>
          </div>
          <Checkbox label="Check" />
          <Input label="Input" placeholder="Input" />
          <PhoneInput
            label="Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <div className="cs:flex cs:gap-2">
            <Pillbox label="Pillbox" />
            <Pillbox label="Pillbox" color="red" />
            <Pillbox label="Pillbox" color="green" />
            <Pillbox label="Pillbox" color="yellow" />
            <Pillbox label="Pillbox" color="gray" />
          </div>
          <GroupBox label="Radio Group">
            <RadioGroup value={language} onChange={setLanguage}>
              <RadioGroup.Option label="English" value="english" />
              <RadioGroup.Option label="Spanish" value="spanish" />
              <RadioGroup.Option label="French" value="french" />
            </RadioGroup>
          </GroupBox>
          <Select>
            <SelectOption key="0" label="Select Fruit" value="0" />
            <SelectOption key="1" label="Apple" value="1" />
            <SelectOption key="2" label="Banana" value="2" />
            <SelectOption key="3" label="Orange" value="2" />
          </Select>
          <Switch
            checked={switchValue}
            onClick={() => setSwitchValue(!switchValue)}
            onLabel="On"
            offLabel="Off"
          />
          <TextArea placeholder="Please type some texts." />
        </GroupBox>
        {isModalOpen && (
          <Modal>
            <Modal.Header>Modal Header</Modal.Header>
            <Modal.Body>This is modal example</Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setIsMobalOpen(!isModalOpen)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </UIColorProvider>
    </div>
  );
};

const meta: Meta<typeof Overview> = {
  component: Overview,
  title: "Overview",
  tags: ["autodocs"],
  argTypes: {
    initialColor: {
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
    initialColor: "blue",
  },
};
