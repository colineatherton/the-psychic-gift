import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Testimonials } from "./Testimonials";

const meta = {
  title: "Sections/Testimonials",
  component: Testimonials,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
