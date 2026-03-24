"use client";

import { HoverMenu, IconToggle, PrimaryCTAButton } from "@/components";
import { CALL_OPTIONS } from "@/lib/constants/phoneNumbers";
import { NavIcons, PAGES, READING_PAGES } from "@/lib/constants/urls";
import { useAppBarContext } from "@/lib/context/AppBarContext";
import { DarkModeRounded, ExpandMore, PhoneInTalk, WbSunnyRounded } from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const { setAppBarHeight } = useAppBarContext();
  const pathname = usePathname();
  const isReadingPage = READING_PAGES.some((p) => p.path === pathname);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerTopOffset, setDrawerTopOffset] = useState(0);
  const appBarRef = useRef<HTMLDivElement>(null);
  const drawerAnchorRef = useRef<HTMLDivElement>(null);

  const showFullMenu = useMediaQuery("(min-width:765px)");
  const showMenuIconOnly = useMediaQuery("(max-width:475px)");
  const showHeaderNumbers = useMediaQuery("(min-width:1024px)");
  const showCompactNumbers = showFullMenu && !showHeaderNumbers;

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
      setAppBarHeight(Math.floor(top));
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
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                px: 0,
                py: 0,
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: "100%",
                  maxWidth: showHeaderNumbers
                    ? 200
                    : { xs: 150, sm: 240, md: 265 },
                  my: showHeaderNumbers ? 1 : 2,
                  transition: "max-width 0.2s",
                }}
              >
                <StyledImg
                  src="/logo-gold-star.png"
                  alt="The Psychic Gift Logo"
                  onClick={() => onNavigate("/")}
                />
              </Box>

              {/* Phone numbers — 1024px+ only */}
              {mounted && showHeaderNumbers && (
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ flex: 1, justifyContent: "center", mx: 2 }}
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ borderColor: "rgba(255,255,255,0.2)", my: 1 }}
                    />
                  }
                >
                  {CALL_OPTIONS.map((opt) => (
                    <Box
                      key={opt.number}
                      component="a"
                      href={`tel:${opt.number.replace(/\s/g, "")}`}
                      sx={{
                        textAlign: "center",
                        px: 2,
                        py: 0.5,
                        textDecoration: "none",
                        color: "common.white",
                        "&:hover .phone-number": { color: "accent.primary" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.65rem",
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
                          opacity: 0.65,
                          display: "block",
                          mb: 0.5,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {opt.title}
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={0.75}
                      >
                        <PhoneInTalk sx={{ fontSize: "1.1rem", opacity: 0.75 }} />
                        <Typography
                          className="phone-number"
                          sx={{
                            fontSize: "1.35rem",
                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: -0.3,
                            transition: "color 0.15s",
                          }}
                        >
                          {opt.number}
                        </Typography>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              )}

              {/* Right side CTAs */}
              {mounted && (
                <Grid
                  marginLeft="auto"
                  container
                  spacing={1}
                  alignItems="center"
                  sx={{ flexShrink: 0 }}
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
                        <StyledBadge badgeContent={getOnlineReaders().length}>
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
                      <Badge
                        variant="dot"
                        invisible={!showMenuIconOnly || getOnlineReaders().length === 0 || mobileMenuOpen}
                        sx={(theme) => ({
                          "& .MuiBadge-dot": {
                            backgroundColor: theme.palette.status.online,
                            animation: "pulse 2s infinite",
                            "--pulse-color": theme.palette.status.online,
                            width: 10,
                            height: 10,
                            top: 4,
                            right: 4,
                          },
                        })}
                      >
                        <IconToggle
                          key={mobileMenuOpen ? "menu-open" : "menu-closed"}
                          onClick={() => setMobileMenuOpen((v) => !v)}
                          initial={
                            mobileMenuOpen
                              ? ("close" as const)
                              : ("open" as const)
                          }
                          iconList={menuIcons}
                        />
                      </Badge>
                    </Box>
                  )}
                </Grid>
              )}
            </Box>
          </StyledContainer>
          {/* Compact numbers row — 765–1023px, separate row to avoid layout conflicts */}
          {mounted && showCompactNumbers && (
            <Stack
              direction="row"
              justifyContent="center"
              gap={{ sm: 3, md: 4 }}
              sx={{
                py: 0.75,
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {CALL_OPTIONS.map((opt) => (
                <Box
                  key={opt.number}
                  component="a"
                  href={`tel:${opt.number.replace(/\s/g, "")}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "common.white",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "accent.primary" },
                  }}
                >
                  <PhoneInTalk sx={{ fontSize: "0.9rem", opacity: 0.7, flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: 0.8, opacity: 0.65, lineHeight: 1, mb: 0.25 }}>
                      {opt.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.88rem", fontWeight: 700, lineHeight: 1 }}>
                      {opt.number}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}
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
                    <StyledNavLink
                      variant="text"
                      size="large"
                      $active={isReadingPage}
                      endIcon={<ExpandMore />}
                    >
                      Phone Readings
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
                      $active={pathname === page.path}
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
