"use client";

import "../globals.css";

import { AppBar } from "@/components/AppBar/AppBar";
import OfferBanner from "@/components/OfferBanner/OfferBanner";
import { ReaderFeedProvider } from "@/lib/context/ReaderFeedContext";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useState, useMemo } from "react";
import { getTheme } from "../theme";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReaderFeedProvider>
        <AppBar
          onThemeToggle={() => setMode(mode === "light" ? "dark" : "light")}
          themeMode={mode}
          onNavigate={handleNavigate}
        />
        {children}
        <OfferBanner
          message={`☀️ Summer madness continues! £10 off every credit card reading! Call
          0800 915 2347 & quote "summer madness 25"`}
        />
      </ReaderFeedProvider>
    </ThemeProvider>
  );
}
