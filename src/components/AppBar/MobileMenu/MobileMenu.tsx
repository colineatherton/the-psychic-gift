"use client";

import { IconToggle } from "@/components";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { CALL_OPTIONS } from "@/lib/constants/phoneNumbers";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { themeIcons } from "../AppBar";
import { StyledDrawer, StyledListItemText } from "./MobileMenu.styles";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  topOffset?: number;
  showMenuIconOnly: boolean;
  onThemeToggle: () => void;
  themeMode: "light" | "dark";
}

export const MobileDrawer = ({
  open,
  onClose,
  topOffset = 0,
  showMenuIconOnly,
  onThemeToggle,
  themeMode,
}: MobileDrawerProps) => {
  const { handleFindYourPsychic } = useReaderSelectContext();
  const listRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    if (!open) return;
    // After the drawer animates open, check if list overflows
    const timer = setTimeout(() => {
      const el = listRef.current;
      if (!el) return;
      setShowScrollHint(el.scrollHeight > el.clientHeight);
    }, 150);
    return () => clearTimeout(timer);
  }, [open]);

  const handleScroll = () => {
    const el = listRef.current;
    if (!el) return;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
    setShowScrollHint(!atBottom);
  };

  return (
    <StyledDrawer
      anchor={"top"}
      open={open}
      topOffset={topOffset}
      onClose={onClose}
    >
      <Box
        sx={{ width: "auto", display: "flex", flexDirection: "column", height: "100%" }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        {showMenuIconOnly ? (
          <Box sx={{ px: 2, pt: 2 }}>
            <PrimaryCTAButton
              size="medium"
              onClick={handleFindYourPsychic}
              label="Find Your Psychic"
              fullWidth
            />
          </Box>
        ) : null}

        {/* Scrollable nav links */}
        <Box sx={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Box ref={listRef} onScroll={handleScroll} sx={{ overflowY: "auto", height: "100%" }}>
            <List>
              {[...READING_PAGES, ...PAGES].map(({ label, path }) => (
                <ListItem key={label} disablePadding alignItems="center">
                  <Link href={path} style={{ width: "100%", textDecoration: "none", color: "inherit" }}>
                    <ListItemButton sx={{ width: "100%", justifyContent: "center" }}>
                      <StyledListItemText
                        slotProps={{ primary: { align: "center" } }}
                        primary={label}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          {showScrollHint && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 56,
                background: (theme) =>
                  `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
                pointerEvents: "none",
              }}
            />
          )}
        </Box>

        <Divider />

        {/* Phone numbers — bottom, thumb-friendly */}
        <Box sx={{ bgcolor: "primary.dark" }}>
          {CALL_OPTIONS.map((opt, i) => {
            const displayNumber = opt.mobileNumber ?? opt.number;
            return (
            <Box
              key={opt.number}
              component="a"
              href={`tel:${displayNumber.replace(/\s/g, "")}`}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                color: "common.white",
                textDecoration: "none",
                borderTop: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
              }}
            >
              <PhoneInTalkIcon sx={{ fontSize: "1.4rem", opacity: 0.8, flexShrink: 0 }} />
              <Box>
                <Typography
                  sx={{ fontSize: "1.05rem", fontWeight: 800, lineHeight: 1.2 }}
                >
                  {displayNumber}
                </Typography>
                <Typography sx={{ fontSize: "0.72rem", opacity: 0.65, lineHeight: 1.3, mt: 0.25 }}>
                  {opt.title} · {opt.price}
                </Typography>
              </Box>
            </Box>
            );
          })}
        </Box>

        {showMenuIconOnly ? (
          <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
            <IconToggle
              onClick={onThemeToggle}
              initial={themeMode}
              iconList={themeIcons}
            />
          </Box>
        ) : null}
      </Box>
    </StyledDrawer>
  );
};
