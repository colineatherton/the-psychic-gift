import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledReaderImg = styled("img")(({ theme }) => ({
  borderRadius: "30px",
  width: "100%",
  display: "block",
}));

export const StyledReaderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  // boxShadow: "0 0 30px rgba(150, 120, 255, 0.4)",
  boxShadow: `0 0 30px ${theme.palette.primary.main}`,
  isolation: "isolate",
  // width: "50%",
  // width: "30%",
  width: "25%",
  margin: "0 auto",
  maxWidth: 300,

  "&::before": {
    content: '""',
    position: "absolute",
    inset: "-6px",
    borderRadius: "inherit",
    // background: "conic-gradient(from 0deg, #10e943ff, #8174bb, #f00, #a99fd1)",
    background: `conic-gradient(from 0deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    animation: "hueRotate 12s linear infinite",
    zIndex: -1,
    filter: "blur(12px)",
  },
}));
