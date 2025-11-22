import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InternalLinks } from "./InternalLinks";
import { homePageInternalLinks } from "@/lib/constants/internalLinks";

const meta = {
  title: "Sections/InternalLinks",
  component: InternalLinks,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InternalLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { links: homePageInternalLinks },
};
