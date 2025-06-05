import { AcademicCapIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "System/Button",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["sm", "md"],
    },
    color: {
      control: { type: "select" },
      options: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "gray",
        "zinc",
        "neutral",
        "stone",
      ],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: "md",
    variant: "secondary",
  },
  render: (args) => (
    <Button {...args}>
      <Button.Icon>
        <AcademicCapIcon />
      </Button.Icon>
      確認
    </Button>
  ),
};

export function Primary_Secondary() {
  return (
    <div className="flex gap-4">
      <Button>
        <Button.Icon>
          <AcademicCapIcon />
        </Button.Icon>
        確認
      </Button>

      <Button variant="secondary">
        <Button.Icon>
          <AcademicCapIcon />
        </Button.Icon>
        確認
      </Button>
    </div>
  );
}
