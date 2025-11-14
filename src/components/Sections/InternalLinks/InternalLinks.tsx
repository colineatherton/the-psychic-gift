"use client";

import { LinkCard } from "@/components/LinkCard/LinkCard";
import { InternalLink } from "@/lib/constants/internalLinks";
import { Box, Container, Grid } from "@mui/material";

interface InternalLinksProps {
  links: InternalLink[];
}

export const InternalLinks = ({ links }: InternalLinksProps) => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.main,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        paddingBottom: 12,
        paddingTop: 8,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4} width={"100%"}>
          {links.map((link) => (
            <Grid size={4} key={link.href}>
              <LinkCard
                iconPath={link.iconPath}
                title={link.title}
                description={link.description}
                href={link.href}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
