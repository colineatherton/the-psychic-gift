import { Typography } from "@mui/material";

interface IconWithTextProps {
  src: string;
  title: string;
  body: string;
}

export default function IconWithText({ src, title, body }: IconWithTextProps) {
  return (
    <>
      <img
        src={src}
        alt="Illustration"
        style={{
          width: "80px",
          height: "auto",
          display: "flex",
          margin: "0 auto",
          alignSelf: "center",
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
        textAlign="center"
        marginTop={4}
      >
        {title}
      </Typography>
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={500}
        fontSize="1rem"
        color="#274149"
        lineHeight="1.6"
        variant="body2"
        component="p"
        textAlign="center"
        marginTop={2}
      >
        {body}
      </Typography>
    </>
  );
}
