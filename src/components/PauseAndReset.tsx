import { Button, ButtonGroup, Stack } from "@mui/material";
import { ReactElement } from "react";
import { MdPause, MdPlayArrow, MdRestartAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentLevelInfo,
  selectTimer,
  selectTimerPaused,
} from "../store/App.selectors";
import { pauseTimer, playTimer } from "../store/App.store";

interface IActionsPausePlay {
  text: string;
  icon: ReactElement;
  onClick(): void;
}

export default function PauseAndReset() {
  const timerPaused = useSelector(selectTimerPaused);
  const timer = useSelector(selectTimer);
  const level = useSelector(selectCurrentLevelInfo);
  const dispatch = useDispatch();
  const statusGame: IActionsPausePlay = timerPaused
    ? {
        text: "Retomar",
        icon: <MdPlayArrow />,
        onClick() {
          dispatch(playTimer());
        },
      }
    : {
        text: "Pausar",
        icon: <MdPause />,
        onClick() {
          dispatch(pauseTimer());
        },
      };

  return (
    <Stack
      justifyContent="center"
      style={{ display: timer === level.timeLimit ? "none" : "flex" }}
    >
      <ButtonGroup variant="contained" color="primary" size="small">
        <Button onClick={statusGame.onClick} startIcon={statusGame.icon}>
          {statusGame.text}
        </Button>
        <Button startIcon={<MdRestartAlt />}>Reiniciar</Button>
      </ButtonGroup>
    </Stack>
  );
}
