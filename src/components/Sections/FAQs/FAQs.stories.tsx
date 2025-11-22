import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FAQsSection } from "./FAQs";
import { homePageFAQs } from "@/lib/constants/faqs/homePage";

const meta = {
  title: "Sections/FAQsSection",
  component: FAQsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { items: homePageFAQs },
};
