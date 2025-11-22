import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TrustBadge } from "./TrustBadge";

const meta = {
  title: "Badges/TrustBadge",
  component: TrustBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TrustBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReadingsGiven: Story = {
  args: {
    src: "readings-given.png",
  },
};

export const Established: Story = {
  args: {
    src: "est-2002.png",
  },
};

export const SatisfactionGuarantee: Story = {
  args: {
    src: "satisfaction-guarantee-2.png",
  },
};
