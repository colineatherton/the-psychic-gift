import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HoverMenu } from "./HoverMenu";
import { Button, useTheme } from "@mui/material";

const meta = {
  title: "Inputs/HoverMenu",
  component: HoverMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof HoverMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    TriggerEl: <Button>Hover over me</Button>,
    items: [
      { label: "Item 1", onClick: () => console.log("Item 1 clicked") },
      { label: "Item 2", onClick: () => console.log("Item 2 clicked") },
    ],
    gap: 0,
    delay: 200,
  },
};
