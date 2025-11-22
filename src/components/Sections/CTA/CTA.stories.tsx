import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CTA } from "./CTA";
import { ReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { ReaderFeedItem } from "@/lib/types/readers";

const meta = {
  title: "Sections/CTA",
  component: CTA,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

function createStory(readers: ReaderFeedItem[], Story: React.FC) {
  const mockValue = {
    readers,
    isLoading: false,
    error: null,
    lastUpdated: new Date(),
    getReaderByPin: (pin: number) => readers.find((r) => r.id === pin),
    getOnlineReaders: () => readers.filter((r) => r.status === 1),
  };

  return (
    <ReaderFeedContext.Provider value={mockValue}>
      <Story />
    </ReaderFeedContext.Provider>
  );
}

export const Default: Story = {
  args: {
    heading: "Ready to speak to someone who truly listens?",
  },
  decorators: [
    (Story) => {
      const mockReaders: ReaderFeedItem[] = [
        {
          id: 1,
          status: 1,
          displayName: "Mock Reader 1",
          imageUrl: "",
          callEndTime: null,
        },
        {
          id: 2,
          status: 0,
          displayName: "Mock Reader 2",
          imageUrl: "",
          callEndTime: null,
        },
      ];

      return createStory(mockReaders, Story);
    },
  ],
};

export const MultipleAvailableReaderCTA: Story = {
  args: {
    heading: "Ready to speak to someone who truly listens?",
  },
  decorators: [
    (Story) => {
      const mockReaders: ReaderFeedItem[] = [
        {
          id: 1,
          status: 1,
          displayName: "Mock Reader 1",
          imageUrl: "",
          callEndTime: null,
        },
        {
          id: 2,
          status: 1,
          displayName: "Mock Reader 2",
          imageUrl: "",
          callEndTime: null,
        },
        {
          id: 3,
          status: 1,
          displayName: "Mock Reader 3",
          imageUrl: "",
          callEndTime: null,
        },
      ];

      return createStory(mockReaders, Story);
    },
  ],
};

export const SingleAvailableReaderCTA: Story = {
  args: {
    heading: "Ready to speak to someone who truly listens?",
  },
  decorators: [
    (Story) => {
      const mockReaders: ReaderFeedItem[] = [
        {
          id: 1,
          status: 1,
          displayName: "Mock Reader 1",
          imageUrl: "",
          callEndTime: null,
        },
      ];

      return createStory(mockReaders, Story);
    },
  ],
};

export const NoAvailableReadersCTA: Story = {
  args: {
    heading: "Ready to speak to someone who truly listens?",
  },
  decorators: [
    (Story) => {
      const mockReaders: ReaderFeedItem[] = [];

      return createStory(mockReaders, Story);
    },
  ],
};
