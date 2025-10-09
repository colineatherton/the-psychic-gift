import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(MUIAppBar)(({ theme }) => ({
  marginTop: 0,
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  //   color: theme.palette.text.primary,
  //   ".MuiBox-root p, .MuiBox-root button": {
  //     color: theme.palette.text.primary,
  //     fontSize: "1rem",
  //   },
}));
