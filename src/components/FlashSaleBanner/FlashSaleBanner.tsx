"use client";

import { FLASH_SALE } from "@/lib/constants/phoneNumbers";
import { useAppBarContext } from "@/lib/context/AppBarContext";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SESSION_KEY = "flash-sale-april-2026-dismissed";

function isWithinSaleWindow(): boolean {
  const now = new Date();
  const start = new Date(FLASH_SALE.startDate);
  const end = new Date(FLASH_SALE.endDate);
  // end date is inclusive — extend to end of that day
  end.setHours(23, 59, 59, 999);
  return now >= start && now <= end;
}

export function FlashSaleBanner() {
  const { appBarHeight } = useAppBarContext();
  const [visible, setVisible] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    if (!isWithinSaleWindow()) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    setVisible(true);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* spacer so content below isn't hidden under the fixed banner */}
      <Box sx={{ height: bannerHeight }} />

      <Box
        ref={(el: HTMLDivElement | null) => {
          if (el) setBannerHeight(el.offsetHeight);
        }}
        sx={{
          position: "fixed",
          top: appBarHeight,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.drawer,
          bgcolor: "#f59e0b", // amber-500
          color: "#1c1917", // near-black for contrast on amber
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 0.75, sm: 1.5 },
          flexWrap: "wrap",
          px: { xs: 4, sm: 3 },
          py: { xs: 0.75, sm: 0.6 },
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <Chip
          label={FLASH_SALE.label.toUpperCase()}
          size="small"
          sx={{
            bgcolor: "#1c1917",
            color: "#f59e0b",
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.05em",
            height: 20,
          }}
        />

        <Typography
          component="span"
          sx={{ fontSize: { xs: "0.82rem", sm: "0.9rem" }, fontWeight: 700 }}
        >
          20-min credit/debit card reading — {FLASH_SALE.price}
        </Typography>

        <Typography
          component="span"
          sx={{ fontSize: { xs: "0.78rem", sm: "0.85rem" }, fontWeight: 400 }}
        >
          {FLASH_SALE.perMin} &bull; {FLASH_SALE.saving}
        </Typography>

        <Box
          component="a"
          href={`tel:${FLASH_SALE.number.replace(/\s/g, "")}`}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
            fontSize: { xs: "0.82rem", sm: "0.9rem" },
          }}
        >
          <PhoneIcon sx={{ fontSize: "0.95rem" }} />
          {FLASH_SALE.number}
        </Box>

        <Typography
          component="span"
          sx={{
            fontSize: { xs: "0.7rem", sm: "0.78rem" },
            opacity: 0.75,
            display: { xs: "none", sm: "inline" },
          }}
        >
          Ends 15 Apr
        </Typography>

        <IconButton
          size="small"
          onClick={handleDismiss}
          aria-label="Dismiss sale banner"
          sx={{
            position: "absolute",
            right: 4,
            color: "inherit",
            opacity: 0.7,
            "&:hover": { opacity: 1 },
            p: 0.5,
          }}
        >
          <CloseIcon sx={{ fontSize: "1rem" }} />
        </IconButton>
      </Box>
    </>
  );
}
