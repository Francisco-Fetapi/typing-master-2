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
  selectPhraseTraining,
  selectWordToType,
} from "../store/App.selectors";
import {
  clearTypedWords,
  hideMessageBackdrop,
  pauseTimer,
  setTimer,
} from "../store/App.store";
import { BoxColumnCenter, Text } from "../styles/General";

export default function Trainning() {
  const wordToType = useSelector(selectWordToType);
  // const level = useSelector(selectCurrentLevel);
  // const levelLabel = useSelector(selectLevel);
  const currentLevel = useSelector(selectPhraseTraining);
  const backdropInfo = useSelector(selectBackdropInfo);
  useGameLoop();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(currentLevel);
    return () => {
      dispatch(setTimer(currentLevel.timeLimit));
      dispatch(pauseTimer());
      dispatch(clearTypedWords());
      dispatch(hideMessageBackdrop());
    };
  }, []);

  return (
    <BoxColumnCenter height="100vh" py={5}>
      <BoxColumnCenter mb={1.5}>
        <Text variant="h6" color="primary">
          MODO TREINO
        </Text>
      </BoxColumnCenter>
      <Timer />
      <BoxColumnCenter mt={2}>
        <InputText text={wordToType} />
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
