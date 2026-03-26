"use client";

import "../globals.css";

import {
  CookieConsent,
  Footer,
  GoogleAnalytics,
  ReaderAvailableAlert,
  ReaderModal,
} from "@/components";
import { AppBar } from "@/components/AppBar/AppBar";
import { OfferBanner } from "@/components/OfferBanner/OfferBanner";
import { NCO_NUMBER, NEW_CLIENT_OFFER_CODE, NEW_CLIENT_OFFER_LABEL, NEW_CLIENT_OFFER_PRICE } from "@/lib/constants/phoneNumbers";
import { AppBarProvider } from "@/lib/context/AppBarContext";
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
      <AppBarProvider>
      <ReaderFeedProvider>
        <ReaderSelectProvider>
          <AppBar
            onThemeToggle={() => setMode(mode === "light" ? "dark" : "light")}
            themeMode={mode}
            onNavigate={handleNavigate}
          />
          {children}
          <Footer />
          <ReaderAvailableAlert />
          <OfferBanner
            message={`🎁 ${NEW_CLIENT_OFFER_LABEL}: ${NEW_CLIENT_OFFER_PRICE} for first-time callers! Call ${NCO_NUMBER} (credit/debit card) & quote "${NEW_CLIENT_OFFER_CODE}"`}
          />
          <ReaderModal />
          <CookieConsent />
          <GoogleAnalytics />
        </ReaderSelectProvider>
      </ReaderFeedProvider>
      </AppBarProvider>
    </ThemeProvider>
  );
}
