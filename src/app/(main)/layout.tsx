"use client";

import "../globals.css";

import { AppBar } from "@/components/AppBar/AppBar";
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
    </ReaderFeedProvider>
  );
}
