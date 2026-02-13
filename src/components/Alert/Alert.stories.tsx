import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Feedback/Alert",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
    },
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "info",
    scale: "md",
    children: "This is a notification.",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info">Info: System maintenance is scheduled.</Alert>
      <Alert variant="success">Success: Data has been saved successfully.</Alert>
      <Alert variant="warning">Warning: Storage capacity is running low.</Alert>
      <Alert variant="error">Error: Network connection failed.</Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info" title="Notice">
        System maintenance is scheduled.
      </Alert>
      <Alert variant="success" title="Complete">
        Data has been saved successfully.
      </Alert>
      <Alert variant="warning" title="Caution">
        Storage capacity is running low.
      </Alert>
      <Alert variant="error" title="Error">
        Network connection failed. Please try again.
      </Alert>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info" closable onClose={() => alert("Closed")}>
        This is a closable alert.
      </Alert>
      <Alert variant="error" title="Error" closable onClose={() => alert("Closed")}>
        This is a closable alert with a title.
      </Alert>
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info" scale="xs">Extra Small (xs)</Alert>
      <Alert variant="info" scale="sm">Small (sm)</Alert>
      <Alert variant="info" scale="md">Medium (md)</Alert>
      <Alert variant="info" scale="lg">Large (lg)</Alert>
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info" icon={false}>Alert without an icon.</Alert>
      <Alert variant="error" icon={false} title="Error">
        No icon + with title.
      </Alert>
    </div>
  ),
};
