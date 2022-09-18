import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useState } from "react";
import useActionsSpeedDial from "../hooks/useActionsSpeedDial";

export default function SpeedDialTooltip() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actions = useActionsSpeedDial();

  return (
    <Box
      sx={{
        // height: 50,
        position: "fixed",
        bottom: 16,
        right: 16,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions
          .filter((action) => action.show)
          .map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={action.onClick}
            />
          ))}
      </SpeedDial>
    </Box>
  );
}
