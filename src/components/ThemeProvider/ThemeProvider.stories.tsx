import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./useTheme";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { Card } from "../Card/Card";

const meta: Meta<typeof ThemeProvider> = {
  component: ThemeProvider,
  title: "Foundations/ThemeProvider",
  tags: ["autodocs"],
  argTypes: {
    defaultMode: {
      control: { type: "radio" },
      options: ["light", "dark", "system"],
    },
    mode: {
      control: { type: "radio" },
      options: [undefined, "light", "dark", "system"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Wraps a subtree and applies a `.dark` class when the resolved theme is dark. " +
          "Use `defaultMode` for uncontrolled mode (`light` | `dark` | `system`), or `mode` " +
          "for a fully controlled value. Children read `{ mode, setMode, resolvedTheme }` via `useTheme()`.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// A small dashboard preview wired to `useTheme()` so the mode buttons
// actually drive the surrounding `.dark` class.
function ThemedPreview() {
  const { mode, setMode, resolvedTheme } = useTheme();
  const modes = ["light", "dark", "system"] as const;

  return (
    <div className="cs:bg-white cs:dark:bg-gray-900 cs:rounded-lg cs:p-6 cs:space-y-4 cs:transition-colors">
      <div className="cs:flex cs:items-center cs:gap-2">
        {modes.map((m) => (
          <Button
            key={m}
            scale="sm"
            variant={mode === m ? "primary" : "secondary"}
            onClick={() => setMode(m)}
          >
            {m}
          </Button>
        ))}
        <Badge variant="solid" color="blue">
          {resolvedTheme}
        </Badge>
      </div>

      <Card>
        <Card.Header>Theme preview</Card.Header>
        <Card.Body>
          <p className="cs:text-gray-900 cs:dark:text-gray-200">
            Current mode: <strong>{mode}</strong> — resolves to{" "}
            <strong>{resolvedTheme}</strong>.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export const Default: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemedPreview />
    </ThemeProvider>
  ),
  args: { defaultMode: "system" },
};

export const StartsDark: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemedPreview />
    </ThemeProvider>
  ),
  args: { defaultMode: "dark" },
};
