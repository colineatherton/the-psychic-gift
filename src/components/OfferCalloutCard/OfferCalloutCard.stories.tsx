import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { OfferCalloutCard } from "./OfferCalloutCard";

const meta = {
  title: "Cards/OfferCalloutCard",
  component: OfferCalloutCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof OfferCalloutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an offer callout card",
  },
};
