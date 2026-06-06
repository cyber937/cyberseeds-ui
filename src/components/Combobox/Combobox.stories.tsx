import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Combobox, type ComboboxOption } from "./Combobox";

const meta: Meta<typeof Combobox> = {
  title: "Form/Combobox",
  component: Combobox,
  parameters: { layout: "padded" },
  argTypes: {
    scale: { control: "select", options: ["xs", "sm", "md", "lg"] },
    isInvalid: { control: "boolean" },
    disabled: { control: "boolean" },
    clearable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const FRUITS: ComboboxOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
  { value: "honeydew", label: "Honeydew" },
  { value: "kiwi", label: "Kiwi" },
  { value: "lemon", label: "Lemon" },
  { value: "mango", label: "Mango" },
  { value: "nectarine", label: "Nectarine" },
  { value: "orange", label: "Orange" },
  { value: "papaya", label: "Papaya" },
];

export const Primary: Story = {
  args: { options: FRUITS, placeholder: "Pick a fruit" },
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    return <Combobox {...args} value={value} onChange={setValue} />;
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: FRUITS,
    defaultValue: "banana",
    placeholder: "Pick a fruit",
  },
};

export const Disabled: Story = {
  args: {
    options: FRUITS,
    defaultValue: "apple",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: { options: FRUITS, isInvalid: true, placeholder: "Required" },
};

export const NotClearable: Story = {
  args: {
    options: FRUITS,
    defaultValue: "grape",
    clearable: false,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "active", label: "Active" },
      { value: "discontinued", label: "Discontinued", disabled: true },
      { value: "clearance", label: "Clearance" },
    ],
    placeholder: "Pick a status",
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    options: FRUITS,
    emptyMessage: "No fruits match — try harder.",
    placeholder: "Type something weird",
  },
};

export const CustomFilter: Story = {
  args: {
    options: FRUITS,
    placeholder: "Starts-with filter",
    filter: (option, search) =>
      option.label.toLowerCase().startsWith(search.toLowerCase()),
  },
};

export const LongList: Story = {
  args: {
    options: Array.from({ length: 200 }, (_, i) => ({
      value: `sku-${i}`,
      label: `SKU-${String(i).padStart(4, "0")}`,
    })),
    placeholder: "200 SKUs",
  },
};

export const Scales: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-sm">
      {(["xs", "sm", "md", "lg"] as const).map((scale) => (
        <div key={scale}>
          <p className="mb-1 text-xs text-slate-500">scale="{scale}"</p>
          <Combobox options={FRUITS} scale={scale} placeholder={scale} />
        </div>
      ))}
    </div>
  ),
};
