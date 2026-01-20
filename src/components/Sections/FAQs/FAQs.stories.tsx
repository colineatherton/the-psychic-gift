import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FAQs } from "./FAQs";
import { homePageFAQs } from "@/lib/constants/faqs/homePage";

const meta = {
  title: "Sections/FAQs",
  component: FAQs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { items: homePageFAQs },
};
