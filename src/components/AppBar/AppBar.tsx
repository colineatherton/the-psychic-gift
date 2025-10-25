"use client";

import { HoverMenu, IconToggle } from "@/components";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import { DarkModeRounded, WbSunnyRounded } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
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
  StyledNavCTAButton,
  StyledNavLink,
} from "./AppBar.styles";
import { MobileDrawer } from "./MobileMenu/MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";

import theme from "@/app/theme";

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

const themeIcons = [
  {
    id: "light",
    label: "Light mode",
    color: "#F5C78C", // should prob be the light palette main
    icon: <WbSunnyRounded fontSize="small" />,
    glow: true,
  },
  {
    id: "dark",
    label: "Dark mode",
    color: "#745ddd", // should prob be the dark palette main
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
  // available psychics badge count
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerTopOffset, setDrawerTopOffset] = useState(0);
  const appBarRef = useRef<HTMLDivElement>(null);
  const drawerAnchorRef = useRef<HTMLDivElement>(null);

  const showFullMenu = useMediaQuery("(min-width:650px)");
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
                  sx={{ width: "100%", maxWidth: { xs: 150, sm: 265 }, my: 2 }}
                >
                  <StyledImg
                    src="/logo-gold-star.png"
                    alt="The Psychic Gift Logo"
                  />
                </Box>
                {/* use gold for dark mode */}
                {mounted && (
                  <>
                    <Grid marginLeft="auto">
                      {!showMenuIconOnly && (
                        <>
                          <IconToggle
                            onClick={onThemeToggle}
                            initial={themeMode}
                            iconList={themeIcons}
                          />
                          <StyledBadge badgeContent={17}>
                            <StyledNavCTAButton
                              variant="contained"
                              size="small"
                            >
                              Find your psychic
                            </StyledNavCTAButton>
                          </StyledBadge>
                        </>
                      )}
                      {!showFullMenu && (
                        <Box marginLeft={4} display="inline">
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
        <StyledLinksContainer maxWidth={false}>
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
                  gap={3}
                  delay={600}
                />
                {PAGES.map((page) => (
                  <Link key={page.label} href={page.path}>
                    <StyledNavLink
                      variant="text"
                      onClick={() => onNavigate(page.path)}
                      size="large"
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
      />
    </>
  );
}
