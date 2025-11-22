import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Readers } from "./Readers";

const meta = {
  title: "Sections/Readers",
  component: Readers,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Readers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
