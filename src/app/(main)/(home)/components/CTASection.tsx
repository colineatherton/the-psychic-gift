"use client";

import { useReaderFeedContext } from "@/lib/context/ReaderFeedContext";
import { Button, Stack, Typography } from "@mui/material";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  showAvailableReadersSubHeading?: boolean;
  buttonText: string;
  showAvailableReadersCount?: boolean;
}

// use named exports
export default function CTASection({
  heading,
  subheading,
  showAvailableReadersSubHeading,
  buttonText,
  showAvailableReadersCount = true,
}: CTASectionProps) {
  const { getOnlineReaders } = useReaderFeedContext();

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={4}
      width="100%"
      justifyItems={"center"}
    >
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={500}
        fontSize="2rem"
        color="#f8f7ff"
        lineHeight="1.6"
        variant="h2"
        component="h2"
        marginBottom={4}
        textAlign="center"
      >
        {heading}
      </Typography>
      {subheading && (
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={600}
          fontSize="1.1rem"
          color="#f8f7ff"
          lineHeight="1.6"
          variant="h3"
          component="h3"
          textAlign="center"
          marginTop={4}
        >
          {subheading}
        </Typography>
      )}
      {showAvailableReadersSubHeading && (
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={600}
          fontSize="1.1rem"
          color="#f8f7ff"
          lineHeight="1.6"
          variant="h3"
          component="h3"
          textAlign="center"
          marginTop={4}
        >
          ✨ {getOnlineReaders().length} psychics are available to take your
          call ✨
        </Typography>
      )}
      <Button
        size="large"
        variant="contained"
        sx={{
          backgroundColor: "#745ddd",
          border: "1px solid #f8f7ff",
          borderRadius: 8,
          mb: 4,
          py: 2,
          px: 4,
        }}
      >
        {buttonText}
      </Button>
      {showAvailableReadersCount && (
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={500}
          fontSize="1rem"
          color="#f8f7ff"
          lineHeight="1.6"
          variant="body2"
          component="p"
          textAlign="center"
          marginTop={2}
        >
          ✨ {getOnlineReaders().length} available psychics - ready when you are
          ✨
        </Typography>
      )}
    </Stack>
  );
}
