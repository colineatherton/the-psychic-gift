"use client";

import "../globals.css";

import { ReaderAvailableAlert, ReaderModal } from "@/components";
import { AppBar } from "@/components/AppBar/AppBar";
import { OfferBanner } from "@/components/OfferBanner/OfferBanner";
import { ReaderFeedProvider } from "@/lib/context/ReaderFeedContext";
import { ReaderSelectProvider } from "@/lib/context/ReaderSelectContext";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { getTheme } from "../theme";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReaderFeedProvider>
        <ReaderSelectProvider>
          <AppBar
            onThemeToggle={() => setMode(mode === "light" ? "dark" : "light")}
            themeMode={mode}
            onNavigate={handleNavigate}
          />
          {children}
          <ReaderAvailableAlert />
          <OfferBanner
            message={`🎁 Special Offer: 10 Minutes for just £5 for new clients! Call 0800 915 2333 & quote "DISCOVER"`}
          />
          <ReaderModal />
        </ReaderSelectProvider>
      </ReaderFeedProvider>
    </ThemeProvider>
  );
}
