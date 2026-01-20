import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { READER_CARDS } from "@/lib/constants/readers";
import { ReaderListItem } from "./ReaderListItem";

const meta = {
  title: "Cards/ReaderListItem",
  component: ReaderListItem,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ReaderListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...READER_CARDS[0],
    onChooseCallOptions: () => undefined,
  },
  render: (args) => {
    return <ReaderListItem {...args} />;
  },
};
