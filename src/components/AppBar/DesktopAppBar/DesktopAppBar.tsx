import { PAGES, READING_PAGES } from "@/lib/constants/urls";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../../ThemeToggle/ThemeToggle";
import {
  StyledImageContainer,
  StyledNavCTAButton,
  StyledNavLink,
} from "./DesktopAppBar.styles";
import { HoverMenu } from "@/components";

interface DesktopAppBarProps {
  themeMode: "light" | "dark";
  onThemeToggle: () => void;
  onNavigate: (url: string) => void;
}

export function DesktopAppBar({
  themeMode,
  onThemeToggle,
  onNavigate,
}: DesktopAppBarProps) {
  return (
    <Box sx={{ width: "100%", px: 0, py: 0 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={3}>
          <StyledImageContainer>
            <Image
              src="/logo.png"
              alt="The Psychic Gift Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </StyledImageContainer>
        </Grid>
        <Grid size={9}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid flexGrow={1} textAlign="center" gap={2} display="flex">
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
            </Grid>
            <Grid marginLeft="auto">
              <ThemeToggle onClick={onThemeToggle} initial={themeMode} />
              <StyledNavCTAButton variant="contained" size="small">
                Find your psychic
              </StyledNavCTAButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
  // return (
  //   <>
  //     <Toolbar
  //       disableGutters
  //       sx={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         alignItems: "center",
  //       }}
  //     >
  //       <CTAButton
  //         variant="primary"
  //         size="small"
  //         ml={2}
  //         label={CTA_PRIMARY_LABEL}
  //       />
  //       <button onClick={onThemeToggle}>
  //         Toggle {themeMode === "light" ? "Dark" : "Light"} Mode
  //       </button>
  //     </Toolbar>
  //     <Toolbar
  //       disableGutters
  //       sx={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Box sx={{ position: "relative", height: 100, width: 200, mr: 2 }}>
  //         <Image
  //           src="/logo.png"
  //           alt="The Psychic Gift Logo"
  //           fill
  //           style={{ objectFit: "contain" }}
  //           priority
  //         />
  //       </Box>
  //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
  //         <HoverMenu
  //           TriggerEl={
  //             <Typography
  //               sx={{
  //                 my: 2,
  //                 color: theme.palette.common.white,
  //                 display: "block",
  //                 px: 2,
  //                 fontWeight: 500,
  //                 userSelect: "none",
  //                 alignSelf: "center",
  //                 marginLeft: "auto",
  //               }}
  //               aria-controls="menu-readings"
  //               variant="body1"
  //             >
  //               Phone Readings
  //             </Typography>
  //           }
  //           items={READING_PAGES.map((page) => ({
  //             label: page.label,
  //             onClick: () => onNavigate(page.path),
  //           }))}
  //           gap={3}
  //           delay={600}
  //         />
  //         {PAGES.map((page) => (
  //           <StyledNavButton
  //             key={page.label}
  //             onClick={() => onNavigate(page.path)}
  //             sx={{ my: 2, color: "white", display: "block" }}
  //           >
  //             {page.label}
  //             {page.path === "/offers" ? " ⚡️" : ""}
  //           </StyledNavButton>
  //         ))}
  //       </Box>
  //     </Toolbar>
  //   </>
  // );
}
