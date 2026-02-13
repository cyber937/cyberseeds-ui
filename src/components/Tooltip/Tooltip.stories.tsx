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
    content: "Tooltip content goes here",
    position: "top",
    children: <Button>Hover me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="cs:flex cs:flex-wrap cs:items-center cs:justify-center cs:gap-8 cs:py-16">
      <Tooltip content="Displayed above" position="top">
        <Button color="blue">Top</Button>
      </Tooltip>
      <Tooltip content="Displayed below" position="bottom">
        <Button color="green">Bottom</Button>
      </Tooltip>
      <Tooltip content="Displayed on left" position="left">
        <Button color="amber">Left</Button>
      </Tooltip>
      <Tooltip content="Displayed on right" position="right">
        <Button color="purple">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-3 cs:gap-4 cs:md:gap-6">
      <GroupBox label="No delay (0ms)">
        <Tooltip content="Shown instantly" delay={0}>
          <Button color="blue">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Default (300ms)">
        <Tooltip content="Shown after 300ms" delay={300}>
          <Button color="green">Hover</Button>
        </Tooltip>
      </GroupBox>
      <GroupBox label="Slow (1000ms)">
        <Tooltip content="Shown after 1 second" delay={1000}>
          <Button color="amber">Hover</Button>
        </Tooltip>
      </GroupBox>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <div className="cs:flex cs:items-center cs:justify-center cs:py-12">
      <Tooltip content="Press Ctrl+S to save">
        <Button color="blue">Save</Button>
      </Tooltip>
    </div>
  ),
};

export const AutoFlip: Story = {
  render: () => (
    <div style={{ position: "relative", height: "80vh", width: "100%" }}>
      <p className="cs:text-sm cs:text-gray-500 cs:text-center cs:py-2">
        Position is specified, but it auto-flips when near viewport edges.
      </p>
      {/* Top edge — position="top" should flip to bottom */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>
        <Tooltip content="top specified, flips to bottom" position="top">
          <Button color="blue">Top edge (top to bottom)</Button>
        </Tooltip>
      </div>
      {/* Bottom edge — position="bottom" should flip to top */}
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)" }}>
        <Tooltip content="bottom specified, flips to top" position="bottom">
          <Button color="green">Bottom edge (bottom to top)</Button>
        </Tooltip>
      </div>
      {/* Left edge — position="left" should flip to right */}
      <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}>
        <Tooltip content="left specified, flips to right" position="left">
          <Button color="amber">Left edge (left to right)</Button>
        </Tooltip>
      </div>
      {/* Right edge — position="right" should flip to left */}
      <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
        <Tooltip content="right specified, flips to left" position="right">
          <Button color="purple">Right edge (right to left)</Button>
        </Tooltip>
      </div>
      {/* Center — position="top" should stay as top */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Tooltip content="Enough space, displayed on top" position="top">
          <Button color="gray">Center (top stays top)</Button>
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
        On touch devices, tap to show/hide the tooltip. Tap outside to dismiss.
      </p>
      <div className="cs:flex cs:flex-wrap cs:justify-center cs:gap-8">
        <Tooltip content="Tap to show" position="bottom">
          <Button color="blue">Tap</Button>
        </Tooltip>
        <Tooltip content="Tap again to dismiss" position="bottom">
          <Button color="green">Toggle</Button>
        </Tooltip>
      </div>
    </div>
  ),
};
