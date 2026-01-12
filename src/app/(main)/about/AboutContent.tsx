"use client";

import { PrimaryCTAButton } from "@/components";
import { CTA } from "@/components/Sections";
import { CircleImage } from "@/components/Sections/WhyPsychicGift/WhyPsychicGift.styles";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { AboutImage, AboutImageSection } from "./AboutContent.styles";

export default function AboutContent() {
  const theme = useTheme();

  const logoSrc =
    theme.palette.mode === "light"
      ? "/logo-gold-star-dark.png"
      : "/logo-gold-star.png";

  return (
    <>
      <Grid size={12} justifyContent="center" alignItems="center" mb={10}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          About
        </Typography>
        <Box
          component="img"
          src={logoSrc}
          alt="The Psychic Gift"
          sx={{
            height: 100,
            mt: 1,
            display: "block",
            margin: "0 auto",
          }}
        />
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
        >
          At The Psychic Gift, we honour intuition while respecting personal
          choice.
        </Typography>
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
          maxWidth={"80%"}
        >
          We work with a carefully chosen group of clairvoyants and mediums,
          each bringing their own psychic abilities, spiritual awareness, and
          life experience to their readings. Some readers work through
          clairvoyance, others through clairsentience or clairaudience, and some
          specialise in mediumship and spirit communication.
        </Typography>
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
          maxWidth={"80%"}
        >
          Many people come to us during moments of uncertainty - questions of
          love, relationships, direction, or emotional balance. Through
          intuitive insight and spiritual connection, our readers help
          illuminate paths, possibilities, and influences that may not be
          immediately visible.
        </Typography>
      </Grid>
      <AboutImageSection />
      <Grid
        size={12}
        justifyContent="center"
        alignItems="center"
        mt={14}
        mb={6}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          Our Readers & Their Gifts
        </Typography>
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
        >
          Our readers are especially attuned to matters of the heart, but they
          also explore family, career, and life purpose. Each reading is shaped
          by the reader’s unique style, tools, and spiritual approach - no two
          experiences are the same.
        </Typography>
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
        >
          For those seeking connection beyond the physical world, our mediums
          work gently and respectfully with the spirit realm, offering messages
          from loved ones who have passed. These readings are approached with
          care, compassion, and sensitivity, and are often experienced as deeply
          meaningful and comforting.
        </Typography>
      </Grid>
      <Grid
        size={12}
        justifyContent="center"
        alignItems="center"
        mt={12}
        mb={6}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="1"
          variant="h2"
          component="h2"
          textAlign="center"
        >
          Our Philosophy
        </Typography>
      </Grid>
      <Grid size={12} mb={4}>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.secondary.dark}
          lineHeight="2"
          variant="body2"
          component="p"
        >
          We believe life is influenced by both seen and unseen forces, and that
          guidance can come through intuition, spirit, and inner awareness. A
          reading is not about removing your freedom or fixing your fate - it is
          about shedding light, offering perspective, and helping you move
          forward with greater clarity and confidence.
        </Typography>
      </Grid>
      <CTA heading="Ready to explore our readers?" />
    </>
  );
}
