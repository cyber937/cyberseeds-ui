import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TagInput } from "./TagInput";

const meta: Meta<typeof TagInput> = {
  component: TagInput,
  title: "Form/TagInput",
  tags: ["autodocs"],
  argTypes: {
    scale: { control: { type: "radio" }, options: ["xs", "sm", "md", "lg"] },
    color: {
      control: { type: "select" },
      options: ["red", "amber", "green", "blue", "indigo", "violet", "pink", "gray"],
    },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Multi-value text input rendering chips. Type and press Enter or comma to " +
          "add; Backspace on an empty field removes the last; click × to remove. " +
          "Controlled or uncontrolled, with `dedupe` and `maxTags`.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [tags, setTags] = useState<string[]>(["cars", "trucks"]);
    return (
      <div style={{ width: 320 }}>
        <TagInput {...args} value={tags} onChange={setTags} />
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return (
      <div style={{ width: 320 }}>
        <TagInput value={tags} onChange={setTags} placeholder="Add categories…" />
      </div>
    );
  },
};

export const MaxThree: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(["a", "b"]);
    return (
      <div style={{ width: 320 }}>
        <TagInput value={tags} onChange={setTags} maxTags={3} color="violet" />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { defaultValue: ["locked", "tags"], disabled: true },
};

/** Form-validation error state: red border + `aria-invalid` on the input. */
export const Invalid: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return (
      <div style={{ width: 320 }}>
        <TagInput
          value={tags}
          onChange={setTags}
          isInvalid
          aria-describedby="tags-error"
          placeholder="Required — add at least one"
        />
        <p id="tags-error" role="alert" style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
          1件以上入力してください
        </p>
      </div>
    );
  },
};
