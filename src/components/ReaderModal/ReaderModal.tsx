import { ReaderConfig } from "@/lib/types/readers";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

interface ReaderModalProps {
  open: boolean;
  reader: ReaderConfig | null;
  onClose: () => void;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ReaderModal: React.FC<ReaderModalProps> = ({
  open,
  reader,
  onClose,
}) => {
  if (!reader) {
    return null; // Don't render modal if no reader is provided
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={onClose}
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          height: "90vh",
          maxHeight: "90vh",
        },
        height: "100%",
      }}
      slots={{ transition: Transition }}
    >
      <DialogTitle>Optional sizes</DialogTitle>
      <DialogContent>
        <Grid
          container
          flexGrow={1}
          sx={{
            alignItems: "stretch",
            minHeight: "100%",
          }}
          spacing={2}
          // sx={{ height: "100%", display: "flex", flexDirection: "row" }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <DialogContentText>
              <h1>{reader.name}</h1>
              <strong>PIN:</strong> {reader.pin}
              <strong>Specialties:</strong>{" "}
              {reader.specialties.abilities.join(", ")}
              <strong>Topics:</strong> {reader.specialties.topics.join(", ")}
              <p style={{ marginTop: 16 }}>{reader.description}</p>
            </DialogContentText>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <DialogContentText>
              trust badge
              <br />
              call fred now - choose a call option and use pin 12345
              <br />
              Recommended call option here
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">call option 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">call option 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography component="span">
                    other available readers
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
            </DialogContentText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
