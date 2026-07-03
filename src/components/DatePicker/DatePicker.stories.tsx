import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "Form/DatePicker",
  tags: ["autodocs"],
  argTypes: {
    scale: { control: { type: "radio" }, options: ["xs", "sm", "md", "lg"] },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Single-date picker: a field trigger that opens a month calendar in a " +
          "`Popover` (so it escapes overflow containers and flips/shifts to stay on " +
          "screen). Controlled (`value` + `onChange`) or uncontrolled (`defaultValue`); " +
          "supports `min`/`max`, plus Today/Clear shortcuts.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    return <DatePicker {...args} value={date} onChange={setDate} />;
  },
};

export const WithInitialValue: Story = {
  args: { defaultValue: new Date(2026, 5, 15) },
};

export const WithMinMax: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date(2026, 5, 10));
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        min={new Date(2026, 5, 1)}
        max={new Date(2026, 5, 30)}
      />
    );
  },
};

export const Disabled: Story = {
  args: { defaultValue: new Date(2026, 5, 15), disabled: true },
};

/** Form-validation error state: red border + `aria-invalid` on the trigger. */
export const Invalid: Story = {
  args: {
    isInvalid: true,
    placeholder: "Required — pick a date",
    "aria-describedby": "date-error",
  },
  render: (args) => (
    <div>
      <DatePicker {...args} />
      <p id="date-error" role="alert" style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
        日付を選択してください
      </p>
    </div>
  ),
};
