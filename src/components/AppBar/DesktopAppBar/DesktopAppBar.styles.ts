import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledNavLink = styled(Button)`
  text-transform: none;
  margin-top: 2;
  margin-bottom: 2;
  color: white;
  font-weight: 500;
`;

export const StyledNavCTAButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: theme.spacing(8),
  backgroundColor: theme.palette.primary.dark,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  marginLeft: theme.spacing(2),
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  // width: "100%",
  maxWidth: "250px",
  aspectRatio: "2",
  marginRight: theme.spacing(2),
  maxHeight: "100px",
}));
