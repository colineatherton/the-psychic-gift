/**
 * READER FEED POLLING - Client-Side with Backoff
 *
 * POLLING STRATEGY:
 * -----------------
 * - Base interval: 5 seconds (matches upstream design)
 * - Visibility pause: Stops polling when tab is hidden, resumes when visible
 * - Error backoff: 5s → 10s → 30s on consecutive failures, resets on success
 *
 * CACHING NOTE:
 * - The /api/readers endpoint has edge caching (s-maxage=10)
 * - Most polls hit CDN cache, reducing server costs
 * - Client still polls every 5s for responsiveness
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ReaderFeedItem } from "../types/readers";

const READER_FEED_URL = "/api/readers";

// Polling intervals (ms)
const BASE_POLL_INTERVAL = 5000;
const BACKOFF_INTERVALS = [5000, 10000, 30000]; // 5s, 10s, 30s

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
  // Track consecutive failures for backoff
  const failureCountRef = useRef(0);

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

  // Returns true on success, false on failure (for backoff logic)
  const fetchReaders = useCallback(async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      const res = await fetch(READER_FEED_URL);
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
      setError(null);
      setIsLoading(false);
      failureCountRef.current = 0; // Reset backoff on success
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      setIsLoading(false);
      failureCountRef.current = Math.min(
        failureCountRef.current + 1,
        BACKOFF_INTERVALS.length - 1,
      );
      return false;
    }
  }, []);

  // Get current polling interval based on failure count
  const getPollingInterval = useCallback(() => {
    return BACKOFF_INTERVALS[failureCountRef.current] ?? BASE_POLL_INTERVAL;
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    let isPolling = true;

    const poll = async () => {
      if (!isPolling) return;

      await fetchReaders();

      // Schedule next poll with current interval (may be backed off)
      if (isPolling) {
        timeoutId = setTimeout(poll, getPollingInterval());
      }
    };

    const startPolling = () => {
      isPolling = true;
      poll();
    };

    const stopPolling = () => {
      isPolling = false;
      if (timeoutId) clearTimeout(timeoutId);
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
  }, [fetchReaders, getPollingInterval]);

  const getReaderByPin = (pin: number) => readers.find((r) => r.id === pin);
  const getOnlineReaders = () => readers.filter((r) => r.status === 1);

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
