"use client";

import theme from "@/app/theme";
import { Button, ButtonOwnProps } from "@mui/material";
import Link from "next/link";

interface CTAButtonProps {
  variant: "primary" | "secondary";
  onClick?: () => void;
  startIcon?: React.ReactNode;
  label: string;
  href?: string;
  size?: ButtonOwnProps["size"];
  fullWidth?: boolean;
  mb?: number;
  ml?: number;
}

export default function CTAButton({
  variant,
  onClick,
  startIcon,
  label,
  href,
  size,
  fullWidth,
  mb,
  ml,
}: CTAButtonProps) {
  const Btn = (
    <Button
      size={size ?? "large"}
      startIcon={startIcon}
      variant={variant === "primary" ? "contained" : "outlined"}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        borderRadius: 8,
        mb,
        ml,
        py: size === "small" ? 1 : 2,
        px: size === "small" ? 2 : 4,
        ...(variant === "primary"
          ? {
              backgroundColor: (theme) => theme.palette.primary.dark,
              border: "1px solid #f8f7ff",
            }
          : {
              borderColor: (theme) => theme.palette.primary.dark,
              color: (theme) => theme.palette.primary.dark,
              "&:hover": {
                borderColor: (theme) => theme.palette.primary.main,
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "#f8f7ff",
              },
            }),
      }}
    >
      {label}
    </Button>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        {Btn}
      </Link>
    );
  }

  return Btn;
}
