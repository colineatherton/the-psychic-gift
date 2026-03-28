"use client";

import { PhoneCallout } from "@/components/PhoneCallout/PhoneCallout";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Collapse, IconButton, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState } from "react";

const MOBILE_APPBAR_HEIGHT = 56;

interface MobileQuickAccessProps {
  visible: boolean;
}

export const MobileQuickAccess = ({ visible }: MobileQuickAccessProps) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const { handleFindYourPsychic } = useReaderSelectContext();

  return (
    <Box
      sx={{
        position: "fixed",
        top: `${MOBILE_APPBAR_HEIGHT}px`,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.drawer + 2,
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.3s ease",
        background: theme.palette.primary.dark,
        borderBottom: `1px solid ${alpha(theme.palette.primary.light, 0.3)}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Strip — always visible, acts as toggle */}
      <Box
        onClick={() => setExpanded((v) => !v)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.25,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography
          fontWeight={600}
          sx={{ fontSize: "0.95rem", color: "common.white" }}
        >
          Find Your Psychic
        </Typography>
        <IconButton
          size="small"
          aria-label={expanded ? "Close quick access" : "Open quick access"}
          sx={{ color: "common.white", p: 0.5, pointerEvents: "none" }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      {/* Expanded panel — fills remaining viewport */}
      <Collapse in={expanded}>
        <Box
          sx={{
            maxHeight: `calc(100vh - ${MOBILE_APPBAR_HEIGHT}px - 48px)`,
            overflowY: "auto",
            px: 2,
            pt: 1,
            pb: 4,
          }}
        >
          <PrimaryCTAButton
            size="large"
            fullWidth
            onClick={() => {
              handleFindYourPsychic();
              setExpanded(false);
            }}
            label="Find Your Psychic"
            mb={3}
          />
          <PhoneCallout />
        </Box>
      </Collapse>
    </Box>
  );
};
