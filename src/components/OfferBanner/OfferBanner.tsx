"use client";

import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useRef, useState } from "react";

export function OfferBanner({ message }: { message: string }) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const updateHeight = () => {
      setBannerHeight(banner.offsetHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(banner);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed banner */}
      <Box sx={{ height: bannerHeight }} />

      <AppBar
        ref={bannerRef}
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: (theme) => theme.palette.accent.primary,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            variant="dense"
            sx={{
              minHeight: "0",
              py: 1.5,
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                component="a"
                href="tel:08081564939"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <PhoneIcon sx={{ fontSize: "1.2rem", color: "common.white" }} />
                <Typography
                  fontFamily="Montserrat Variable, sans-serif"
                  fontWeight={600}
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                    color: "common.white",
                  }}
                >
                  {message}
                </Typography>
              </Box>
              <Typography
                component="a"
                href="/terms-and-conditions#new-client-offer"
                fontFamily="Montserrat Variable, sans-serif"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "underline",
                  whiteSpace: "nowrap",
                }}
              >
                T&amp;Cs apply
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
