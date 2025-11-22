"use client";

import theme from "@/app/theme";
import MenuItem from "@mui/material/MenuItem";
import {
  bindHover,
  bindMenu,
  usePopupState,
} from "material-ui-popup-state/hooks";
import PopupHoverMenu from "material-ui-popup-state/HoverMenu";
import { cloneElement, useRef } from "react";
import { StyledMenuItem } from "./HoverMenu.styles";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TriggerEl: React.ReactElement<any, any>;
  items: { label: string; onClick: () => void }[];
  gap?: number;
  delay?: number;
}

export const HoverMenu = ({ TriggerEl, items, gap, delay }: Props) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // Start close timer
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      popupState.close();
    }, delay);
  };

  // Cancel close timer
  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <>
      {cloneElement(TriggerEl, {
        ...bindHover(popupState),
        onMouseLeave: handleMouseLeave,
        onMouseEnter: handleMouseEnter,
      })}
      <PopupHoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: { mt: gap },
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
          },
        }}
      >
        {items.map((item) => (
          <StyledMenuItem
            key={item.label}
            onClick={() => {
              item.onClick();
              popupState.close();
            }}
          >
            {item.label}
          </StyledMenuItem>
        ))}
      </PopupHoverMenu>
    </>
  );
};
