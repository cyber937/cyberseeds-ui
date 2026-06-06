import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";
import { Button } from "../Button/Button";

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "Overlay/Popover",
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
    },
    align: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Anchored floating panel primitive. Compose `Popover.Trigger` and `Popover.Content`. " +
          "Auto-flips to a side with room, closes on outside click and Escape, and works controlled " +
          "(`open` / `onOpenChange`) or uncontrolled (`defaultOpen`). It's the base for `Menu`.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
      <Popover {...args}>
        <Popover.Trigger asChild>
          <Button>Open popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div style={{ maxWidth: 220 }} className="cs:space-y-1 cs:p-1">
            <p className="cs:text-sm cs:font-medium">Dimensions</p>
            <p className="cs:text-xs cs:text-gray-500 cs:dark:text-gray-400">
              Anchored to the trigger and dismissed on outside click or Escape.
            </p>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  ),
  args: { placement: "bottom", align: "center" },
};

export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, max-content)",
        gap: "3rem",
        padding: "5rem",
        justifyContent: "center",
      }}
    >
      {(["top", "bottom", "left", "right"] as const).map((placement) => (
        <Popover key={placement} placement={placement}>
          <Popover.Trigger asChild>
            <Button variant="secondary">{placement}</Button>
          </Popover.Trigger>
          <Popover.Content>
            <p className="cs:text-sm cs:p-1">Placed on {placement}</p>
          </Popover.Content>
        </Popover>
      ))}
    </div>
  ),
};

export const StartsOpen: Story = {
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
      <Popover {...args} defaultOpen>
        <Popover.Trigger asChild>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>
          <p className="cs:text-sm cs:p-1">Open on mount via defaultOpen.</p>
        </Popover.Content>
      </Popover>
    </div>
  ),
  args: { placement: "bottom", align: "start" },
};
