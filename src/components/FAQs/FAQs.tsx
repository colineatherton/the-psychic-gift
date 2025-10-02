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

export default function FAQs({ items }: FAQProps) {
  return (
    <Stack direction="column" spacing={4} width="100%">
      <Typography
        fontFamily="Montserrat Variable, sans-serif"
        fontWeight={500}
        fontSize="2rem"
        color="primary"
        lineHeight="1.6"
        variant="h2"
        component="h2"
        marginBottom={12}
        paddingBottom={6}
        textAlign="center"
      >
        Frequently asked questions
      </Typography>
      {items.map(({ question, answer }, index) => (
        <Accordion
          key={index}
          square
          sx={{
            backgroundColor: theme.palette.background.default,
            boxShadow: "none",
            borderTop: `1px solid ${theme.palette.secondary.main}`,
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
              color="primary"
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
              color="primary"
              lineHeight="1.6"
              variant="h3"
              component="h3"
            >
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}
