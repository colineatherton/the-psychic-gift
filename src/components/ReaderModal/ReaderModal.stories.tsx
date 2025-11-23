import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReaderModal } from "./ReaderModal";
import { ReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import { ReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { READER_CONFIG_MAP } from "@/lib/constants/readers";
import { ReaderFeedItem } from "@/lib/types/readers";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { getTheme } from "@/app/theme";

// --- Helpers ---
const readerKeys = Object.keys(READER_CONFIG_MAP);
const defaultReaderKey = readerKeys[0];

function buildMockFeed(selectedPin: number): {
  readers: ReaderFeedItem[];
  isLoading: boolean;
  error: null;
  lastUpdated: Date;
  recentlyAvailable?: ReaderFeedItem;
  getReaderByPin: (pin: number) => ReaderFeedItem | undefined;
  getOnlineReaders: () => ReaderFeedItem[];
} {
  const mockReaders: ReaderFeedItem[] = [
    {
      id: selectedPin,
      displayName:
        READER_CONFIG_MAP[
          readerKeys.find((k) => READER_CONFIG_MAP[k].pin === selectedPin)!
        ].name,
      imageUrl: "",
      status: 1, // online
      callEndTime: null,
    },
    // A second offline reader (just for realism)
    {
      id: 9999,
      displayName: "Other Reader",
      imageUrl: "",
      status: 0,
      callEndTime: null,
    },
  ];
  return {
    readers: mockReaders,
    isLoading: false,
    error: null,
    lastUpdated: new Date(),
    recentlyAvailable: undefined,
    getReaderByPin: (pin) => mockReaders.find((r) => r.id === pin),
    getOnlineReaders: () => mockReaders.filter((r) => r.status === 1),
  };
}

// --- Decorator ---
const ModalDecorator = (Story: any, ctx: any) => {
  const readerKey: string = ctx.args.readerKey || defaultReaderKey;
  const config = READER_CONFIG_MAP[readerKey];
  const feedValue = buildMockFeed(config.pin);

  return (
    <ThemeProvider theme={getTheme("light")}>
      <CssBaseline />
      <ReaderFeedContext.Provider value={feedValue}>
        <ReaderSelectContext.Provider
          value={{
            readerModalOpen: true,
            readerConfig: config,
            handleChooseCallOptions: () => {},
            handleCloseReaderModal: () => {},
            handleFindYourPsychic: () => {},
          }}
        >
          <Story />
        </ReaderSelectContext.Provider>
      </ReaderFeedContext.Provider>
    </ThemeProvider>
  );
};

// --- Meta ---
const meta = {
  title: "Modals/ReaderModal",
  component: ReaderModal,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    readerKey: defaultReaderKey,
  },
  argTypes: {
    readerKey: {
      control: "select",
      options: readerKeys,
    },
  },
  decorators: [ModalDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof ReaderModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Stories ---
export const Default: Story = {};
