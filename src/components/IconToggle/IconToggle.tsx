"use client";
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { ReactNode, useState } from "react";

export const IconToggle = <T,>({
  onClick,
  initial,
  iconList,
}: {
  onClick?: (id: T) => void;
  initial: T;
  iconList: {
    id: T;
    label: string;
    color: string;
    icon: ReactNode;
    glow?: boolean;
  }[];
}) => {
  const theme = useTheme();

  const initialIndex = Math.max(
    0,
    iconList.findIndex((t) => t.id === initial),
  );
  const [index, setIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [angle, setAngle] = useState(0); // accumulative rotation angle

  const icon = iconList[index];

  const cycleTheme = () => {
    const next = (index + 1) % iconList.length;
    setIndex(next);
    setAngle((a) => (a ? 0 : 360));
    onClick?.(iconList[next].id);
  };

  return (
    <Tooltip title={icon.label}>
      <IconButton
        aria-label="toggle theme"
        onClick={cycleTheme}
        size="small"
        sx={{
          position: "relative",
          borderRadius: "50%",
          border: `1px solid ${theme.palette.primary.light}`,
          background: theme.palette.primary.dark,
          color: icon.color,
          transition:
            "box-shadow 0.4s ease, background 0.3s ease, transform 0.2s ease",
          "&:hover": {
            background: "rgba(255,255,255,0.10)",
            boxShadow: icon.glow ? `0 0 12px ${icon.color}60` : "none",
          },
          "&:active": {
            transform: "scale(0.95)",
            boxShadow: `0 0 18px ${icon.color}90`,
          },
          // soft radial flash on click
          "&::after": {
            content: '""',
            position: "absolute",
            inset: -4,
            borderRadius: "inherit",
            background: `radial-gradient(circle, ${icon.color}30 0%, transparent 60%)`,
            opacity: 0,
            transition: "opacity 0.4s ease",
          },
          "&:active::after": { opacity: 1 },
          // reduced motion: keep everything readable
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "& *": { transition: "none !important" },
          },
        }}
      >
        <Box
          aria-hidden
          sx={{
            display: "grid",
            placeItems: "center",
            transition:
              "transform 0.6s cubic-bezier(.2,.6,.2,1), filter 0.4s ease, opacity 0.4s ease",
            transform: `rotate(${angle}deg)`,
          }}
        >
          {icon.icon}
        </Box>
      </IconButton>
    </Tooltip>
  );
};
