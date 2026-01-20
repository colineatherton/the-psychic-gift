import { Status } from "@/lib/types/readers";
import { Chip, styled } from "@mui/material";

export const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "$status", // Explicitly exclude $status from being forwarded
})<{
  $status: Status;
}>(({ theme, $status }) => ({
  animation: $status === Status.online ? "pulse-subtle 2s infinite" : "none",
  "--pulse-color": theme.palette.status[$status],
  backgroundColor: theme.palette.status[$status],
}));
