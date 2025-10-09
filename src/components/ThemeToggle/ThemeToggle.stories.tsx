import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ThemeToggle } from "./ThemeToggle";

const meta = {
  title: "Example/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
