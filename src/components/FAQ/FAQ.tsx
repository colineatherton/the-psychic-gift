"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

interface FAQProps {
  id: number;
  question: string;
  answer: string;
}

export function FAQ({ id, question, answer }: FAQProps) {
  return (
    <Accordion
      square
      sx={{
        // backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        // borderTop: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}-content`}
        id={`panel${id}-header`}
      >
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={600}
          fontSize="1.1rem"
          // color="primary"
          lineHeight="1.6"
          variant="h3"
          component="h3"
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          fontFamily="Montserrat Variable, sans-serif"
          fontWeight={600}
          fontSize="1.1rem"
          // color="primary"
          lineHeight="1.6"
          variant="h3"
          component="h3"
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
