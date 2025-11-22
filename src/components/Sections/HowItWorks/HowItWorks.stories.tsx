import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HowItWorks } from "./HowItWorks";

const meta = {
  title: "Sections/HowItWorks",
  component: HowItWorks,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
