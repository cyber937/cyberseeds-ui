import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavMenu } from "./NavMenu";
import { Badge } from "../Badge/Badge";

const meta: Meta<typeof NavMenu> = {
  component: NavMenu,
  title: "Layout/NavMenu",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal",
        "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink",
        "gray", "zinc", "neutral", "stone",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12L12 3l9 9" />
    <path d="M5 10v10h14V10" />
  </svg>
);

const ItemsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

export const Default: Story = {
  render: () => (
    <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu>
        <NavMenu.Item href="/" icon={<HomeIcon />} active>Dashboard</NavMenu.Item>
        <NavMenu.Item href="/items" icon={<ItemsIcon />}>Items</NavMenu.Item>
        <NavMenu.Item href="/settings" icon={<SettingsIcon />}>Settings</NavMenu.Item>
      </NavMenu>
    </div>
  ),
};

export const Sectioned: Story = {
  render: () => (
    <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu color="indigo">
        <NavMenu.Section title="Operations">
          <NavMenu.Item href="/" icon={<HomeIcon />}>Dashboard</NavMenu.Item>
          <NavMenu.Item href="/items" icon={<ItemsIcon />} active>Items</NavMenu.Item>
          <NavMenu.Item href="/movements" icon={<ItemsIcon />}>Movements</NavMenu.Item>
        </NavMenu.Section>
        <NavMenu.Section title="Admin">
          <NavMenu.Item href="/users" icon={<SettingsIcon />}>Users</NavMenu.Item>
          <NavMenu.Item href="/settings" icon={<SettingsIcon />}>Settings</NavMenu.Item>
        </NavMenu.Section>
      </NavMenu>
    </div>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu color="emerald">
        <NavMenu.Item href="/" icon={<HomeIcon />}>Dashboard</NavMenu.Item>
        <NavMenu.Item href="/items" icon={<ItemsIcon />} active trailing={<Badge variant="solid" color="red" scale="xs">3</Badge>}>
          Items
        </NavMenu.Item>
        <NavMenu.Item href="/inbox" icon={<SettingsIcon />} trailing={<Badge variant="solid" color="blue" scale="xs">12</Badge>}>
          Inbox
        </NavMenu.Item>
      </NavMenu>
    </div>
  ),
};

export const ButtonItems: Story = {
  render: () => (
    <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu>
        <NavMenu.Item icon={<HomeIcon />} onClick={() => alert("Home clicked")}>
          Dashboard
        </NavMenu.Item>
        <NavMenu.Item icon={<ItemsIcon />} active onClick={() => alert("Items clicked")}>
          Items
        </NavMenu.Item>
        <NavMenu.Item icon={<SettingsIcon />} disabled onClick={() => alert("won't fire")}>
          Settings (disabled)
        </NavMenu.Item>
      </NavMenu>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="cs:w-60 cs:p-3 cs:bg-white cs:dark:bg-gray-900 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700">
      <NavMenu>
        <NavMenu.Item href="/" icon={<HomeIcon />} active>Dashboard</NavMenu.Item>
        <NavMenu.Item href="/items" icon={<ItemsIcon />} disabled>Items (coming soon)</NavMenu.Item>
        <NavMenu.Item href="/settings" icon={<SettingsIcon />}>Settings</NavMenu.Item>
      </NavMenu>
    </div>
  ),
};
