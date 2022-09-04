import { Button, ButtonGroup, Stack } from "@mui/material";
import { ReactElement } from "react";
import { MdPause, MdPlayArrow, MdRestartAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentLevelInfo,
  selectTimer,
  selectTimerPaused,
  selectTypedWords,
} from "../store/App.selectors";
import {
  clearTypedWords,
  pauseTimer,
  playTimer,
  setTimer,
} from "../store/App.store";

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
  const typedWords = useSelector(selectTypedWords);
  const gameNotStarted = timer === level.timeLimit && typedWords === 0;
  const gameFinished = level.numWords === typedWords;
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

  function restart() {
    dispatch(clearTypedWords());
    dispatch(pauseTimer());
    dispatch(setTimer(level.timeLimit));
  }

  if (gameFinished) {
    return <div />;
  }
  return (
    <Stack
      justifyContent="center"
      className="no-grayscale-on-paused"
      style={{ display: gameNotStarted ? "none" : "flex" }}
    >
      <ButtonGroup variant="contained" color="primary" size="small">
        <Button onClick={statusGame.onClick} startIcon={statusGame.icon}>
          {statusGame.text}
        </Button>
        <Button
          onClick={restart}
          startIcon={<MdRestartAlt />}
          disabled={!timerPaused}
        >
          Reiniciar
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
