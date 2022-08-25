import { Box, Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
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
}

const variants: IVariants = {
  success: "greenyellow",
  error: "red",
};
const buttonColorVariants: IVariants = {
  success: "success",
  error: "error",
};

export default function GameBackdrop({
  open,
  title,
  message,
  type = "success",
  primaryButton,
  secondaryButton,
}: Props) {
  const variant = variants[type];
  const buttonColorVariant = buttonColorVariants[type] as IColors;
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
              color={variant}
              variant="h5"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              {title}
            </Text>
            <Box mt={1.5}>
              <Text variant="subtitle2" color="white">
                {message}
              </Text>
            </Box>
          </BoxColumnCenter>

          <BoxColumnCenter mt={3}>
            {primaryButton && (
              <Button color={buttonColorVariant} variant="contained">
                {primaryButton.text}
              </Button>
            )}
            <Box mt={1} />
            {secondaryButton && (
              <Button color="secondary" variant="contained">
                {secondaryButton.text}
              </Button>
            )}
          </BoxColumnCenter>
        </Box>
      </Backdrop>
    </div>
  );
}
