import { Box, Button, useTheme } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideMessageBackdrop, resetAllState } from "../store/App.store";
import { BoxColumnCenter, Text } from "../styles/General";

export interface IButton {
  text: string;
  handleClick?: () => void;
}

type IColors =
  | "success"
  | "error"
  | "inherit"
  | "primary"
  | "secondary"
  | "info"
  | "warning";

interface IVariants {
  success: IColors | string;
  error: IColors | string;
}
export interface Props {
  title: string;
  message: string;
  open: boolean;
  type?: keyof IVariants;
  primaryButton?: IButton;
  secondaryButton?: IButton;
  onMount?: () => void;
}

// const variants: IVariants = {
//   success: "greenyellow",
//   error: "red",
// };
// const buttonColorVariants: IVariants = {
//   success: "success",
//   error: "error",
// };

export default function GameBackdrop({
  open,
  title,
  message,
  type = "success",
  primaryButton,
  secondaryButton,
  onMount,
}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const variants: IVariants = {
    success: theme.palette.success.main,
    error: theme.palette.error.main,
  };

  const variant = variants[type];
  const buttonColorVariant = variants[type] as IColors;

  function goToHome() {
    dispatch(resetAllState());
    navigate("/", { replace: true });
  }
  function close() {
    dispatch(hideMessageBackdrop());
  }

  useEffect(() => {
    if (open) {
      onMount && onMount();
    } else {
      window.onkeyup = null;
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      window.onkeyup = (e) => {
        if (e.key === "Enter") {
          console.log(e.key);
          if (typeof primaryButton?.handleClick === "function") {
            primaryButton.handleClick();
          } else {
            close();
          }
        }
      };
    } else {
      window.onkeyup = null;
    }
  }, [open]);

  return (
    <div>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "rgba(0,0,0,.9)",
        }}
        open={open}
      >
        <Box>
          <BoxColumnCenter>
            <Text
              // color={variant}
              variant="h5"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: variant,
              }}
            >
              {title}
            </Text>
            <Box mt={1.5} width={0.85}>
              <Text align="center" variant="subtitle2" color="white">
                {message}
              </Text>
            </Box>
          </BoxColumnCenter>

          <BoxColumnCenter mt={3}>
            {primaryButton && (
              <Button
                // color={buttonColorVariant}
                variant="contained"
                onClick={primaryButton.handleClick || close}
              >
                {primaryButton.text}
              </Button>
            )}
            <Box mt={1} />
            {secondaryButton && (
              <Button
                // color="default"
                variant="text"
                onClick={secondaryButton.handleClick || goToHome}
              >
                {secondaryButton.text}
              </Button>
            )}
          </BoxColumnCenter>
        </Box>
      </Backdrop>
    </div>
  );
}
