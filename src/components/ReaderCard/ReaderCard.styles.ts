import { Status } from "@/lib/types/readers";
import { alpha, Card, CardHeader, Chip, styled } from "@mui/material";

export const StyledCard = styled(Card)<{
  mode: "default" | "compact" | "featured";
}>(({ theme, mode }) => ({
  backdropFilter: "blur(8px)", // Optional: Add a blur effect
  background: alpha(theme.palette.primary.light, 0.8),
  boxShadow:
    mode === "featured"
      ? `0px 16px 24px ${theme.palette.primary.main}`
      : "0px 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 18,
  border: `solid 2px ${theme.palette.primary.main}`,
  "&:hover": {
    boxShadow:
      mode === "featured"
        ? `0px 24px 32px ${theme.palette.primary.main}`
        : `0px 8px 12px ${theme.palette.primary.main}`, // Enhanced shadow on hover for depth
  },
}));

export const StyledCardHeader = styled(CardHeader)<{
  mode: "default" | "compact" | "featured";
}>(({ theme, mode }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  paddingBottom: theme.spacing(mode === "compact" ? 1 : 4),
}));

export const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "$status", // Explicitly exclude $status from being forwarded
})<{
  $status: Status;
}>(({ theme, $status }) => ({
  animation: $status === Status.online ? "pulse-subtle 2s infinite" : "none",
  "--pulse-color": theme.palette.status[$status],
  backgroundColor: theme.palette.status[$status],
}));
