import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../src/app/theme"; // adjust path if needed

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={getTheme("light")}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
