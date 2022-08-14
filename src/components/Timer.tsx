import { Stack } from "@mui/material";
import { MdTimer } from "react-icons/md";
import useTimer from "../hooks/useTimer";
import { Text } from "../styles/General";

interface Props {
  totalSeconds: number;
}

export default function Timer({ totalSeconds }: Props) {
  const { milisseconds, seconds, minutes } = useTimer(totalSeconds);
  return (
    <Stack direction="row" gap={1} alignItems="center" style={{ zoom: 1.4 }}>
      <MdTimer fontSize={20} />
      <Text>
        {minutes}m:{seconds}s:{milisseconds}ms
      </Text>
    </Stack>
  );
}
