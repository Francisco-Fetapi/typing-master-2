import { useState } from "react";

export default function useGameBackdrop() {
  const [open, setOpen] = useState(false);

  return {
    open,
    handleOpen: () => setOpen(true),
    handleClose: () => setOpen(false),
  };
}
