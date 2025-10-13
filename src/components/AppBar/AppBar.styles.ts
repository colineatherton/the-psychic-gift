import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Container } from "@mui/material";
import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

export const StyledAppBar = styled(MUIAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1, // Ensure AppBar is above the Drawer backdrop
  marginTop: 0,
  backdropFilter: "blur(8px)", // Optional: Add a blur effect
  background: alpha(theme.palette.primary.main, 0.8),
  // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  // marginTop: 0,
  // borderBottom: `1px solid ${theme.palette.primary.light}`,
  // borderBottom: `1px solid ${theme.palette.accent.primary}`,
  backdropFilter: "blur(8px)",
  background: alpha(theme.palette.primary.main, 0.8),
}));

export const StyledLinksContainer = styled(Container)(({ theme }) => ({
  // marginTop: 0,
  // borderBottom: `1px solid ${theme.palette.accent.primary}`,
  borderTop: `1px solid ${theme.palette.primary.light}`,
  borderBottom: `1px solid ${theme.palette.primary.light}`,
  backdropFilter: "blur(8px)",
  background: alpha(theme.palette.primary.dark, 0.8),
}));

export const StyledNavLink = styled(Button)(({ theme }) => ({
  textTransform: "none",
  // marginTop: theme.spacing(2),
  // marginBottom: theme.spacing(2),
  color: "white",
  fontWeight: 500,
  position: "relative",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  "&:hover": {
    // color: "#fff",
    color: "#fff",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: -1,
    transform: "translateX(-50%)",
    width: 0,
    height: 2,
    background: "gold",
    boxShadow: `0 0 8px ${theme.palette.accent.primary}`,
    transition: "width 220ms ease",
    borderRadius: 2,
  },
  "&:hover::after, &.Mui-selected::after, &:focus-visible::after": {
    width: "80%",
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    "&::after": { transition: "none" },
  },
}));

export const StyledNavCTAButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: theme.spacing(8),
  backgroundColor: theme.palette.primary.dark,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  marginLeft: theme.spacing(2),
}));

export const StyledImg = styled("img")(() => ({
  width: "100%",
  maxHeight: "120px",
  display: "block",
  height: "auto",
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.accent.primary,
    color: theme.palette.common.white,
    animation: "gold-pulse 2.8s ease-in-out infinite",
    top: "-10px",
    right: "-10px",
  },
}));
