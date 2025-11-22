"use client";

import { HoverMenu, IconToggle, PrimaryCTAButton } from "@/components";
import { NavIcons, PAGES, READING_PAGES } from "@/lib/constants/urls";
import { DarkModeRounded, WbSunnyRounded } from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  StyledAppBar,
  StyledAppBarContainer,
  StyledBadge,
  StyledContainer,
  StyledImg,
  StyledLinksContainer,
  StyledNavLink,
} from "./AppBar.styles";
import { MobileDrawer } from "./MobileMenu/MobileMenu";

import theme, { darkPlum, lightGrey } from "@/app/theme";
import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { useReaderSelectContext } from "@/lib/context/ReaderSelectContext";

const navIcons: Record<NavIcons, React.ReactNode> = {
  [NavIcons.Offer]: <AutoAwesomeIcon />,
};

const menuIcons = [
  {
    id: "open",
    label: "Open menu",
    color: theme.palette.common.white,
    icon: <MenuIcon fontSize="large" />,
  },
  {
    id: "close",
    label: "Close menu",
    color: theme.palette.common.white,
    icon: <CloseIcon fontSize="large" />,
  },
];

export const themeIcons = [
  {
    id: "light",
    label: "Light mode",
    color: lightGrey,
    icon: <WbSunnyRounded fontSize="small" />,
    glow: true,
  },
  {
    id: "dark",
    label: "Dark mode",
    color: darkPlum,
    icon: <DarkModeRounded fontSize="small" />,
    glow: true,
  },
];

interface AppBarProps {
  themeMode: "light" | "dark";
  onThemeToggle: () => void;
  onNavigate: (url: string) => void;
}

export function AppBar({ themeMode, onThemeToggle, onNavigate }: AppBarProps) {
  const { getOnlineReaders } = useReaderFeedContext();
  const { handleFindYourPsychic } = useReaderSelectContext();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerTopOffset, setDrawerTopOffset] = useState(0);
  const appBarRef = useRef<HTMLDivElement>(null);
  const drawerAnchorRef = useRef<HTMLDivElement>(null);

  const showFullMenu = useMediaQuery("(min-width:765px)");
  const showMenuIconOnly = useMediaQuery("(max-width:475px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showFullMenu) {
      setMobileMenuOpen(false);
    }
  }, [showFullMenu]);

  useEffect(() => {
    const updateOffset = () => {
      const top = drawerAnchorRef.current?.getBoundingClientRect().top ?? 0;
      setDrawerTopOffset(Math.floor(top));
    };
    updateOffset();

    const ro = new ResizeObserver(updateOffset);
    if (appBarRef.current) ro.observe(appBarRef.current);

    window.addEventListener("resize", updateOffset);
    window.addEventListener("orientationchange", updateOffset);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateOffset);
      window.removeEventListener("orientationchange", updateOffset);
    };
  }, []);

  return (
    <>
      <StyledAppBar position="fixed" elevation={0} ref={appBarRef}>
        <StyledAppBarContainer maxWidth={false}>
          <StyledContainer maxWidth="lg">
            <Box sx={{ width: "100%", px: 0, py: 0 }}>
              <Grid container alignItems="center">
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 150, sm: 240, md: 265 },
                    my: 2,
                  }}
                >
                  <StyledImg
                    src="/logo-gold-star.png"
                    alt="The Psychic Gift Logo"
                    onClick={() => onNavigate("/")}
                  />
                </Box>
                {mounted && (
                  <>
                    <Grid
                      marginLeft="auto"
                      container
                      spacing={1}
                      alignItems="center"
                    >
                      {!showMenuIconOnly && (
                        <>
                          <Grid>
                            <IconToggle
                              onClick={onThemeToggle}
                              initial={themeMode}
                              iconList={themeIcons}
                            />
                          </Grid>
                          <Grid>
                            <StyledBadge
                              badgeContent={getOnlineReaders().length}
                            >
                              <PrimaryCTAButton
                                size="small"
                                onClick={handleFindYourPsychic}
                                mode="compact"
                                label="Find Your Psychic"
                              />
                            </StyledBadge>
                          </Grid>
                        </>
                      )}
                      {!showFullMenu && (
                        <Box marginLeft={2} display="inline">
                          <IconToggle
                            onClick={() => setMobileMenuOpen((v) => !v)}
                            initial="open"
                            iconList={menuIcons}
                          />
                        </Box>
                      )}
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>
          </StyledContainer>
        </StyledAppBarContainer>
        <StyledLinksContainer maxWidth={false} $showFullMenu={showFullMenu}>
          <Grid
            flexGrow={1}
            textAlign="center"
            justifyContent="center"
            gap={2}
            display="flex"
          >
            {showFullMenu && (
              <>
                <HoverMenu
                  TriggerEl={
                    <StyledNavLink variant="text" size="large">
                      Phone readings
                    </StyledNavLink>
                  }
                  items={READING_PAGES.map((page) => ({
                    label: page.label,
                    onClick: () => onNavigate(page.path),
                  }))}
                  gap={1}
                  delay={600}
                />
                {PAGES.map((page) => (
                  <Link key={page.label} href={page.path}>
                    <StyledNavLink
                      variant="text"
                      onClick={() => onNavigate(page.path)}
                      size="large"
                      startIcon={page.icon ? navIcons[page.icon] : undefined}
                    >
                      {page.label}
                    </StyledNavLink>
                  </Link>
                ))}
              </>
            )}
          </Grid>
        </StyledLinksContainer>
        {/* Sentinel element at the very bottom of the AppBar */}
        <Box ref={drawerAnchorRef} sx={{ height: 0 }} />
      </StyledAppBar>
      <MobileDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        topOffset={drawerTopOffset}
        showMenuIconOnly={showMenuIconOnly}
        onThemeToggle={onThemeToggle}
        themeMode={themeMode}
      />
    </>
  );
}
