"use client";

import { Testimonial } from "@/components/Testimonial/Testimonial";
import { testimonials } from "@/lib/constants/testimonials";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export const Testimonials = () => {
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
              fontFamily="Montserrat Variable, sans-serif"
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
              {testimonials.map((testimonial, index) => (
                <Grid size={4} flexGrow={1} pb={4} key={index}>
                  <Testimonial
                    clientName={testimonial.name}
                    quote={testimonial.quote}
                    reader={testimonial.reader}
                    pin={testimonial.pin}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};
