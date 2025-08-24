"use client";

import { useEffect, useState } from "react";

export function useReaderPolling(pollInterval = 10000) {
  const [readerData, setReaderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/readers");
        const data = await res.json();
        setReaderData(data);
      } catch (error) {
        console.error("Polling failed:", error);
      }
    };

    fetchData(); // initial
    const interval = setInterval(fetchData, pollInterval);

    return () => clearInterval(interval);
  }, [pollInterval]);

  return readerData;
}
