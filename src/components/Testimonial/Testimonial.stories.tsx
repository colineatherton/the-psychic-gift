import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Testimonial } from "./Testimonial";
import { Grid } from "@mui/material";

const meta = {
  title: "Cards/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    clientName: "Keith",
    quote:
      "This guy is the real deal! Accurate, compassionate, and truly gifted.",
    reader: "Mystic Maya",
    pin: "1234",
  },
  render: (args) => (
    <Grid container justifyContent="center" padding={4}>
      <Grid size={4}>
        <Testimonial {...args} />
      </Grid>
    </Grid>
  ),
};
