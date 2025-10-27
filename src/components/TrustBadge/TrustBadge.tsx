"use client";

import { Box, useTheme } from "@mui/material";

export function TrustBadge({ src }: { src: string }) {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        maxWidth: "250px",
        margin: "0 auto",
        alignSelf: "center",
        transition: "transform 0.25s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <img
        alt="Illustration"
        src={`badges/${theme.palette.mode}/${src}`}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
}
