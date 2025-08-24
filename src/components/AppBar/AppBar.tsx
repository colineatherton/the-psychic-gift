"use client";

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
import { useState } from "react";
import { HoverMenu } from "../HoverMenu/HoverMenu";
import { useRouter } from "next/navigation";
import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import Image from "next/image";

const StyledAppBar = styled(MUIAppBar)`
  margin-top: 0px;
  background: #8174bb;
  color: #f8f7ff;
  .MuiBox-root {
    p,
    button {
      color: #f8f7ff;
      font-size: 1rem;
    }
  }
`;

const StyledNavButton = styled(Button)`
  text-transform: none;
`;

export function AppBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ backgroundColor: "#a99fd1" }}>
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
                      color: "white",
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
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#745ddd",
                borderRadius: 8,
                marginLeft: 2,
                px: 2,
                py: 1,
              }}
            >
              Start Your Reading Now
            </Button>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
}
