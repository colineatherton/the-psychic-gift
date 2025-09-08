import React, { createContext, useContext, useEffect, useState } from "react";
import { ReaderFeedItem } from "../types/readers";

const READER_FEED_URL = "/api/readers"; // or wherever your route.ts endpoint is

// --- Context Type ---
type ReaderFeedContextType = {
  readers: ReaderFeedItem[];
  isLoading: boolean;
  error: Error | null;
  lastUpdated: Date | null;
  getReaderByPin: (pin: number) => ReaderFeedItem | undefined;
  getOnlineReaders: () => ReaderFeedItem[];
};

const ReaderFeedContext = createContext<ReaderFeedContextType | undefined>(
  undefined
);

// --- Provider Component ---
export const ReaderFeedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [readers, setReaders] = useState<ReaderFeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchReaders = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(READER_FEED_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`Feed failed with status ${res.status}`);
      const data: ReaderFeedItem[] = await res.json();
      setReaders(data);
      setLastUpdated(new Date());
      setIsLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Unknown error"));
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startPolling = () => {
      fetchReaders();
      interval = setInterval(fetchReaders, 10000); // 10s while visible
    };

    const stopPolling = () => clearInterval(interval);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startPolling();
      } else {
        stopPolling();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startPolling();

    return () => {
      stopPolling();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const getReaderByPin = (pin: number) => {
    return readers.find((r) => r.id === pin);
  };

  const getOnlineReaders = () => readers.filter((r) => r.status === 1);

  return (
    <ReaderFeedContext.Provider
      value={{
        readers,
        isLoading,
        error,
        lastUpdated,
        getReaderByPin,
        getOnlineReaders,
      }}
    >
      {children}
    </ReaderFeedContext.Provider>
  );
};

export const useReaderFeedContext = () => {
  const ctx = useContext(ReaderFeedContext);
  if (!ctx)
    throw new Error(
      "useReaderFeedContext must be used within a ReaderFeedProvider"
    );
  return ctx;
};
