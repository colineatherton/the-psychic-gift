"use client";

import { FAQs } from "@/components/FAQs/FAQs";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

interface FAQsSectionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export const FAQsSection = ({ items }: FAQsSectionProps) => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.secondary.light,
        padding: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container height="100%" pt={6} pb={16} width={"100%"}>
          <Stack direction="column" spacing={4} width="100%">
            <Typography
              fontFamily="Montserrat Variable, sans-serif"
              fontWeight={500}
              fontSize="2rem"
              // color="primary"
              lineHeight="1.6"
              variant="h2"
              component="h2"
              marginBottom={12}
              paddingBottom={6}
              textAlign="center"
            >
              Frequently asked questions
            </Typography>
            <FAQs items={items} />
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};
