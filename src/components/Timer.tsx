import { Stack } from "@mui/material";
import { MdTimer } from "react-icons/md";
import useTimer from "../hooks/useTimer";
import { Text } from "../styles/General";

interface Props {
  totalTime: number;
}

export default function Timer({ totalTime }: Props) {
  const { seconds, minutes } = useTimer(totalTime);
  return (
    <Stack direction="row" gap={1} alignItems="center" style={{ zoom: 1.4 }}>
      <MdTimer fontSize={20} />
      <Text>
        {Math.ceil(minutes).toString().padStart(2, "0")}m:
        {Math.ceil(seconds).toString().padStart(2, "0")}s
      </Text>
    </Stack>
  );
}
