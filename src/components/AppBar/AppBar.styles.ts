import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(MUIAppBar)(({ theme }) => ({
  marginTop: 0,
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  ".MuiBox-root p, .MuiBox-root button": {
    color: theme.palette.text.primary,
    fontSize: "1rem",
  },
}));

export const StyledNavButton = styled(Button)`
  text-transform: none;
`;
