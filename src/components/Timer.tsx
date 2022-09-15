import { Stack } from "@mui/material";
import { MdTimer } from "react-icons/md";
import useTimer from "../hooks/useTimer";
import { Text } from "../styles/General";

export default function Timer() {
  const { timeString } = useTimer();
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      style={{ zoom: 1.4 }}
      className="grayscale-on-paused"
    >
      <MdTimer fontSize={20} />
      <Text data-testid="timer">{timeString}</Text>
    </Stack>
  );
}
