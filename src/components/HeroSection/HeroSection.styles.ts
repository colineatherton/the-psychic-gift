import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

export const StyledHeroSection = styled("section")<{
  theme: Theme;
}>(({ theme }) => ({
  position: "relative",
  minHeight: "90vh",
  backgroundSize: "cover",
  background: `linear-gradient(180deg, ${theme.palette.primary.dark} 15%, ${theme.palette.primary.light} 100%)`,
  overflow: "hidden",
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(80rem 40rem at 75% 25%, rgba(0, 0, 0, 0.15), transparent 60%),
      linear-gradient(180deg, rgba(10, 6, 30, 0.05), rgba(10, 6, 30, 0.10) 40%, transparent 65%)
    `,
    pointerEvents: "none",
    zIndex: 1,
  },
}));

export const StyledParticles = styled("div")({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 2,
});

export const StyledContent = styled("div")({
  position: "relative",
  zIndex: 3,
  // color: "#fff",
  paddingTop: "6rem",
});

// radial-gradient(80rem 40rem at 75% 25%, rgba(0, 0, 0, 0.05), transparent 90%),
// linear-gradient(180deg, rgba(10, 6, 30, 0.05), rgba(10, 6, 30, 0.10) 40%, transparent 65%)

// linear-gradient(180deg, rgba(10, 6, 30, 0.45), rgba(10, 6, 30, 0.25) 40%, transparent 65%)
