"use client";

import theme from "@/app/theme";
import { CTA_PRIMARY_LABEL } from "@/lib/constants/Messages";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import MUIAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CTAButton from "../CTAButton/CTAButton";
import { HoverMenu } from "../HoverMenu/HoverMenu";

const StyledAppBar = styled(MUIAppBar)(({ theme }) => ({
  marginTop: 0,
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  ".MuiBox-root p, .MuiBox-root button": {
    color: theme.palette.text.primary,
    fontSize: "1rem",
  },
}));

const StyledNavButton = styled(Button)`
  text-transform: none;
`;

interface AppBarProps {
  themeMode: "light" | "dark";
  onThemeToggle: () => void;
}

export function AppBar({ themeMode, onThemeToggle }: AppBarProps) {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.light }}>
      <StyledAppBar position="fixed" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative", height: 100, width: 200, mr: 2 }}>
              <Image
                src="/logo.png"
                alt="The Psychic Gift Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {PAGES.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={() => {
                      handleCloseNavMenu();
                      router.push(page.path);
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
                {READING_PAGES.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={() => {
                      handleCloseNavMenu();
                      router.push(page.path);
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <HoverMenu
                TriggerEl={
                  <Typography
                    sx={{
                      my: 2,
                      color: theme.palette.common.white,
                      display: "block",
                      px: 2,
                      fontWeight: 500,
                      userSelect: "none",
                      alignSelf: "center",
                      marginLeft: "auto",
                    }}
                    aria-controls="menu-readings"
                    variant="body1"
                  >
                    Phone Readings
                  </Typography>
                }
                items={READING_PAGES.map((page) => ({
                  label: page.label,
                  onClick: () => router.push(page.path),
                }))}
                gap={3}
                delay={600}
              />
              {PAGES.map((page) => (
                <StyledNavButton
                  key={page.label}
                  onClick={() => router.push(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                  {page.path === "/offers" ? " ⚡️" : ""}
                </StyledNavButton>
              ))}
            </Box>
            <CTAButton
              variant="primary"
              size="small"
              ml={2}
              label={CTA_PRIMARY_LABEL}
            />
            <button onClick={onThemeToggle}>
              Toggle {themeMode === "light" ? "Dark" : "Light"} Mode
            </button>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
}
