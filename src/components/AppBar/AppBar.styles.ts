import { Badge, Container } from "@mui/material";
import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

export const StyledAppBar = styled(MUIAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1, // Ensure AppBar is above the Drawer backdrop
  marginTop: 0,
  background: "transparent",
}));

export const StyledAppBarContainer = styled(Container)(({ theme }) => ({
  backdropFilter: "blur(8px)",
  background: alpha(theme.palette.primary.main, 0.8),
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  background: "transparent",
}));

export const StyledLinksContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "$showFullMenu", // Explicitly exclude $showFullMenu from being forwarded
})<{
  $showFullMenu: boolean;
}>(({ theme, $showFullMenu }) => ({
  borderTop: $showFullMenu
    ? `1px solid ${theme.palette.primary.light}`
    : "none",
  borderBottom: `1px solid ${theme.palette.primary.light}`,
  backdropFilter: "blur(8px)",
  background: alpha(theme.palette.primary.dark, 0.8),
}));

export const StyledNavLink = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "white",
  fontWeight: 500,
  position: "relative",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  "&:hover": {
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
  cursor: "pointer",
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: theme.palette.common.white,
    animation: "pulse 2s infinite",
    "--pulse-color": theme.palette.status.online,
    backgroundColor: theme.palette.status.online,
    top: "-10px",
    right: "-10px",
  },
}));
