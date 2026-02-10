import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIColorProvider } from "../UIColorProvider/UIColorContext";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "System/Input",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
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
    isInvalid: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "emailaddress",
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: false,
    disabled: false,
  },

  render: (args) => (
    <UIColorProvider initialColor="gray">
      <Input {...args} />
    </UIColorProvider>
  ),
};

export const Require: Story = {
  args: {
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: true,
    isInvalid: false,
    disabled: false,
  },
};

export const Invalid: Story = {
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "メールアドレス",
    scale: "md",
    color: "blue",
    placeholder: "メールアドレス",
    require: false,
    isInvalid: false,
    disabled: true,
  },
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:md:grid-cols-4 cs:gap-4 cs:md:gap-6">
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Extra Small (xs)</p>
        <Input label="メール" scale="xs" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Input label="メール" scale="sm" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Input label="メール" scale="md" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Input label="メール" scale="lg" placeholder="example@email.com" />
      </div>
    </div>
  ),
};

export const MobileTouch: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  render: () => (
    <div className="cs:space-y-4">
      <p className="cs:text-xs cs:text-gray-500">
        モバイルではタッチターゲット44px以上・フォントサイズ16px（iOSズーム防止）が適用されます。
      </p>
      <Input label="メール" scale="xs" placeholder="extra small" />
      <Input label="メール" scale="sm" placeholder="small" />
      <Input label="メール" scale="md" placeholder="standard" />
      <Input label="メール" scale="lg" placeholder="large" />
    </div>
  ),
};
