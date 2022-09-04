import { Stack } from "@mui/material";
import { MdTimer } from "react-icons/md";
import useTimer from "../hooks/useTimer";
import { Text } from "../styles/General";

export default function Timer() {
  const { seconds, minutes } = useTimer();
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      style={{ zoom: 1.4 }}
      className="grayscale-on-paused"
    >
      <MdTimer fontSize={20} />
      <Text>
        {Math.ceil(minutes).toString().padStart(2, "0")}m:
        {Math.ceil(seconds).toString().padStart(2, "0")}s
      </Text>
    </Stack>
  );
}
