import { Drawer, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDrawer = styled(Drawer)<{ topOffset: number }>(
  ({ theme, topOffset }) => ({
    zIndex: theme.zIndex.drawer, // Ensure Drawer is above AppBar
    "& .MuiDrawer-paperAnchorTop": {
      top: `${topOffset}px`,
      height: `calc(100% - ${topOffset}px)`,
      boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)", // Shadow for depth
    },
  }),
);

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    color: theme.palette.text.primary,
  },
}));
