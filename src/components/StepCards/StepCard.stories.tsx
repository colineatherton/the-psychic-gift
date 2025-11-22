import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { StepCard } from "./StepCard";
import { Box, Grid } from "@mui/material";
import { PrimaryCTAButton } from "../PrimaryCTAButton/PrimaryCTAButton";

const meta = {
  title: "Cards/StepCard",
  component: StepCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof StepCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
    title: "Choose your reader",
    body: "Browse through our selection of gifted psychic readers, each with their own unique abilities and specialties.",
    backgroundColor: "#E3F2FD",
    footer: (
      <PrimaryCTAButton
        label="Find Your Psychic"
        // mode="compact"
        onClick={() => undefined}
      />
    ),
  },
};
