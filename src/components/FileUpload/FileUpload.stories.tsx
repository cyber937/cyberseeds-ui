import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
  title: "Form/FileUpload",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    multiple: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Drag-and-drop file picker with click-to-browse, a selected-file list with remove " +
          "buttons, and `accept` / `maxSize` validation (rejections surface via `onReject`). " +
          "Works controlled (`value` + `onChange`) or uncontrolled.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithHint: Story = {
  args: {
    label: "Click to choose an .xlsx file or drag it here",
    hint: "Up to 50 MB. Sheet defaults to “Inventory Export”.",
    accept: ".xlsx",
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    label: "Drop files here or click to browse",
    hint: "Add as many as you like",
  },
};

export const RestrictedTypeAndSize: Story = {
  args: {
    accept: ".csv,.xlsx",
    maxSize: 5 * 1024 * 1024,
    label: "CSV or XLSX only",
    hint: "Max 5 MB per file",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Uploads are disabled",
  },
};

/** Form-validation error state: red dropzone border + `aria-invalid`. */
export const Invalid: Story = {
  args: {
    isInvalid: true,
    label: "Required — attach at least one file",
    "aria-describedby": "file-error",
  },
  render: (args) => (
    <div>
      <FileUpload {...args} />
      <p id="file-error" role="alert" style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
        ファイルを選択してください
      </p>
    </div>
  ),
};
