"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    status: {
      online: string;
      busy: string;
      offline: string;
    };
    accent: {
      primary: string;
    };
  }
  interface PaletteOptions {
    status?: {
      online?: string;
      busy?: string;
      offline?: string;
    };
    accent?: {
      primary?: string;
    };
  }
}

const darkPurple = "#745ddd";
// const darkPurple = "#483c7b";
const midPurple = "#8174bb";
const lightPurple = "#a99fd1";
const lightGrey = "#f8f7ff";
const midGrey = "#7a8486";
const darkGrey = "#274149";

export const lightPalette = {
  mode: "light" as const,
  primary: {
    main: lightPurple,
    light: lightGrey,
    // dark: midPurple,
    dark: darkPurple,
  },
  secondary: {
    main: midGrey,
    light: lightGrey,
    dark: darkGrey,
  },
  background: {
    default: lightGrey,
    paper: "#fff",
  },
  text: { primary: darkGrey, secondary: lightGrey },

  // text: { primary: "#000" },
};

export const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: darkPurple, // #a99fd1, lighter purple for accents
    light: "#d1c7ee", // even lighter for hover/active
    dark: darkPurple, // #745ddd, for contrast
  },
  secondary: {
    main: "#b0bec5", // soft grey-blue for secondary accents
    light: "#cfd8dc",
    dark: "#78909c",
  },
  background: {
    default: "#18122B", // deep purple/black for main background
    paper: "#232042", // slightly lighter for cards/panels
  },
  text: {
    primary: "#f8f7ff", // very light for main text
    secondary: "#a99fd1", // your light purple for secondary text
  },
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function getTheme(mode: "light" | "dark" = "light") {
  const palette = mode === "dark" ? darkPalette : lightPalette;
  return createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    palette: {
      ...palette,
      common: {
        white: common.white,
        black: common.black,
      },
      status: {
        online: "#00c853",
        busy: "#ffa000",
        offline: "#b0bec5",
      },
      accent: {
        // primary: "#ffaf01", // classic gold
        primary: "#b29434", // classic gold
      },
    },
  });
}

const theme = getTheme("light");
export default theme;
