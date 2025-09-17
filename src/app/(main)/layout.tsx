"use client";

import "../globals.css";

import { AppBar } from "@/components/AppBar/AppBar";
import OfferBanner from "@/components/OfferBanner/OfferBanner";
import { ReaderFeedProvider } from "@/lib/context/ReaderFeedContext";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReaderFeedProvider>
      <AppBar />
      {children}
      <OfferBanner
        message={`☀️ Summer madness continues! £10 off every credit card reading! Call
          0800 915 2347 & quote "summer madness 25"`}
      />
    </ReaderFeedProvider>
  );
}
