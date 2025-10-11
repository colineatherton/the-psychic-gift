"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { HoverMenu } from "@/components";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import { Grid, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import {
  StyledAppBar,
  StyledBadge,
  StyledImg,
  StyledMenuIcon,
  StyledNavCTAButton,
  StyledNavLink,
} from "./AppBar.styles";
import { useEffect, useState } from "react";

interface AppBarProps {
  themeMode: "light" | "dark";
  onThemeToggle: () => void;
  onNavigate: (url: string) => void;
}

export function AppBar({ themeMode, onThemeToggle, onNavigate }: AppBarProps) {
  const [mounted, setMounted] = useState(false);
  const showFullMenu = useMediaQuery("(min-width:1062px)");
  const showMenuIconOnly = useMediaQuery("(max-width:475px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  // the thing container the image and the hambuger need to shrink properly
  // add the mobile menu
  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%", px: 0, py: 0 }}>
          <Grid container alignItems="center">
            <Box sx={{ width: "100%", maxWidth: { xs: 150, sm: 265 } }}>
              <StyledImg
                src="/logo-gold-star.png"
                alt="The Psychic Gift Logo"
              />
            </Box>
            {/* use gold for dark mode */}
            {mounted && (
              <>
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
                <Grid marginLeft="auto">
                  {!showMenuIconOnly && (
                    <>
                      <ThemeToggle
                        onClick={onThemeToggle}
                        initial={themeMode}
                      />
                      <StyledBadge badgeContent={17}>
                        <StyledNavCTAButton variant="contained" size="small">
                          Find your psychic
                        </StyledNavCTAButton>
                      </StyledBadge>
                    </>
                  )}
                  {!showFullMenu && (
                    <Box marginLeft={2} display="inline">
                      <Tooltip title="Open menu">
                        <IconButton aria-label="toggle theme" size="large">
                          <StyledMenuIcon fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </Container>
    </StyledAppBar>
  );
}
