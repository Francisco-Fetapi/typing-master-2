import { useState } from "react";

export default function useBoolean() {
  const [open, setOpen] = useState(false);

  return {
    open,
    handleOpen: () => {
      setOpen(true);
    },
    handleClose: () => {
      setOpen(false);
    },
  };
}
