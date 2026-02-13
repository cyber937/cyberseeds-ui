import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "System/Modal",
  argTypes: {
    width: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "md",
  },

  render: (args) => (
    <div className="cs:h-full">
      <Modal {...args}>
        <Modal.Header>Modal</Modal.Header>
        <Modal.Body>Sample modal body sentencse.</Modal.Body>
        <Modal.Footer>
          <div className="cs:flex cs:gap-2">
            <Button variant="secondary">Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  render: () => (
    <Modal width="md">
      <Modal.Header>Mobile View</Modal.Header>
      <Modal.Body>
        On mobile, the modal displays in fullscreen. Scroll lock is also enabled.
      </Modal.Body>
      <Modal.Footer>
        <div className="cs:flex cs:gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </Modal.Footer>
    </Modal>
  ),
};
