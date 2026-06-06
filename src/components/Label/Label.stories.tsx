import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "System/Label",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    require: { control: { type: "boolean" } },
    text: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: "Email address" },
};

export const Required: Story = {
  args: { text: "Password", require: true },
};

export const Scales: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Label scale="xs" text="Extra small (xs)" />
      <Label scale="sm" text="Small (sm)" />
      <Label scale="md" text="Medium (md)" />
      <Label scale="lg" text="Large (lg)" />
    </div>
  ),
};

export const AssociatedWithInput: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <Label htmlFor="email-field" text="Email address" require />
      <input
        id="email-field"
        type="email"
        placeholder="user@example.com"
        style={{
          border: "1px solid #cbd5e1",
          borderRadius: "0.375rem",
          padding: "0.375rem 0.5rem",
        }}
      />
    </div>
  ),
};
