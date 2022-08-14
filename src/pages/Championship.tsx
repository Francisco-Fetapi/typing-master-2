import { Box } from "@mui/material";
import Timer from "../components/Timer";

export default function Championship() {
  return (
    <Box>
      <Timer totalSeconds={27000} />
    </Box>
  );
}
