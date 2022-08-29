import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayProgress from "../components/DisplayProgress";
import GameBackdrop from "../components/GameBackdrop";
import InputText from "../components/InputText";
import TextToType from "../components/TextToType";
import Timer from "../components/Timer";
import useGameLoop from "../hooks/useGameLoop";
import {
  selectBackdropInfo,
  selectCurrentLevel,
  selectLevel,
  selectWordToType,
} from "../store/App.selectors";
import { clearTypedWords, pauseTimer, setTimer } from "../store/App.store";
import { BoxColumnCenter, Text } from "../styles/General";

export default function Championship() {
  const wordToType = useSelector(selectWordToType);
  const level = useSelector(selectCurrentLevel);
  const levelLabel = useSelector(selectLevel);
  const backdropInfo = useSelector(selectBackdropInfo);
  useGameLoop();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setTimer(0));
      dispatch(pauseTimer());
      dispatch(clearTypedWords());
    };
  }, []);

  return (
    <BoxColumnCenter height="100vh" py={5}>
      <BoxColumnCenter mb={2}>
        <Text color="primary" variant="h4">
          Nivel {level + 1}
        </Text>
        <Text variant="subtitle2">{levelLabel}</Text>
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
      </BoxColumnCenter>
      <GameBackdrop {...backdropInfo} />
    </BoxColumnCenter>
  );
}
