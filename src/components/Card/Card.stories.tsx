import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Layout/Card",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Body>
        Simple card content.
      </Card.Body>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card>
      <Card.Header>Card Title</Card.Header>
      <Card.Body>
        Card body content. This layout uses a header and footer.
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">Cancel</Button>
        <Button scale="sm">Save</Button>
      </Card.Footer>
    </Card>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => (
        <Card key={scale} scale={scale}>
          <Card.Header>Scale: {scale}</Card.Header>
          <Card.Body>Padding is {scale} size.</Card.Body>
        </Card>
      ))}
    </div>
  ),
};

export const WithoutBorder: Story = {
  render: () => (
    <Card bordered={false}>
      <Card.Body>Card without border.</Card.Body>
    </Card>
  ),
};

export const WithoutShadow: Story = {
  render: () => (
    <Card shadow={false}>
      <Card.Body>Card without shadow.</Card.Body>
    </Card>
  ),
};

export const Composed: Story = {
  render: () => (
    <Card>
      <Card.Header>User Registration</Card.Header>
      <Card.Body>
        <div className="cs:space-y-3">
          <Input label="Name" placeholder="John Doe" />
          <Input label="Email Address" placeholder="example@mail.com" />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" scale="sm">Cancel</Button>
        <Button scale="sm" color="green">Register</Button>
      </Card.Footer>
    </Card>
  ),
};
