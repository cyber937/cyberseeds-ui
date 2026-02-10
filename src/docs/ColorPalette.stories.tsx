import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../components/Badge/Badge";
import { Button } from "../components/Button/Button";
import { Checkbox } from "../components/Checkbox/Checkbox";
import type { CustomColor, PresetColor } from "../components/DesignSystemUtils";
import { PillBox } from "../components/PillBox/PillBox";
import { Progress } from "../components/Progress/Progress";
import { Spinner } from "../components/Spinner/Spinner";
import { Switch } from "../components/Switch/Switch";
import { UIColorProvider } from "../components/UIColorProvider/UIColorContext";

const PRESET_COLORS: PresetColor[] = [
  "red", "orange", "amber", "yellow",
  "lime", "green", "emerald", "teal",
  "cyan", "sky", "blue", "indigo",
  "violet", "purple", "fuchsia",
  "pink", "rose",
  "slate", "gray", "zinc", "neutral", "stone",
];

function ColorSwatch({ color }: { color: PresetColor }) {
  return (
    <UIColorProvider initialColor={color}>
      <div className="cs:flex cs:flex-col cs:gap-2 cs:items-center cs:p-3 cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700">
        <Button scale="sm">{color}</Button>
        <div className="cs:flex cs:gap-1 cs:items-center">
          <PillBox label={color} scale="xs" />
          <Badge scale="xs">1</Badge>
        </div>
        <Progress value={65} scale="sm" />
        <div className="cs:flex cs:gap-2 cs:items-center">
          <Checkbox scale="sm" defaultChecked />
          <Switch scale="sm" checked />
          <Spinner scale="xs" />
        </div>
      </div>
    </UIColorProvider>
  );
}

function AllPresetColors() {
  return (
    <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-4 cs:gap-3 cs:max-w-4xl">
      {PRESET_COLORS.map((color) => (
        <ColorSwatch key={color} color={color} />
      ))}
    </div>
  );
}

function CustomColorDemo() {
  const brand: CustomColor = {
    base: "#4f46e5",
    hover: "#4338ca",
    active: "#3730a3",
    focus: "#4f46e5",
    light: "#e0e7ff",
    lightText: "#312e81",
    border: "#a5b4fc",
  };

  const coral: CustomColor = {
    base: "#f97066",
    hover: "#ef4444",
    active: "#dc2626",
    focus: "#f97066",
    light: "#fef2f2",
    lightText: "#991b1b",
    border: "#fca5a5",
  };

  const autoShaded: CustomColor = { base: "#8b5cf6" };

  return (
    <div className="cs:flex cs:gap-4 cs:flex-wrap">
      {[
        { name: "Brand (full)", color: brand },
        { name: "Coral (full)", color: coral },
        { name: "Auto-shaded", color: autoShaded },
      ].map(({ name, color }) => (
        <UIColorProvider key={name} initialColor={color}>
          <div className="cs:flex cs:flex-col cs:gap-2 cs:items-center cs:p-4 cs:rounded-lg cs:border cs:border-gray-200 cs:dark:border-gray-700">
            <span className="cs:text-sm cs:font-medium cs:text-gray-600 cs:dark:text-gray-400">
              {name}
            </span>
            <Button>{name}</Button>
            <PillBox label={name} />
            <Progress value={70} scale="sm" />
            <div className="cs:flex cs:gap-2">
              <Checkbox defaultChecked />
              <Switch checked />
            </div>
          </div>
        </UIColorProvider>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Foundations/Color Palette",
};

export default meta;

export const PresetColors: StoryObj = {
  render: () => <AllPresetColors />,
};

export const CustomColors: StoryObj = {
  render: () => <CustomColorDemo />,
};
