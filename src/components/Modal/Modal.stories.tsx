import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "System/Modal",
  tags: ["autodocs"],
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
    <Modal {...args}>
      <Modal.Header>サンプルモダル</Modal.Header>
      <Modal.Body>
        サンプルモダルの中身です。 色々とカスタマイズできます。
      </Modal.Body>
      <Modal.Footer>
        <div className="flex gap-2">
          <Button variant="secondary">キャンセル</Button>
          <Button>確定</Button>
        </div>
      </Modal.Footer>
    </Modal>
  ),
};
