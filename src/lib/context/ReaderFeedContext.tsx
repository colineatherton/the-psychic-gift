import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ReaderFeedItem } from "../types/readers";

const READER_FEED_URL = "/api/readers";

type ReaderFeedContextType = {
  readers: ReaderFeedItem[];
  isLoading: boolean;
  error: Error | null;
  lastUpdated: Date | null;
  recentlyAvailable?: ReaderFeedItem;
  getReaderByPin: (pin: number) => ReaderFeedItem | undefined;
  getOnlineReaders: () => ReaderFeedItem[];
};

export const ReaderFeedContext = createContext<
  ReaderFeedContextType | undefined
>(undefined);

export const ReaderFeedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [readers, setReaders] = useState<ReaderFeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [recentlyAvailable, setRecentlyAvailable] = useState<ReaderFeedItem>();

  // Skip diffing the very first fetch
  const hasLoadedRef = useRef(false);

  const detectTransitions = (
    prev: ReaderFeedItem[],
    next: ReaderFeedItem[],
  ) => {
    const prevStatus = new Map<number, ReaderFeedItem["status"]>();
    prev.forEach((r) => prevStatus.set(r.id, r.status));

    // Find first transition TO online
    const transitioned = next.find((n) => {
      const before = prevStatus.get(n.id);
      return before !== undefined && before !== 1 && n.status === 1;
    });

    if (transitioned) {
      setRecentlyAvailable(transitioned);
      return;
    }

    // No new transition: maintain or clear/replace
    setRecentlyAvailable((current) => {
      if (!current) return current;
      const updatedCurrent = next.find((r) => r.id === current.id);
      // If current left online, replace with another online or clear
      if (!updatedCurrent || updatedCurrent.status !== 1) {
        const replacement = next.find(
          (r) => r.status === 1 && r.id !== current.id,
        );
        return replacement || undefined;
      }
      return updatedCurrent; // keep same reader (fresh object)
    });
  };

  const fetchReaders = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(READER_FEED_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`Feed failed with status ${res.status}`);
      const data: ReaderFeedItem[] = await res.json();

      setReaders((prev) => {
        if (hasLoadedRef.current) {
          detectTransitions(prev, data);
        } else {
          hasLoadedRef.current = true;
        }
        return data;
      });

      setLastUpdated(new Date());
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    const startPolling = () => {
      fetchReaders();
      interval = setInterval(fetchReaders, 10000);
    };

    const stopPolling = () => {
      if (interval) clearInterval(interval);
    };

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

  const getReaderByPin = (pin: number) => readers.find((r) => r.id === pin);
  const getOnlineReaders = () => readers.filter((r) => r.status === 1);

  console.log("ReaderFeedContext", readers);
  return (
    <ReaderFeedContext.Provider
      value={{
        readers,
        isLoading,
        error,
        lastUpdated,
        recentlyAvailable,
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
      "useReaderFeedContext must be used within a ReaderFeedProvider",
    );
  return ctx;
};
