import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface IButtonBackdrop {
  text: string;
  handleClick?: () => void;
}

interface Props {
  title: string;
  message: string;
  open: boolean;
  primaryButton?: IButtonBackdrop;
  secondaryButton?: IButtonBackdrop;
}

export default function GameBackdrop({ open }: Props) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
