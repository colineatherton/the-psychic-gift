"use client";

import { Box, Button, Container, Slide, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";

export type ConsentStatus = "accepted" | "rejected" | null;

export function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted" || stored === "rejected") return stored;
  return null;
}

export function CookieConsent() {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = getConsentStatus();
    if (consent === null) {
      // Small delay before showing to avoid flash on page load
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    // Trigger event for analytics to pick up
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: "accepted" }));
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: "rejected" }));
  };

  if (!mounted) return null;

  return (
    <Slide direction="down" in={visible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.drawer + 2,
          backgroundColor: theme.palette.primary.dark,
          borderBottom: `1px solid ${theme.palette.primary.light}`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "center" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat Variable, sans-serif",
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                color: theme.palette.common.white,
                flex: 1,
              }}
            >
              We use cookies to improve your experience and analyse site traffic.{" "}
              <Link
                href="/privacy-policy"
                style={{
                  color: theme.palette.common.white,
                  textDecoration: "underline",
                }}
              >
                Learn more
              </Link>
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                flexShrink: 0,
              }}
            >
              <Button
                variant="outlined"
                size="small"
                onClick={handleReject}
                sx={{
                  fontFamily: "Montserrat Variable, sans-serif",
                  fontWeight: 500,
                  textTransform: "none",
                  borderColor: "rgba(255,255,255,0.5)",
                  color: theme.palette.common.white,
                  "&:hover": {
                    borderColor: theme.palette.common.white,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={handleAccept}
                sx={{
                  fontFamily: "Montserrat Variable, sans-serif",
                  fontWeight: 500,
                  textTransform: "none",
                  backgroundColor: theme.palette.common.white,
                  color: theme.palette.primary.dark,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.85)",
                  },
                }}
              >
                Accept
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Slide>
  );
}
