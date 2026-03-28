"use client";

import { PhoneCallout } from "@/components/PhoneCallout/PhoneCallout";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { useAppBarContext } from "@/lib/context/AppBarContext";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Collapse, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState } from "react";

export const MobileQuickAccess = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const { handleFindYourPsychic } = useReaderSelectContext();
  const { appBarHeight } = useAppBarContext();

  const top = appBarHeight || 56;

  return (
    <>
      {/* Backdrop — closes panel on click-away */}
      {expanded && (
        <Box
          onClick={() => setExpanded(false)}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: theme.zIndex.drawer + 1,
            background: "rgba(0,0,0,0.5)",
          }}
        />
      )}

      <Box
        sx={{
          position: "fixed",
          top: `${top}px`,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.drawer + 2,
          background: alpha(theme.palette.primary.dark, 0.97),
          borderBottom: `1px solid ${alpha(theme.palette.primary.light, 0.25)}`,
          boxShadow: expanded ? "0 8px 32px rgba(0,0,0,0.4)" : "0 2px 8px rgba(0,0,0,0.2)",
          transition: "box-shadow 0.2s ease",
        }}
      >
        {/* Strip */}
        <Box
          onClick={() => setExpanded((v) => !v)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <Box>
            <Typography
              fontWeight={700}
              sx={{ fontSize: "0.95rem", color: "common.white", lineHeight: 1.2 }}
            >
              Find Your Psychic
            </Typography>
            <Typography
              sx={{ fontSize: "0.72rem", color: alpha("#ffffff", 0.65), lineHeight: 1.3 }}
            >
              🟢 Readers available now
            </Typography>
          </Box>
          <IconButton
            size="small"
            aria-label={expanded ? "Close" : "Open call options"}
            sx={{ color: "common.white", p: 0.5, pointerEvents: "none" }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>

        {/* Expanded panel */}
        <Collapse in={expanded}>
          <Box
            sx={{
              maxHeight: `calc(100vh - ${top}px - 56px)`,
              overflowY: "auto",
              borderTop: `1px solid ${alpha(theme.palette.primary.light, 0.15)}`,
            }}
          >
            {/* CTA section */}
            <Box sx={{ px: 2, pt: 2, pb: 2 }}>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: alpha("#ffffff", 0.55),
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 1.5,
                }}
              >
                Browse available readers
              </Typography>
              <PrimaryCTAButton
                size="large"
                fullWidth
                onClick={() => {
                  handleFindYourPsychic();
                  setExpanded(false);
                }}
                label="Find Your Psychic"
                mb={0}
              />
            </Box>

            <Divider sx={{ borderColor: alpha(theme.palette.primary.light, 0.15) }}>
              <Typography sx={{ fontSize: "0.75rem", color: alpha("#ffffff", 0.4), px: 1 }}>
                or call directly
              </Typography>
            </Divider>

            {/* Phone numbers */}
            <Box sx={{ px: 2, pt: 2, pb: 4 }}>
              <PhoneCallout />
            </Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};
