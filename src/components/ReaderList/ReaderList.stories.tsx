import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { READER_CARDS } from "@/lib/constants/readers";
import { ReaderFeedProvider } from "@/lib/context/ReaderFeedContext";
import { useTheme } from "@mui/material";
import { ReaderList } from "./ReaderList";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ReaderList/ReaderList",
  component: ReaderList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ReaderList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    readers: READER_CARDS,
  },
  render: (args) => {
    const theme = useTheme();
    return (
      <ReaderFeedProvider>
        <ReaderList {...args} />
      </ReaderFeedProvider>
    );
  },
};
