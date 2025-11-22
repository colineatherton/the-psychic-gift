"use client";

import theme from "@/app/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

interface FAQProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export function FAQs({ items }: FAQProps) {
  return (
    <>
      {items.map(({ question, answer }, index) => (
        <Accordion
          key={index}
          square
          sx={{
            // backgroundColor: theme.palette.background.default,
            boxShadow: "none",
            // borderTop: `1px solid ${theme.palette.secondary.main}`,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
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
      ))}
    </>
  );
}
