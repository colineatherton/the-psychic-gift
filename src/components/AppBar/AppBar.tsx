import theme from "@/app/theme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { StyledAppBar } from "./AppBar.styles";
import { DesktopAppBar } from "./DesktopAppBar/DesktopAppBar";
import { MobileAppBar } from "./MobileAppBar";

interface AppBarProps {
  themeMode: "light" | "dark";
  onThemeToggle: () => void;
  onNavigate: (url: string) => void;
}

export function AppBar({ themeMode, onThemeToggle, onNavigate }: AppBarProps) {
  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Container maxWidth="lg">
        <MobileAppBar onNavigate={onNavigate} />
        <DesktopAppBar
          themeMode={themeMode}
          onThemeToggle={onThemeToggle}
          onNavigate={onNavigate}
        />
      </Container>
    </StyledAppBar>
  );
}
