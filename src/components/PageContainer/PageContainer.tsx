import { Container } from "@mui/material";

interface GradientContainerProps {
  centered?: boolean;
  children: React.ReactNode;
}

// not sure if we need this one but we might want to reuse containers?
// work out what we are doing as we seem to have a lot of ways of doing the same thing
export function PageContainer({ centered, children }: GradientContainerProps) {
  return (
    <Container
      maxWidth="lg"
      sx={
        centered
          ? {
              display: "flex",
              alignItems: "center",
            }
          : {}
      }
    >
      {children}
    </Container>
  );
}
