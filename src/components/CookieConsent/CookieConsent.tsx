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
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
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
                color: theme.palette.text.primary,
                flex: 1,
              }}
            >
              We use cookies to improve your experience and analyse site traffic.{" "}
              <Link
                href="/privacy-policy"
                style={{
                  color: theme.palette.primary.dark,
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
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    borderColor: theme.palette.text.secondary,
                    backgroundColor: "transparent",
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
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.common.white,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
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
