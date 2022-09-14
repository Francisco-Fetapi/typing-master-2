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
  selectPhraseTraining,
} from "../store/App.selectors";
import {
  chooseRandomPhraseToTrain,
  clearTypedWords,
  hideMessageBackdrop,
  pauseTimer,
  setTimer,
} from "../store/App.store";
import { BoxColumnCenter, Text } from "../styles/General";

export default function Trainning() {
  const currentLevel = useSelector(selectPhraseTraining);
  const backdropInfo = useSelector(selectBackdropInfo);
  useGameLoop();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setTimer(currentLevel.timeLimit));
      dispatch(pauseTimer());
      dispatch(clearTypedWords());
      dispatch(hideMessageBackdrop());
      dispatch(chooseRandomPhraseToTrain());
    };
  }, []);

  return (
    <BoxColumnCenter height="100vh" py={5}>
      <BoxColumnCenter mb={1.5} className="grayscale-on-paused">
        <Text variant="h6" color="primary">
          MODO TREINO
        </Text>
      </BoxColumnCenter>
      <Timer />
      <BoxColumnCenter mt={2} className="grayscale-on-paused">
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
