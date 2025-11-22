import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FeaturedReader } from "./FeaturedReader";

const meta = {
  title: "Sections/FeaturedReader",
  component: FeaturedReader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedReader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
