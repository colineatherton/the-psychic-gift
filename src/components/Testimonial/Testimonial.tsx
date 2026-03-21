"use client";

import { Typography, useTheme } from "@mui/material";
import Link from "next/link";

interface TestimonialProps {
  clientName: string;
  quote: string;
  reader: string;
  pin: string;
}

export function Testimonial({
  clientName,
  quote,
  reader,
  pin,
}: TestimonialProps) {
  const theme = useTheme();
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/quote.png"
        alt="Illustration"
        style={{
          width: "30px",
          height: "auto",
          display: "flex",
          marginRight: "0 auto",
          filter: theme.palette.mode === "dark" ? "brightness(0) invert(1)" : "none",
        }}
      />
      <Typography
        fontWeight={600}
        fontSize="1.1rem"
        // color="primary"
        lineHeight="1.6"
        variant="h3"
        component="h3"
        textAlign="left"
        marginTop={2}
      >
        {clientName}
      </Typography>
      <Typography
        fontWeight={500}
        fontSize="1rem"
        // color={theme.palette.secondary.dark}
        lineHeight="1.6"
        variant="body2"
        component="p"
        textAlign="left"
        marginTop={2}
      >
        {quote}
      </Typography>
      <Typography
        fontWeight={700}
        fontSize="1rem"
        // color="primary"
        lineHeight="1.6"
        variant="body2"
        component="p"
        textAlign="left"
        marginTop={2}
      >
        Reading by{" "}
        <Link
          style={{ textDecoration: "underline" }}
          href={`/psychic-readers/${reader.toLocaleLowerCase()}-${pin}`}
        >
          {reader}
        </Link>{" "}
        - PIN: {pin}
      </Typography>
    </>
  );
}
