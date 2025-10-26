import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IconToggle } from "./IconToggle";
import { themeIcons } from "../AppBar/AppBar";

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
    iconList: themeIcons,
  },
};
