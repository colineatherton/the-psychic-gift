import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AppBar } from "./AppBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/AppBar",
  component: AppBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Foo: Story = {
  args: { onThemeToggle: () => {}, themeMode: "light" },
};
