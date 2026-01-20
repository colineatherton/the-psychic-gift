import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { READER_CARDS } from "@/lib/constants/readers";
import { Grid } from "@mui/material";
import { ReaderCard } from "./ReaderCard";

const meta = {
  title: "Cards/ReaderCard",
  component: ReaderCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ReaderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...READER_CARDS[0],
    onChooseCallOptions: () => undefined,
  },
  render: (args) => {
    return (
      <Grid container width="100%" justifyContent={"center"}>
        <Grid size={{ xs: 6 }}>
          <ReaderCard {...args} />
        </Grid>
      </Grid>
    );
  },
};

export const Compact: Story = {
  args: {
    ...READER_CARDS[0],
    onChooseCallOptions: () => undefined,
  },
  render: (args) => {
    return (
      <Grid container width="100%">
        <Grid size={{ xs: 6 }} sx={{ width: "100%" }}>
          <ReaderCard {...args} mode="compact" />
        </Grid>
      </Grid>
    );
  },
};

export const Featured: Story = {
  args: {
    ...READER_CARDS[0],
    onChooseCallOptions: () => undefined,
  },
  render: (args) => {
    return (
      <Grid container width="100%">
        <Grid size={{ xs: 6 }} sx={{ width: "100%" }}>
          <ReaderCard {...args} mode="featured" />
        </Grid>
      </Grid>
    );
  },
};
