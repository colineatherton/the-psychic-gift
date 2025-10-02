"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      online: string;
      busy: string;
      offline: string;
    };
  }
  interface ThemeOptions {
    status?: {
      online?: string;
      busy?: string;
      offline?: string;
    };
  }
}

const darkPurple = "#745ddd";
const midPurple = "#8174bb";
const lightPurple = "#a99fd1";
const lightGrey = "#f8f7ff";
const midGrey = "#7a8486";
const darkGrey = "#274149";

const lightPalette = {
  mode: "light" as const,
  primary: {
    main: midPurple,
    light: lightPurple,
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
  text: { primary: lightGrey, secondary: darkGrey },

  // text: { primary: "#000" },
};

const darkPalette = {
  mode: "light" as const,
  primary: {
    main: "#745ddd",
    contrastText: "#fff",
  },
  secondary: {
    main: "#a99fd1",
  },
  background: {
    default: "#f8f7ff",
    paper: "#fff",
  },
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    ...lightPalette,
    common: {
      white: common.white,
      black: common.black,
    },
  },
  status: {
    online: "#00c853",
    busy: "#ffa000",
    offline: "#b0bec5",
  },
});

export default theme;
