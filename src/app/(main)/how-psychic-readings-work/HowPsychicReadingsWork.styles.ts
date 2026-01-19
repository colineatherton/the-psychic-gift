import { styled } from "@mui/material/styles";

export const AboutImage = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 720,
  height: 360,
  borderRadius: theme.spacing(2),
  overflow: "hidden",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
}));

export const AboutImageSection = styled("div")(({ theme }) => ({
  width: "100vw",
  minHeight: 420,
  maxHeight: 520,
  margin: `${theme.spacing(8)} 0`,

  backgroundImage: "url('/images/hands.png')",
  backgroundSize: "cover",
  backgroundPosition: "center 60%",
  backgroundRepeat: "no-repeat",

  // full-bleed escape from centered layout
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",

  // subtle fade using overlay (not masking image pixels)
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(
        to bottom,
        rgba(248,247,252,0.95) 0%,
        rgba(248,247,252,0.35) 20%,
        rgba(248,247,252,0.35) 80%,
        rgba(248,247,252,0.95) 100%
      )
    `,
    pointerEvents: "none",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: 260,
    maxHeight: 320,
    backgroundPosition: "center 55%",
  },
}));
