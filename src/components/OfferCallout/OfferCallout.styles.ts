import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(8px)",
  background: alpha(theme.palette.primary.dark, 0.1),
  borderRadius: theme.spacing(1),
}));
