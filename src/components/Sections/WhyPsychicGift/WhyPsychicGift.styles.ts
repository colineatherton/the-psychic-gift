import { styled } from "@mui/material/styles";

export const CircleImage = styled("div")(({ theme }) => ({
  position: "relative",
  maxWidth: 320,
  maxHeight: 320,
  borderRadius: "50%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));
