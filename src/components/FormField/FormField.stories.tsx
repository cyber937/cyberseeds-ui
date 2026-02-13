import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./FormField";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { Select, SelectOption } from "../Select/Select";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof FormField> = {
  component: FormField,
  title: "Form/FormField",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    isInvalid: { control: "boolean" },
    isRequired: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: "md",
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Label>Email Address</FormField.Label>
      <Input type="email" placeholder="example@email.com" />
      <FormField.Help>Please enter a valid email address</FormField.Help>
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    isInvalid: true,
    isRequired: true,
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Label>Username</FormField.Label>
      <Input placeholder="Enter username" />
      <FormField.Error>Username is required</FormField.Error>
    </FormField>
  ),
};

export const WithHelp: Story = {
  render: () => (
    <FormField>
      <FormField.Label>Password</FormField.Label>
      <Input type="password" placeholder="Enter password" />
      <FormField.Help>Must be at least 8 characters with alphanumeric characters</FormField.Help>
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField isRequired>
      <FormField.Label>Name</FormField.Label>
      <Input placeholder="Enter name" />
    </FormField>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormField isDisabled>
      <FormField.Label>Email Address</FormField.Label>
      <Input placeholder="Cannot be changed" />
      <FormField.Help>This field is disabled</FormField.Help>
    </FormField>
  ),
};

export const WithTextArea: Story = {
  render: () => (
    <FormField isRequired>
      <FormField.Label>Comment</FormField.Label>
      <TextArea placeholder="Enter your comment" rows={4} />
      <FormField.Help>Up to 500 characters</FormField.Help>
    </FormField>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormField isRequired>
      <FormField.Label>Category</FormField.Label>
      <Select>
        <SelectOption label="Please select" value="" />
        <SelectOption label="Technology" value="tech" />
        <SelectOption label="Design" value="design" />
        <SelectOption label="Marketing" value="marketing" />
      </Select>
    </FormField>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <FormField scale="xs" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <FormField scale="sm" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <FormField scale="md" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <FormField scale="lg" isRequired>
          <FormField.Label>Email Address</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>Enter a valid email address</FormField.Help>
        </FormField>
      </GroupBox>
    </div>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <div className="cs:space-y-4 cs:max-w-md">
      <FormField isRequired>
        <FormField.Label>Name</FormField.Label>
        <Input placeholder="John Doe" />
      </FormField>

      <FormField isRequired isInvalid>
        <FormField.Label>Email Address</FormField.Label>
        <Input type="email" placeholder="example@email.com" />
        <FormField.Error>Please enter a valid email address</FormField.Error>
      </FormField>

      <FormField isRequired>
        <FormField.Label>Category</FormField.Label>
        <Select>
          <SelectOption label="Please select" value="" />
          <SelectOption label="Inquiry" value="inquiry" />
          <SelectOption label="Feedback" value="feedback" />
          <SelectOption label="Bug Report" value="bug" />
        </Select>
      </FormField>

      <FormField>
        <FormField.Label>Message</FormField.Label>
        <TextArea placeholder="Enter your message" rows={4} />
        <FormField.Help>Up to 1000 characters</FormField.Help>
      </FormField>
    </div>
  ),
};
