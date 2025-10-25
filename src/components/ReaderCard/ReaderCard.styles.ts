import { alpha, Card, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  backdropFilter: "blur(8px)", // Optional: Add a blur effect
  background: alpha(theme.palette.primary.light, 0.8),
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 18,
  border: `solid 2px ${theme.palette.primary.main}`,
  // padding: theme.spacing(2),
  // boxShadow: 4, // default elevation
  "&:hover": {
    // boxShadow: 10, // higher elevation on hover
    // boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.4)", // Enhanced shadow on hover for depth
    boxShadow: `0px 8px 12px ${theme.palette.primary.main}`, // Enhanced shadow on hover for depth
  },
}));
