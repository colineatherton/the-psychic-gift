import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FeatureCard } from "./FeatureCard";
import { Box, Grid } from "@mui/material";

const meta = {
  title: "Cards/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/icons/hands-heart.png",
    title: "Trusted by Thousands",
    body: "We’ve supported countless callers through love, life, and difficult decisions. All calls are confidential and recorded for your peace of mind.",
  },
};

export const FeatureCardGrid: Story = {
  args: {
    src: "/icons/hands-heart.png",
    title: "Trusted by Thousands",
    body: "We’ve supported countless callers through love, life, and difficult decisions. All calls are confidential and recorded for your peace of mind.",
  },
  render: () => (
    <Box sx={{ height: "100vh", padding: 4 }}>
      <Grid container spacing={4} width={"100%"} mb={6}>
        <Grid size={4}>
          <FeatureCard
            src="/icons/crystal-ball.png"
            title="Founded on a Family Legacy"
            body="Started by John and inspired by his grandmother’s own psychic gifts,
                our story is personal — not corporate."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/stars.png"
            title="Hand-Picked, Gifted Psychics"
            body="Each reader is tested, verified, and chosen for their experience,
                empathy, and integrity."
          />
        </Grid>
        <Grid size={4}>
          <FeatureCard
            src="/icons/hands-heart.png"
            title="Trusted by Thousands"
            body="We’ve supported countless callers through love, life, and difficult
            decisions. All calls are confidential and recorded for your peace of
            mind."
          />
        </Grid>
      </Grid>
    </Box>
  ),
};
