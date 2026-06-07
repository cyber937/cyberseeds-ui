import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./Menu";
import { Button } from "../Button/Button";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Overlay/Menu",
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
    closeOnSelect: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Action menu built on `Popover`, following the WAI-ARIA menu pattern. Trigger gets " +
          "`aria-haspopup=\"menu\"`; the panel is `role=\"menu\"` with `Menu.Item` (`menuitem`), " +
          "`Menu.Label`, and `Menu.Separator`. Arrow keys roam items, Enter/Space selects, Escape " +
          "closes. Selecting an item closes the menu unless `closeOnSelect={false}`.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
      <Menu {...args}>
        <Menu.Trigger asChild>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Item onSelect={() => {}}>Edit</Menu.Item>
          <Menu.Item onSelect={() => {}}>Duplicate</Menu.Item>
          <Menu.Item onSelect={() => {}} disabled>
            Archive
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  ),
  args: { placement: "bottom", align: "start", closeOnSelect: true },
};

export const WithGroupsAndDestructive: Story = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
      <Menu>
        <Menu.Trigger asChild>
          <Button variant="secondary">SKU-1234 ▾</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Row actions">
          <Menu.Label>Manage</Menu.Label>
          <Menu.Item icon={<span aria-hidden>✏️</span>} onSelect={() => {}}>
            Edit details
          </Menu.Item>
          <Menu.Item icon={<span aria-hidden>📄</span>} onSelect={() => {}}>
            Export row
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item
            icon={<span aria-hidden>🗑️</span>}
            destructive
            onSelect={() => {}}
          >
            Delete
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
      <Menu>
        <Menu.Trigger asChild>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Item onSelect={() => {}}>Edit</Menu.Item>
          <Menu.Sub label="Move to">
            <Menu.Item onSelect={() => {}}>Warehouse A</Menu.Item>
            <Menu.Item onSelect={() => {}}>Warehouse B</Menu.Item>
            <Menu.Sub label="Regions">
              <Menu.Item onSelect={() => {}}>West</Menu.Item>
              <Menu.Item onSelect={() => {}}>East</Menu.Item>
            </Menu.Sub>
          </Menu.Sub>
          <Menu.Separator />
          <Menu.Item destructive onSelect={() => {}}>
            Delete
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  ),
};

export const StartsOpen: Story = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
      <Menu defaultOpen>
        <Menu.Trigger asChild>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content aria-label="Item actions">
          <Menu.Item onSelect={() => {}}>Receive</Menu.Item>
          <Menu.Item onSelect={() => {}}>Sell</Menu.Item>
          <Menu.Item onSelect={() => {}}>Adjust</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  ),
};
