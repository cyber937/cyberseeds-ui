import type { Meta, StoryObj } from "@storybook/react-vite";
import { UIColorProvider } from "../UIColorProvider/UIColorContext";
import { Button, type ButtonBaseProps } from "./Button";

/**
 * Button's public props are a discriminated union (`iconOnly` requires
 * `aria-label`), and `Meta<typeof Button>` collapses a union component to
 * `never`. Typing the stories against the widened shape keeps the controls
 * working; the union still guards real call sites.
 */
type ButtonArgs = ButtonBaseProps & {
  iconOnly?: boolean;
  "aria-label"?: string;
};

const meta: Meta<ButtonArgs> = {
  component: Button as React.FC<ButtonArgs>,
  title: "System/Button",
  tags: ["autodocs"],
  argTypes: {
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
  },
  render: (args) => (
    <Button {...(args as ButtonBaseProps)}>
      <Button.Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      </Button.Icon>
      Click
    </Button>
  ),
};

export const Color: Story = {
  render: () => (
    <div className="cs:space-y-4">
      <div className="cs:grid cs:grid-cols-2 cs:sm:grid-cols-3 cs:md:grid-cols-5 cs:gap-4 cs:md:gap-6">
        <Button color="red">Red</Button>
        <Button color="orange">Orange</Button>
        <Button color="amber">Amber</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="lime">Lime</Button>
        <Button color="green">Green</Button>
        <Button color="emerald">Emerald</Button>
        <Button color="teal">Teal</Button>
        <Button color="cyan">Cyan</Button>
        <Button color="sky">Sky</Button>
        <Button color="blue">Blue</Button>

        <Button color="indigo">Indigo</Button>
        <Button color="violet">Violet</Button>
        <Button color="purple">Purple</Button>
        <Button color="fuchsia">Fuchsia</Button>
        <Button color="pink">Pink</Button>
        <Button color="rose">Rose</Button>
        <Button color="slate">Slate</Button>
        <Button color="gray">Gray</Button>
        <Button color="zinc">Zinc</Button>
        <Button color="neutral">Neutral</Button>
        <Button color="stone">Stone</Button>
      </div>
    </div>
  ),
};

export const Scale: Story = {
  render: () => (
    <UIColorProvider initialColor="gray">
      <div className="cs:flex cs:flex-wrap cs:gap-4 cs:items-center">
        <Button scale="xs">XS</Button>
        <Button scale="sm">SM</Button>
        <Button>MD</Button>
        <Button scale="lg">LG</Button>
      </div>
    </UIColorProvider>
  ),
};

export function PrimaryAndSecondary() {
  return (
    <div className="cs:flex cs:flex-wrap cs:gap-4">
      <Button>
        <Button.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </Button.Icon>
        Click
      </Button>
      <Button variant="secondary">
        <Button.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </Button.Icon>
        Click
      </Button>
    </div>
  );
}

export const Disabled: Story = {
  args: {
    scale: "md",
    disabled: true,
    color: "red",
  },
  render: (args) => (
    <Button {...(args as ButtonBaseProps)}>
      <Button.Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      </Button.Icon>
      Click
    </Button >
  )
}

/** A trash-can glyph, sized by Button rather than by the caller. */
const TrashIcon = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

/**
 * `startIcon` / `endIcon` take the bare icon and size it from the button's
 * `scale`, so the two stay in step. Writing the icon as a child with
 * `className="h-4 w-4"` pins it, and it then stops matching when the button
 * grows or shrinks.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="cs:flex cs:flex-col cs:gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((scale) => (
        <div key={scale} className="cs:flex cs:gap-3 cs:items-center">
          <span className="cs:w-8 cs:text-xs cs:text-gray-500">{scale}</span>
          <Button scale={scale} startIcon={<TrashIcon />}>
            削除
          </Button>
          <Button scale={scale} variant="secondary" endIcon={<TrashIcon />}>
            次へ
          </Button>
        </div>
      ))}
    </div>
  ),
};

/**
 * `iconOnly` gives the button a square box instead of the pill padding, and
 * **requires `aria-label`** — TypeScript rejects the call without one.
 *
 * That requirement is the point: a button with no visible text is announced as
 * just "button" without it. An audit of the consuming app found 59 such
 * buttons with no accessible name at all.
 */
export const IconOnly: Story = {
  render: () => (
    <div className="cs:flex cs:gap-3 cs:items-center">
      {(["xs", "sm", "md", "lg"] as const).map((scale) => (
        <Button key={scale} iconOnly scale={scale} color="red" aria-label={`削除 (${scale})`}>
          <TrashIcon />
        </Button>
      ))}
      <Button iconOnly variant="secondary" aria-label="削除">
        <TrashIcon />
      </Button>
    </div>
  ),
};

export const AsChildLink: Story = {
  name: "asChild (render as <a>)",
  render: () => (
    <div className="cs:flex cs:gap-3 cs:items-center">
      <Button asChild>
        <a href="/items">Items page</a>
      </Button>
      <Button asChild variant="secondary">
        <a href="https://example.com" target="_blank" rel="noreferrer">
          External
        </a>
      </Button>
    </div>
  ),
};
