import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ALL_SKILLS } from "@/lib/constants/readers";
import { MultiSelect } from "./MultiSelect";
import { Box } from "@mui/material";

const meta = {
  title: "Inputs/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Skills",
    placeholder: "Select skills",
    options: ALL_SKILLS(),
  },
  render: (args) => (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.light,
        padding: 2,
      }}
    >
      <MultiSelect {...args} />
    </Box>
  ),
};
