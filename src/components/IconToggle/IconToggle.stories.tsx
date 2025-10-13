import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IconToggle } from "./IconToggle";

const meta = {
  title: "Example/IconToggle",
  component: IconToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof IconToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initial: "light",
    iconList: [
      {
        id: "light",
        label: "Light mode",
        color: "#F5C78C", // should prob be the light palette main
        icon: "☀️",
      },
      {
        id: "dark",
        label: "Dark mode",
        color: "#745ddd", // should prob be the dark palette main
        icon: "🌙",
      },
    ],
  },
};
