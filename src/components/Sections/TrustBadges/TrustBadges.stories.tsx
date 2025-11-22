import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TrustBadges } from "./TrustBadges";

const meta = {
  title: "Sections/TrustBadges",
  component: TrustBadges,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TrustBadges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
