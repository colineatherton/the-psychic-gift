import { IconToggle } from "@/components";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { themeIcons } from "../AppBar";
import { StyledBadge } from "../AppBar.styles";
import { StyledDrawer, StyledListItemText } from "./MobileMenu.styles";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  topOffset?: number;
  showMenuIconOnly: boolean;
  onThemeToggle: () => void;
  themeMode: "light" | "dark";
}

export const MobileDrawer = ({
  open,
  onClose,
  topOffset = 0,
  showMenuIconOnly,
  onThemeToggle,
  themeMode,
}: MobileDrawerProps) => {
  return (
    <StyledDrawer
      anchor={"top"}
      open={open}
      topOffset={topOffset}
      onClose={onClose}
    >
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        {showMenuIconOnly ? (
          <Grid mt={2}>
            <PrimaryCTAButton
              size="medium"
              onClick={() => undefined}
              label="Find Your Psychic"
              fullWidth
            />
          </Grid>
        ) : null}
        <List>
          {[...READING_PAGES, ...PAGES].map(({ label, path }, index) => (
            <ListItem key={label} disablePadding alignItems="center">
              <ListItemButton sx={{ width: "100%", justifyContent: "center" }}>
                <StyledListItemText
                  slotProps={{ primary: { align: "center" } }}
                  primary={label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {showMenuIconOnly ? (
          <Grid mb={2} display="flex" justifyContent="center">
            <IconToggle
              onClick={onThemeToggle}
              initial={themeMode}
              iconList={themeIcons}
            />
          </Grid>
        ) : null}
      </Box>
    </StyledDrawer>
  );
};
