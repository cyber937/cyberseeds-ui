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
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
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
    placeholder: "Email Address",
    require: true,
    isInvalid: false,
    disabled: false,
  },
};

export const Invalid: Story = {
  args: {
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
    require: false,
    isInvalid: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Email Address",
    scale: "md",
    color: "blue",
    placeholder: "Email Address",
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
        <Input label="Email" scale="xs" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Small (sm)</p>
        <Input label="Email" scale="sm" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Standard (md)</p>
        <Input label="Email" scale="md" placeholder="example@email.com" />
      </div>
      <div>
        <p className="cs:text-xs cs:text-gray-500 cs:mb-2">Large (lg)</p>
        <Input label="Email" scale="lg" placeholder="example@email.com" />
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
        On mobile, touch targets of 44px+ and font size 16px (to prevent iOS zoom) are applied.
      </p>
      <Input label="Email" scale="xs" placeholder="extra small" />
      <Input label="Email" scale="sm" placeholder="small" />
      <Input label="Email" scale="md" placeholder="standard" />
      <Input label="Email" scale="lg" placeholder="large" />
    </div>
  ),
};

/**
 * `startIcon` は装飾なのでクリックが入力欄に抜ける。`endIcon` は操作できるので
 * クリアボタンなどを置ける。アイコンを渡さない限り DOM は増えない。
 */
export const WithIcons: Story = {
  render: () => (
    <div className="cs:space-y-4 cs:max-w-sm">
      <Input
        placeholder="検索"
        startIcon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        }
        endIcon={
          <button type="button" aria-label="検索条件をクリア" className="cs:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        }
      />
      <Input
        label="金額"
        scale="sm"
        placeholder="0"
        startIcon={<span className="cs:text-xs">¥</span>}
      />
    </div>
  ),
};
