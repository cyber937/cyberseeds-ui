import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";
import { ToastProvider, useToast } from "./ToastContext";
import { Button } from "../Button/Button";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: "Feedback/Toast",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    duration: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "info",
    children: "これはお知らせです。",
    onClose: () => {},
  },
};

export const Variants: Story = {
  render: () => (
    <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success" onClose={() => {}}>
        保存しました
      </Toast>
      <Toast variant="error" onClose={() => {}}>
        エラーが発生しました
      </Toast>
      <Toast variant="warning" onClose={() => {}}>
        注意が必要です
      </Toast>
      <Toast variant="info" onClose={() => {}}>
        お知らせがあります
      </Toast>
    </div>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-2 cs:gap-6">
      <GroupBox label="Extra Small (xs)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="xs" onClose={() => {}}>
            Extra Small サイズ
          </Toast>
          <Toast variant="error" scale="xs" onClose={() => {}}>
            Extra Small サイズ
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="sm" onClose={() => {}}>
            Small サイズ
          </Toast>
          <Toast variant="error" scale="sm" onClose={() => {}}>
            Small サイズ
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="md" onClose={() => {}}>
            Standard サイズ
          </Toast>
          <Toast variant="error" scale="md" onClose={() => {}}>
            Standard サイズ
          </Toast>
        </div>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <div className="cs:flex cs:flex-col cs:gap-3">
          <Toast variant="success" scale="lg" onClose={() => {}}>
            Large サイズ
          </Toast>
          <Toast variant="error" scale="lg" onClose={() => {}}>
            Large サイズ
          </Toast>
        </div>
      </GroupBox>
    </div>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <div className="cs:flex cs:flex-col cs:gap-3 cs:max-w-sm">
      <Toast variant="success">閉じるボタンなし</Toast>
      <Toast variant="info">自動消去のみ</Toast>
    </div>
  ),
};

function ToastDemo() {
  const toast = useToast();

  return (
    <div className="cs:flex cs:gap-2 cs:flex-wrap">
      <Button onClick={() => toast.success("保存しました！")} color="green">
        Success
      </Button>
      <Button onClick={() => toast.error("エラーが発生しました。")} color="red">
        Error
      </Button>
      <Button onClick={() => toast.warning("注意が必要です。")} color="amber">
        Warning
      </Button>
      <Button onClick={() => toast.info("お知らせがあります。")} color="blue">
        Info
      </Button>
    </div>
  );
}

export const ImperativeAPI: Story = {
  render: () => (
    <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
  ),
};

function PositionDemo({ position }: { position: any }) {
  const toast = useToast();
  return (
    <Button
      onClick={() => toast.success(`Position: ${position}`)}
      color="blue"
      scale="sm"
    >
      {position}
    </Button>
  );
}

export const Positions: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-3 cs:gap-2 cs:max-w-md">
      {(
        [
          "top-left",
          "top-center",
          "top-right",
          "bottom-left",
          "bottom-center",
          "bottom-right",
        ] as const
      ).map((pos) => (
        <ToastProvider key={pos} position={pos}>
          <PositionDemo position={pos} />
        </ToastProvider>
      ))}
    </div>
  ),
};
