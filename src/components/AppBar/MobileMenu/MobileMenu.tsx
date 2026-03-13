"use client";

import { IconToggle } from "@/components";
import { PrimaryCTAButton } from "@/components/PrimaryCTAButton/PrimaryCTAButton";
import { CALL_OPTIONS } from "@/lib/constants/phoneNumbers";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { themeIcons } from "../AppBar";
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
  const { handleFindYourPsychic } = useReaderSelectContext();

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
              onClick={handleFindYourPsychic}
              label="Find Your Psychic"
              fullWidth
            />
          </Grid>
        ) : null}
        <Box sx={{ bgcolor: "primary.dark" }}>
          {CALL_OPTIONS.map((opt, i) => (
            <Box
              key={opt.number}
              component="a"
              href={`tel:${opt.number.replace(/\s/g, "")}`}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.25,
                color: "common.white",
                textDecoration: "none",
                borderTop: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
              }}
            >
              <PhoneInTalkIcon sx={{ fontSize: "1.4rem", opacity: 0.8, flexShrink: 0 }} />
              <Box>
                <Typography
                  sx={{ fontSize: "1.05rem", fontWeight: 800, lineHeight: 1.2 }}
                >
                  {opt.number}
                </Typography>
                <Typography sx={{ fontSize: "0.72rem", opacity: 0.65, lineHeight: 1.3, mt: 0.25 }}>
                  {opt.title} · {opt.price}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Divider />
        <List>
          {/* onclick?? using path? */}
          {[...READING_PAGES, ...PAGES].map(({ label }) => (
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
