import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIColorProvider } from "./UIColorContext";
import { Button } from "../Button/Button";
import { Switch } from "../Switch/Switch";
import { Badge } from "../Badge/Badge";
import { Progress } from "../Progress/Progress";

const PRESET_COLORS = [
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal",
  "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink",
  "rose", "gray", "zinc", "neutral", "stone", "slate",
];

const meta: Meta<typeof UIColorProvider> = {
  component: UIColorProvider,
  title: "Foundations/UIColorProvider",
  tags: ["autodocs"],
  argTypes: {
    initialColor: {
      control: { type: "select" },
      options: PRESET_COLORS,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Provides a global color to every descendant component via context. " +
          "Children that accept a `color` prop inherit `initialColor` unless they set their own. " +
          "Accepts preset color names, custom color objects, or semantic names, plus an optional " +
          "`darkColor` and `semanticColors` override map.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample controls that all read their color from context.
function Swatch() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 320 }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Badge variant="solid">9</Badge>
      </div>
      <Switch checked onLabel="On" offLabel="Off" />
      <Progress value={66} label="Sync" showValue />
    </div>
  );
}

export const Default: Story = {
  render: (args) => (
    <UIColorProvider {...args}>
      <Swatch />
    </UIColorProvider>
  ),
  args: { initialColor: "blue" },
};

export const Violet: Story = {
  render: (args) => (
    <UIColorProvider {...args}>
      <Swatch />
    </UIColorProvider>
  ),
  args: { initialColor: "violet" },
};

export const CustomColorObject: Story = {
  render: () => (
    <UIColorProvider initialColor={{ base: "#0ea5e9" }}>
      <Swatch />
    </UIColorProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A custom color object (`{ base }`) auto-generates the hover / active / focus shades " +
          "in OKLCH space — no need to supply a full palette.",
      },
    },
  },
};
