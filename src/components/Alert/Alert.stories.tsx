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
    children: "これはお知らせです。",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info">情報: システムメンテナンスのお知らせです。</Alert>
      <Alert variant="success">成功: データが正常に保存されました。</Alert>
      <Alert variant="warning">警告: ストレージ容量が残りわずかです。</Alert>
      <Alert variant="error">エラー: ネットワーク接続に失敗しました。</Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info" title="お知らせ">
        システムメンテナンスを予定しています。
      </Alert>
      <Alert variant="success" title="完了">
        データが正常に保存されました。
      </Alert>
      <Alert variant="warning" title="注意">
        ストレージ容量が残りわずかです。
      </Alert>
      <Alert variant="error" title="エラー">
        ネットワーク接続に失敗しました。再度お試しください。
      </Alert>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div className="cs:space-y-3">
      <Alert variant="info" closable onClose={() => alert("閉じました")}>
        閉じるボタン付きのアラートです。
      </Alert>
      <Alert variant="error" title="エラー" closable onClose={() => alert("閉じました")}>
        タイトル付きの閉じるボタンアラートです。
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
      <Alert variant="info" icon={false}>アイコンなしのアラートです。</Alert>
      <Alert variant="error" icon={false} title="エラー">
        アイコンなし + タイトル付きです。
      </Alert>
    </div>
  ),
};
