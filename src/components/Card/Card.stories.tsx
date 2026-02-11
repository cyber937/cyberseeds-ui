import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Layout/Card",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Body>
        シンプルなカードコンテンツです。
      </Card.Body>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card>
      <Card.Header>カードタイトル</Card.Header>
      <Card.Body>
        カードの本文コンテンツです。ヘッダーとフッター付きのレイアウトを使用しています。
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">キャンセル</Button>
        <Button scale="sm">保存</Button>
      </Card.Footer>
    </Card>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => (
        <Card key={scale} scale={scale}>
          <Card.Header>Scale: {scale}</Card.Header>
          <Card.Body>パディングが {scale} サイズです。</Card.Body>
        </Card>
      ))}
    </div>
  ),
};

export const WithoutBorder: Story = {
  render: () => (
    <Card bordered={false}>
      <Card.Body>ボーダーなしのカードです。</Card.Body>
    </Card>
  ),
};

export const WithoutShadow: Story = {
  render: () => (
    <Card shadow={false}>
      <Card.Body>シャドウなしのカードです。</Card.Body>
    </Card>
  ),
};

export const Composed: Story = {
  render: () => (
    <Card>
      <Card.Header>ユーザー登録</Card.Header>
      <Card.Body>
        <div className="cs:space-y-3">
          <Input label="名前" placeholder="山田太郎" />
          <Input label="メールアドレス" placeholder="example@mail.com" />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">キャンセル</Button>
        <Button scale="sm" color="green">登録</Button>
      </Card.Footer>
    </Card>
  ),
};
