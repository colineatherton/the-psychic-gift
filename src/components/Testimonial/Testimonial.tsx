import { Typography } from "@mui/material";

interface TestimonialProps {
  clientName: string;
  quote: string;
  reader: string;
  pin: string;
}

export default function Testimonial({
  clientName,
  quote,
  reader,
  pin,
}: TestimonialProps) {
  return (
    <>
      <img
        src="/icons/quote.png"
        alt="Illustration"
        style={{
          width: "30px",
          height: "auto",
          display: "flex",
          marginRight: "0 auto",
        }}
      />
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={600}
        fontSize="1.1rem"
        color="primary"
        lineHeight="1.6"
        variant="h3"
        component="h3"
        textAlign="left"
        marginTop={2}
      >
        {clientName}
      </Typography>
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={500}
        fontSize="1rem"
        color="#274149"
        lineHeight="1.6"
        variant="body2"
        component="p"
        textAlign="left"
        marginTop={2}
      >
        {quote}
      </Typography>
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={700}
        fontSize="1rem"
        color="primary"
        lineHeight="1.6"
        variant="body2"
        component="p"
        textAlign="left"
        marginTop={2}
      >
        Reading by {reader} - PIN: {pin}
      </Typography>
    </>
  );
}
