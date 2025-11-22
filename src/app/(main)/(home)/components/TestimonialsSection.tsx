import { Testimonial } from "@/components/Testimonial/Testimonial";
import { Grid, Stack, Typography } from "@mui/material";

export default function TestimonialsSection() {
  return (
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
        color="primary"
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
        <Grid size={4} flexGrow={1} pb={4}>
          <Testimonial
            clientName="Karon, Devon"
            quote="I thoroughly enjoyed connecting with Angel. We ended up talking at
            great length with her passing on some guidance from loved ones in
            spirit, who stepped forward with some uplifting messages. Linking in
            with her cards, she put a query of mine over a person of interest
            into some perspective. I felt encouraged and enlightened after such
            a positive reading and I would highly recommend this psychic for a
            very detailed reading. Many Blessings from the lady by the coast xx."
            reader="Angel"
            pin="1441"
          />
        </Grid>
        <Grid size={4} flexGrow={1} pb={4}>
          <Testimonial
            clientName="Rose, UK"
            quote="Hi Jasmine, thank you so much for the very honest reading you gave
            me, no point in sugar coating events. It was nice to feel that I had
            someone on my side guiding me to make the right decisions. What you
            advised made a lot of sense and I’ve put what we discussed into
            practice. I’ve had readings off you before and on each occasion, I
            have come off the phone feeling empowered. I thank you again and
            hope to speak again soon. Thanks, Rose xx."
            reader="Jasmine"
            pin="5115"
          />
        </Grid>
        <Grid size={4} flexGrow={1} pb={4}>
          <Testimonial
            clientName="Ludwig, Warrington"
            quote="Mary has been reading for me for well over a decade. Her steady
            succinct advice is really remarkable. I make notes during readings
            so I can check discussions years later. There's a consistency with
            Mary which is confirmed over and over again. This is a serious
            person with highly developed clairvoyant abilities."
            reader="Mary"
            pin="5055"
          />
        </Grid>
        <Grid size={4} flexGrow={1} pb={4}>
          <Testimonial
            clientName="E, UK"
            quote="Fran has read for me for a number of years and I like her style.
            She's a sincere reader, tells you how it is, won't make things fit
            and open to sharing her psychic knowledge. She's got answers to
            every question and I see her as a psychic mentor. She has brought
            through people from the spirit world and I've been grateful to hear
            from them. She's been very thorough with past events, spot on with
            the present and made some interesting insights for the future. I
            wouldn't choose any other reader. I like her a lot."
            reader="Fran"
            pin="1133"
          />
        </Grid>
        <Grid size={4} flexGrow={1} pb={4}>
          <Testimonial
            clientName="Carol, London"
            quote="Karen has been reading for me for many years. She is a great reader
            and very warm."
            reader="Karen"
            pin="5791"
          />
        </Grid>
        <Grid size={4} flexGrow={1}>
          <Testimonial
            clientName="C, London"
            quote="Pauline is a lovely lady. Very kind and great with timings."
            reader="Pauline"
            pin="3798"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
