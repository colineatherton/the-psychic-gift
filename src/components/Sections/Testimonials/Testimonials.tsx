"use client";

import { Testimonial } from "@/components/Testimonial/Testimonial";
import { testimonials } from "@/lib/constants/testimonials";
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const MOBILE_TESTIMONIAL_LIMIT = 3;

export const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showAll, setShowAll] = useState(false);

  const displayedTestimonials =
    isMobile && !showAll
      ? testimonials.slice(0, MOBILE_TESTIMONIAL_LIMIT)
      : testimonials;
  const hasMore = isMobile && testimonials.length > MOBILE_TESTIMONIAL_LIMIT;

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container height="100%" py={6} width={"100%"}>
          <Stack
            direction="column"
            alignItems="center"
            spacing={4}
            width="100%"
            justifyItems={"center"}
            paddingBottom={8}
          >
            <Typography
              fontWeight={500}
              fontSize="2rem"
              lineHeight="1.6"
              variant="h2"
              component="h2"
              marginBottom={4}
              textAlign="center"
              paddingBottom={4}
            >
              Loved by Thousands
            </Typography>
            <Grid container width={"100%"} spacing={8} textAlign={"center"}>
              {displayedTestimonials.map((testimonial, index) => (
                <Grid size={{ xs: 12, md: 4 }} flexGrow={1} pb={4} key={index}>
                  <Testimonial
                    clientName={testimonial.name}
                    quote={testimonial.quote}
                    reader={testimonial.reader}
                    pin={testimonial.pin}
                  />
                </Grid>
              ))}
            </Grid>
            {hasMore && (
              <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => setShowAll((prev) => !prev)}
                  sx={{ borderRadius: 8, px: 4 }}
                >
                  {showAll
                    ? "Show Less"
                    : `Show More (${testimonials.length - MOBILE_TESTIMONIAL_LIMIT} more)`}
                </Button>
              </Box>
            )}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};
