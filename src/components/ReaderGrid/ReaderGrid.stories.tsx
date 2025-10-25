import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ReaderGrid } from "./ReaderGrid";
import { useTheme } from "@mui/material";
import {
  READER_CARDS,
  ALL_SKILLS,
  ALL_ABILITIES,
  ALL_TOOLS,
  ALL_TOPICS,
} from "@/lib/constants/readers";
import { ReaderFeedProvider } from "@/lib/context/ReaderFeedContext";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ReaderGrid",
  component: ReaderGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ReaderGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    readers: READER_CARDS,
    allSkills: ALL_SKILLS(),
    allAbilities: ALL_ABILITIES(),
    allTools: ALL_TOOLS(),
    allTopics: ALL_TOPICS(),
  },
  render: (args) => {
    const theme = useTheme();
    return (
      <ReaderFeedProvider>
        <ReaderGrid {...args} />;
      </ReaderFeedProvider>
    );
  },
};
