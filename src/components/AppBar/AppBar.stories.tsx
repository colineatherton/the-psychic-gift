import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { useTheme } from "@mui/material";
import { AppBar } from "./AppBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Navigation/AppBar",
  component: AppBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onThemeToggle: () => {},
    themeMode: "light",
    onNavigate: () => {},
  },
  render: (args) => {
    const theme = useTheme();
    return (
      <div
        style={{
          width: "100%",
          height: "200vh",
          background: theme.palette.primary.main,
        }}
      >
        <AppBar {...args} />
      </div>
    );
  },
};

// light mode / dark mode
// scrolling example
