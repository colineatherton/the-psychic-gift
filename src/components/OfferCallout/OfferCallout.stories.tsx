import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { OfferCallout } from "./OfferCallout";

const meta = {
  title: "Cards/OfferCallout",
  component: OfferCallout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof OfferCallout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
