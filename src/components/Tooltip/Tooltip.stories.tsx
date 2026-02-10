import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Overlay/Tooltip",
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    delay: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "ツールチップの内容です",
    position: "top",
    children: <Button>ホバーしてください</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="cs:flex cs:flex-wrap cs:items-center cs:justify-center cs:gap-8 cs:py-16">
      <Tooltip content="上に表示" position="top">
        <Button color="blue">Top</Button>
      </Tooltip>
      <Tooltip content="下に表示" position="bottom">
        <Button color="green">Bottom</Button>
      </Tooltip>
      <Tooltip content="左に表示" position="left">
        <Button color="amber">Left</Button>
      </Tooltip>
      <Tooltip content="右に表示" position="right">
        <Button color="purple">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4 cs:md:gap-6">
      <GroupBox label="No delay (0ms)">
        <Tooltip content="即座に表示" delay={0}>
          <Button color="blue">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Default (300ms)">
        <Tooltip content="300ms後に表示" delay={300}>
          <Button color="green">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Slow (1000ms)">
        <Tooltip content="1秒後に表示" delay={1000}>
          <Button color="amber">Hover</Button>
        </Tooltip>
      </GroupBox>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <div className="cs:flex cs:items-center cs:justify-center cs:py-12">
      <Tooltip content="Ctrl+S で保存できます">
        <Button color="blue">保存</Button>
      </Tooltip>
    </div>
  ),
};

export const AutoFlip: Story = {
  render: () => (
    <div style={{ position: "relative", height: "80vh", width: "100%" }}>
      <p className="cs:text-sm cs:text-gray-500 cs:text-center cs:py-2">
        position を指定していますが、ビューポート端に近い場合は自動的にフリップします。
      </p>
      {/* Top edge — position="top" should flip to bottom */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>
        <Tooltip content="top指定 → 下にフリップ" position="top">
          <Button color="blue">上端 (top→bottom)</Button>
        </Tooltip>
      </div>
      {/* Bottom edge — position="bottom" should flip to top */}
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)" }}>
        <Tooltip content="bottom指定 → 上にフリップ" position="bottom">
          <Button color="green">下端 (bottom→top)</Button>
        </Tooltip>
      </div>
      {/* Left edge — position="left" should flip to right */}
      <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}>
        <Tooltip content="left指定 → 右にフリップ" position="left">
          <Button color="amber">左端 (left→right)</Button>
        </Tooltip>
      </div>
      {/* Right edge — position="right" should flip to left */}
      <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
        <Tooltip content="right指定 → 左にフリップ" position="right">
          <Button color="purple">右端 (right→left)</Button>
        </Tooltip>
      </div>
      {/* Center — position="top" should stay as top */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Tooltip content="十分なスペースがあるので上に表示" position="top">
          <Button color="gray">中央 (top→top)</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const TouchToggle: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  render: () => (
    <div className="cs:space-y-8 cs:py-16 cs:text-center">
      <p className="cs:text-xs cs:text-gray-500">
        タッチデバイスではタップでツールチップを表示/非表示できます。外側をタップすると閉じます。
      </p>
      <div className="cs:flex cs:flex-wrap cs:justify-center cs:gap-8">
        <Tooltip content="タップで表示" position="bottom">
          <Button color="blue">タップ</Button>
        </Tooltip>
        <Tooltip content="もう一度タップで閉じます" position="bottom">
          <Button color="green">トグル</Button>
        </Tooltip>
      </div>
    </div>
  ),
};
