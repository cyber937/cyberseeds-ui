import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Switch } from "../Switch/Switch";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Overlay/Drawer",
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["right", "left", "top", "bottom"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({
  position = "right",
  size = "md",
}: {
  position?: React.ComponentProps<typeof Drawer>["position"];
  size?: React.ComponentProps<typeof Drawer>["size"];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer ({position})</Button>
      {open && (
        <Drawer position={position} size={size} onClose={() => setOpen(false)}>
          <Drawer.Header>Drawer from {position}</Drawer.Header>
          <Drawer.Body>
            <p className="cs:mb-3">
              Drawer reuses Modal&apos;s focus trap, Escape-to-close, and body-scroll lock.
              Tab cycles only within the drawer; closing restores focus to the trigger.
            </p>
            <div className="cs:flex cs:flex-col cs:gap-3">
              <Input label="Name" placeholder="Sam" />
              <Input label="Email" type="email" placeholder="sam@example.com" />
              <Switch onLabel="ON" offLabel="OFF" />
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </Drawer.Footer>
        </Drawer>
      )}
    </>
  );
};

export const Right: Story = { render: () => <Demo position="right" /> };
export const Left: Story = { render: () => <Demo position="left" /> };
export const Top: Story = { render: () => <Demo position="top" /> };
export const Bottom: Story = { render: () => <Demo position="bottom" /> };

export const Sizes: Story = {
  render: () => (
    <div className="cs:flex cs:flex-wrap cs:gap-2">
      {(["sm", "md", "lg", "xl"] as const).map((s) => (
        <Demo key={s} position="right" size={s} />
      ))}
    </div>
  ),
};

export const FilterPanel: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Filters</Button>
        {open && (
          <Drawer position="right" size="sm" onClose={() => setOpen(false)}>
            <Drawer.Header>Filters</Drawer.Header>
            <Drawer.Body>
              <div className="cs:flex cs:flex-col cs:gap-3">
                <Switch onLabel="Only items below reorder min" offLabel="All items" />
                <Switch onLabel="Show archived" offLabel="Hide archived" />
                <Input label="Tag" placeholder="Any tag" />
              </div>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="secondary">Reset</Button>
              <Button onClick={() => setOpen(false)}>Apply</Button>
            </Drawer.Footer>
          </Drawer>
        )}
      </>
    );
  },
};
