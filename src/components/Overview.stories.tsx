import type { Meta, StoryObj } from "@storybook/react-vite";

import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "./Accordion/Accordion";
import { Badge } from "./Badge/Badge";
import { Button } from "./Button/Button";
import { Checkbox } from "./Checkbox/Checkbox";
import type { Color } from "./DesignSystemUtils";
import { FormField } from "./FormField/FormField";
import { GroupBox } from "./GroupBox/GroupBox";
import { Input } from "./Input/Input";
import { Label } from "./Label/Label";
import { Modal } from "./Modal/Modal";
import { PhoneInput } from "./PhoneInput/PhoneInput";
import { PillBox } from "./PillBox/PillBox";
import { Progress } from "./Progress/Progress";
import { RadioGroup } from "./RadioGroup/RadioGroup";
import { Select, SelectOption } from "./Select/Select";
import { Spinner } from "./Spinner/Spinner";
import { Switch } from "./Switch/Switch";
import { Tabs } from "./Tabs/Tabs";
import { TextArea } from "./TextArea/TextArea";
import { Toast } from "./Toast/Toast";
import { Tooltip } from "./Tooltip/Tooltip";
import { UIColorProvider } from "./UIColorProvider/UIColorContext";

interface OverviewProps {
  initialColor: Color;
}

const Overview = ({ initialColor }: OverviewProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [switchValue, setSwitchValue] = useState<boolean>(true);
  const [tabValue, setTabValue] = useState<string>("tab1");
  const [showToast, setShowToast] = useState<boolean>(false);

  const [color, setColor] = useState<Color>(initialColor);

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  return (
    <div>
      <UIColorProvider initialColor={color}>
        <GroupBox label="GroupBox" className="cs:space-y-4">
          {/* Accordion */}
          <Accordion>
            <AccordionItem title="1. Accordion">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </AccordionItem>
            <AccordionItem title="2. Accordion">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </AccordionItem>
          </Accordion>

          {/* Badge */}
          <div className="cs:flex cs:flex-wrap cs:items-center cs:gap-2">
            <Label text="Badge" />
            <Badge variant="solid" color={color}>
              3
            </Badge>
            <Badge variant="outline" color={color}>
              New
            </Badge>
            <Badge variant="dot" color={color} />
          </div>

          {/* Button */}
          <div className="cs:flex cs:flex-wrap cs:gap-4">
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Button variant="secondary">Secondary</Button>
          </div>

          {/* Checkbox */}
          <Checkbox label="Checkbox" />

          {/* FormField + Input */}
          <FormField isRequired>
            <Input label="FormField + Input" placeholder="Required field" />
          </FormField>

          {/* Input */}
          <Input label="Input" placeholder="Input" />

          {/* PhoneInput */}
          <PhoneInput
            label="Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />

          {/* PillBox */}
          <div className="cs:flex cs:flex-wrap cs:gap-2">
            <PillBox label="PillBox" />
            <PillBox label="PillBox" color="red" />
            <PillBox label="PillBox" color="green" />
            <PillBox label="PillBox" color="yellow" />
            <PillBox label="PillBox" color="gray" />
          </div>

          {/* Progress */}
          <div className="cs:space-y-2">
            <Label text="Progress" />
            <Progress value={65} showValue animated />
          </div>

          {/* RadioGroup */}
          <GroupBox label="RadioGroup">
            <RadioGroup value={language} onChange={setLanguage}>
              <RadioGroup.Option label="English" value="english" />
              <RadioGroup.Option label="Spanish" value="spanish" />
              <RadioGroup.Option label="French" value="french" />
            </RadioGroup>
          </GroupBox>

          {/* Select */}
          <Select>
            <SelectOption label="Select Fruit" value="0" />
            <SelectOption label="Apple" value="1" />
            <SelectOption label="Banana" value="2" />
            <SelectOption label="Orange" value="3" />
          </Select>

          {/* Spinner */}
          <div className="cs:flex cs:flex-wrap cs:items-center cs:gap-3">
            <Label text="Spinner" />
            <Spinner scale="sm" />
            <Spinner scale="md" />
          </div>

          {/* Switch */}
          <Switch
            checked={switchValue}
            onClick={() => setSwitchValue(!switchValue)}
            onLabel="On"
            offLabel="Off"
          />

          {/* Tabs */}
          <Tabs value={tabValue} onChange={setTabValue}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">Content of Tab 1</Tabs.Content>
            <Tabs.Content value="tab2">Content of Tab 2</Tabs.Content>
            <Tabs.Content value="tab3">Content of Tab 3</Tabs.Content>
          </Tabs>

          {/* TextArea */}
          <TextArea placeholder="Please type some texts." />

          {/* Toast */}
          <div className="cs:space-y-2">
            <Button
              variant="secondary"
              onClick={() => setShowToast(!showToast)}
            >
              {showToast ? "Hide Toast" : "Show Toast"}
            </Button>
            {showToast && (
              <div className="cs:space-y-2">
                <Toast variant="success" onClose={() => setShowToast(false)}>
                  Success message
                </Toast>
                <Toast variant="error" onClose={() => setShowToast(false)}>
                  Error message
                </Toast>
                <Toast variant="warning" onClose={() => setShowToast(false)}>
                  Warning message
                </Toast>
                <Toast variant="info" onClose={() => setShowToast(false)}>
                  Info message
                </Toast>
              </div>
            )}
          </div>

          {/* Tooltip */}
          <div className="cs:flex cs:flex-wrap cs:items-center cs:gap-4">
            <Tooltip content="Tooltip on top" position="top">
              <Button>Tooltip</Button>
            </Tooltip>
            <Tooltip content="Tooltip on right" position="right">
              <Button variant="secondary">Tooltip</Button>
            </Tooltip>
          </div>
        </GroupBox>

        {/* Modal */}
        {isModalOpen && (
          <Modal>
            <Modal.Header>Modal Header</Modal.Header>
            <Modal.Body>This is a modal example.</Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
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
        "rose",
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
