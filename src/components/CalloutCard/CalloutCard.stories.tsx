import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CalloutCard } from "./CalloutCard";

const meta = {
  title: "Cards/CalloutCard",
  component: CalloutCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof CalloutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an offer callout card",
  },
};
