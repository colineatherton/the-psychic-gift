import { DarkModeRounded, WbSunnyRounded } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { ReactNode, useState } from "react";

type ThemeId = "light" | "dark" | "halloween" | "winter" | "spring";

const themeList: {
  id: ThemeId;
  label: string;
  color: string;
  icon: ReactNode;
}[] = [
  {
    id: "light",
    label: "Light mode",
    color: "#F5C78C", // should prob be the light palette main
    icon: <WbSunnyRounded fontSize="small" />,
  },
  {
    id: "dark",
    label: "Dark mode",
    color: "#745ddd", // should prob be the dark palette main
    icon: <DarkModeRounded fontSize="small" />,
  },
];

export const ThemeToggle = ({
  onClick,
  initial = "dark",
}: {
  onClick?: (id: ThemeId) => void;
  initial?: ThemeId;
}) => {
  const initialIndex = Math.max(
    0,
    themeList.findIndex((t) => t.id === initial)
  );
  const [index, setIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [angle, setAngle] = useState(0); // accumulative rotation angle

  const theme = themeList[index];

  const cycleTheme = () => {
    const next = (index + 1) % themeList.length;
    setIndex(next);
    setAngle((a) => (a ? 0 : 360));
    onClick?.(themeList[next].id);
  };

  return (
    <Tooltip title={theme.label}>
      <IconButton
        aria-label="toggle theme"
        onClick={cycleTheme}
        size="small"
        sx={{
          position: "relative",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.05)",
          color: theme.color,
          transition:
            "box-shadow 0.4s ease, background 0.3s ease, transform 0.2s ease",
          "&:hover": {
            background: "rgba(255,255,255,0.10)",
            boxShadow: `0 0 12px ${theme.color}60`,
          },
          "&:active": {
            transform: "scale(0.95)",
            boxShadow: `0 0 18px ${theme.color}90`,
          },
          // soft radial flash on click
          "&::after": {
            content: '""',
            position: "absolute",
            inset: -4,
            borderRadius: "inherit",
            background: `radial-gradient(circle, ${theme.color}30 0%, transparent 60%)`,
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
          {theme.icon}
        </Box>
      </IconButton>
    </Tooltip>
  );
};
