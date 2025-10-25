import "../src/app/globals.css";
import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { getTheme } from "../src/app/theme"; // adjust path if needed
import { useMemo, useState } from "react";
import { IconToggle } from "../src/components";
import { themeIcons } from "../src/components/AppBar/AppBar";

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
    (Story) => {
      const [mode, setMode] = useState<"light" | "dark">("light");

      const theme = useMemo(() => getTheme(mode), [mode]);

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ position: "fixed", top: 16, right: 16, zIndex: 1 }}>
            <IconToggle
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              initial={mode}
              iconList={themeIcons}
            />
          </Box>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
