import { Box, Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { BoxColumnCenter, Text } from "../styles/General";

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

export default function GameBackdrop({
  open,
  title,
  message,
  primaryButton,
  secondaryButton,
}: Props) {
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
              color="primary"
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
              <Button color="primary" variant="contained">
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
