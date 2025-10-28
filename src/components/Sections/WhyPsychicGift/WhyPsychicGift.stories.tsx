import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WhyPsychicGift } from "./WhyPsychicGift";

const meta = {
  title: "Sections/WhyPsychicGift",
  component: WhyPsychicGift,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof WhyPsychicGift>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
