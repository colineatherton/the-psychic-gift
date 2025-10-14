import styled from "@emotion/styled";

export const StyledHeroSection = styled("section")(({ theme }) => ({
  position: "relative",
  minHeight: "90vh", // Set the hero height here
  backgroundSize: "cover",
  backgroundPosition: "right center", // Keeps bright area on the right
  backgroundRepeat: "no-repeat",
  overflow: "hidden", // Trims particles to the hero
  //   zIndex: 0,
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(80rem 40rem at 75% 25%, rgba(0, 0, 0, 0.15), transparent 60%),
      linear-gradient(180deg, rgba(10, 6, 30, 0.45), rgba(10, 6, 30, 0.25) 40%, transparent 65%)
    `,
    pointerEvents: "none", // Ensure it doesn’t block interactions
    zIndex: 1, // Place it above the background image but below particles
  },
}));

export const StyledParticles = styled("div")({
  position: "absolute",
  inset: 0, // Fills the hero area exactly
  pointerEvents: "none", // Clicks go through to buttons/links
  zIndex: 2, // Ensure particles are above the background and gradient
});

export const StyledContent = styled("div")({
  position: "relative", // Sits above particles
  zIndex: 3, // Ensure content is above everything else
  color: "#fff",
  //   maxWidth: "42rem",
  //   padding: "6rem 1.5rem",
  paddingTop: "6rem", //   new
  //   height: "100%", //   new
});
