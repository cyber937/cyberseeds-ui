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

export const StatCard: Story = {
  render: () => (
    <div className="cs:w-48">
      <Card>
        <Card.Stat label="Total Students" value={120} />
      </Card>
    </div>
  ),
};

export const StatCardWithSubText: Story = {
  render: () => (
    <div className="cs:w-48">
      <Card>
        <Card.Stat
          label="Inactive"
          value={5}
          subText="Withdrawn 4 / Graduated 1"
        />
      </Card>
    </div>
  ),
};

export const StatCardClickable: Story = {
  render: () => (
    <div className="cs:w-48">
      <Card>
        <Card.Stat
          label="Pending"
          value={15}
          onClick={() => alert("Clicked!")}
        />
      </Card>
    </div>
  ),
};

export const StatCardGrid: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-2 md:cs:grid-cols-5 cs:gap-4">
      <Card>
        <Card.Stat label="Total" value={25} subText="Withdrawn 4 / Graduated 1" />
      </Card>
      <Card bgColor="cs:bg-blue-50 cs:dark:bg-blue-950">
        <Card.Stat label="Submitted" value={10} labelColor="cs:text-blue-600" valueColor="cs:text-blue-800" />
      </Card>
      <Card bgColor="cs:bg-green-50 cs:dark:bg-green-950">
        <Card.Stat label="Approved" value={8} labelColor="cs:text-green-600" valueColor="cs:text-green-800" />
      </Card>
      <Card bgColor="cs:bg-gray-50 cs:dark:bg-gray-800">
        <Card.Stat label="Rejected" value={2} labelColor="cs:text-gray-600" valueColor="cs:text-gray-800" />
      </Card>
      <Card bgColor="cs:bg-amber-50 cs:dark:bg-amber-950">
        <Card.Stat label="Not Submitted" value={5} subText="Survey only" labelColor="cs:text-amber-600" valueColor="cs:text-amber-800" subTextColor="cs:text-amber-500" />
      </Card>
    </div>
  ),
};

export const StatCardScales: Story = {
  render: () => (
    <div className="cs:space-y-4">
      {(["xs", "sm", "md", "lg"] as const).map(scale => (
        <div key={scale} className="cs:w-48">
          <Card scale={scale}>
            <Card.Stat label={`Scale: ${scale}`} value={42} subText="Sub text" />
          </Card>
        </div>
      ))}
    </div>
  ),
};
