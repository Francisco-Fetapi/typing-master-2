import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayProgress from "../components/DisplayProgress";
import GameBackdrop from "../components/GameBackdrop";
import InputText from "../components/InputText";
import PauseAndReset from "../components/PauseAndReset";
import TextToType from "../components/TextToType";
import Timer from "../components/Timer";
import useGameLoop from "../hooks/useGameLoop";
import {
  selectBackdropInfo,
  selectCurrentLevel,
  selectCurrentLevelInfo,
  selectLevel,
  selectTimerPaused,
  selectTypedWords,
  selectWordToType,
} from "../store/App.selectors";
import {
  clearTypedWords,
  hideMessageBackdrop,
  pauseTimer,
  setTimer,
} from "../store/App.store";
import { BoxColumnCenter, Text } from "../styles/General";

export default function Championship() {
  const level = useSelector(selectCurrentLevel);
  const levelLabel = useSelector(selectLevel);
  const currentLevel = useSelector(selectCurrentLevelInfo);
  const backdropInfo = useSelector(selectBackdropInfo);

  useGameLoop();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideMessageBackdrop());
    return () => {
      dispatch(setTimer(currentLevel.timeLimit));
      dispatch(pauseTimer());
      dispatch(clearTypedWords());
      dispatch(hideMessageBackdrop());
    };
  }, []);

  return (
    <BoxColumnCenter height="100vh" py={5}>
      <BoxColumnCenter mb={2} className="grayscale-on-paused">
        <Text color="primary" variant="h4">
          Nivel {level + 1}
        </Text>
        <Text variant="subtitle2">{levelLabel}</Text>
      </BoxColumnCenter>
      <Timer />
      <BoxColumnCenter mt={2}>
        <InputText />
      </BoxColumnCenter>
      <BoxColumnCenter mt={2} maxWidth={600} px={3}>
        <TextToType />
      </BoxColumnCenter>
      <div style={{ flexGrow: 1 }} />
      <BoxColumnCenter mt={2}>
        <DisplayProgress />
        <PauseAndReset />
      </BoxColumnCenter>
      <GameBackdrop {...backdropInfo} />
    </BoxColumnCenter>
  );
}
