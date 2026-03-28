"use client";

import { NCO_NUMBER, NEW_CLIENT_OFFER_CODE, NEW_CLIENT_OFFER_PRICE } from "@/lib/constants/phoneNumbers";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import { AppBar, Box, Collapse, Container, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export function OfferBanner({ message }: { message: string }) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
  }, [expanded]);

  return (
    <>
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
          {isMobile ? (
            <>
              <Collapse in={expanded}>
                <Box sx={{ pt: 1.5, pb: 0.5, textAlign: "center" }}>
                  <Box
                    component="a"
                    href={`tel:${NCO_NUMBER.replace(/\s/g, "")}`}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      textDecoration: "none",
                      color: "inherit",
                      mb: 0.5,
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: "1.1rem", color: "common.white" }} />
                    <Typography fontWeight={700} sx={{ fontSize: "1rem", color: "common.white" }}>
                      {NCO_NUMBER}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.9)", mb: 0.5 }}>
                    {NEW_CLIENT_OFFER_PRICE} for 10 mins — quote &quot;{NEW_CLIENT_OFFER_CODE}&quot; (credit/debit card)
                  </Typography>
                  <Typography
                    component="a"
                    href="/offers"
                    sx={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "underline",
                    }}
                  >
                    Full details &amp; T&amp;Cs
                  </Typography>
                </Box>
              </Collapse>
              <Toolbar
                disableGutters
                variant="dense"
                sx={{ minHeight: 0, py: 1, justifyContent: "space-between" }}
              >
                <Box
                  component="a"
                  href={`tel:${NCO_NUMBER.replace(/\s/g, "")}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    textDecoration: "none",
                    color: "inherit",
                    flex: 1,
                  }}
                >
                  <PhoneIcon sx={{ fontSize: "1.1rem", color: "common.white" }} />
                  <Typography fontWeight={600} sx={{ fontSize: "0.85rem", color: "common.white" }}>
                    🎁 New client offer: {NEW_CLIENT_OFFER_PRICE} for 10 mins
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setExpanded((v) => !v)}
                  aria-label={expanded ? "Collapse offer details" : "Expand offer details"}
                  sx={{ color: "common.white", ml: 1 }}
                >
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Toolbar>
            </>
          ) : (
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
                  href={`tel:${NCO_NUMBER.replace(/\s/g, "")}`}
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
                  href="/offers"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  Full details &amp; T&amp;Cs
                </Typography>
              </Box>
            </Toolbar>
          )}
        </Container>
      </AppBar>
    </>
  );
}
