"use client";

import { Button, useTheme } from "@mui/material";

interface PrimaryCTAButtonProps {
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  onClick: () => void;
  mode?: "default" | "compact";
  label: string;
  mb?: number;
}

export const PrimaryCTAButton = ({
  size,
  icon,
  fullWidth,
  onClick,
  mode,
  label,
  mb,
}: PrimaryCTAButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      size={size}
      startIcon={icon}
      variant="contained"
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        borderRadius: 8,
        mb: mb,
        ...(mode === "compact"
          ? {}
          : {
              pt: 2,
              pb: 2,
              px: 4,
            }),
        backgroundColor: theme.palette.accent.primary,
        border: `1px solid ${theme.palette.accent.primaryText}`,
        color: theme.palette.accent.primaryHighlight,
        fontSize: mode === "compact" ? "0.8rem" : "1rem",
      }}
    >
      {label}
    </Button>
  );
};
