"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsentStatus, ConsentStatus } from "../CookieConsent/CookieConsent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConsent(getConsentStatus());

    const handleConsentChange = (event: CustomEvent<ConsentStatus>) => {
      setConsent(event.detail);
    };

    window.addEventListener(
      "cookie-consent-change",
      handleConsentChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "cookie-consent-change",
        handleConsentChange as EventListener
      );
    };
  }, []);

  // Don't render anything if:
  // - Not mounted (SSR)
  // - No GA ID configured
  // - Consent not given
  // - Not on the production domain (prevents Vercel preview deployments polluting GA4)
  if (
    !mounted ||
    !GA_MEASUREMENT_ID ||
    consent !== "accepted" ||
    window.location.hostname !== "thepsychicgift.com"
  ) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
