"use client";
import { Avatar, Box, Typography } from "@mui/material";

interface NumberWithTextProps {
  number: string;
  title: string;
  body: string;
}

export default function NumberWithText({
  number,
  title,
  body,
}: NumberWithTextProps) {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        mb={2}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            backgroundColor: (theme) => theme.palette.primary.dark,
          }}
        >
          {number}
        </Avatar>
      </Box>
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
        color="primary"
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
