import { Status } from "@/lib/types/readers";
import { alpha, Card, CardHeader, Chip, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  backdropFilter: "blur(8px)", // Optional: Add a blur effect
  background: alpha(theme.palette.primary.light, 0.8),
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 18,
  border: `solid 2px ${theme.palette.primary.main}`,
  "&:hover": {
    boxShadow: `0px 8px 12px ${theme.palette.primary.main}`, // Enhanced shadow on hover for depth
  },
}));

export const StyledCardHeader = styled(CardHeader)<{
  mode: "default" | "compact";
}>(({ theme, mode }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  paddingBottom: theme.spacing(mode === "compact" ? 1 : 4),
}));

export const StyledChip = styled(Chip)<{
  $status: Status;
}>(({ theme, $status }) => ({
  animation: $status === Status.online ? "pulse-subtle 2s infinite" : "none",
  "--pulse-color": theme.palette.status[$status],
  backgroundColor: theme.palette.status[$status],
}));
