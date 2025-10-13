import theme from "@/app/theme";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  topOffset?: number;
}

export const MobileDrawer = ({
  open,
  onClose,
  topOffset = 0,
}: MobileDrawerProps) => {
  return (
    <Drawer
      anchor={"top"}
      open={open}
      onClose={onClose}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer, // Ensure Drawer is above AppBar
        "& .MuiDrawer-paperAnchorTop": {
          top: `${topOffset}px`,
          height: `calc(100% - ${topOffset}px)`,
          boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)", // Shadow for depth
        },
      }}
    >
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {[...READING_PAGES, ...PAGES].map(({ label, path }, index) => (
            <ListItem key={label} disablePadding alignItems="center">
              <ListItemButton sx={{ width: "100%", justifyContent: "center" }}>
                <ListItemText
                  slotProps={{ primary: { align: "center" } }}
                  primary={label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
