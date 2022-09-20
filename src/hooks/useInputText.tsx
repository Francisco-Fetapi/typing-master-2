import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { TrainingContext } from "../contexts/TrainingContextProvider";
import doNotAnything from "../helpers/doNotAnything";
import { Levels } from "../Level";
import {
  selectBackdropInfo,
  selectCurrentLevel,
  selectCurrentLevelInfo,
  selectPhraseSize,
  selectTimer,
  selectTimerPaused,
  selectTypedWords,
  selectWordToType,
} from "../store/App.selectors";
import {
  increasePoints,
  increaseTypedWords,
  pauseTimer,
  playTimer,
  showMessageBackdrop,
} from "../store/App.store";
import { Text } from "../styles/General";
import useBackdrop from "./useBackdrop";
import useTimer from "./useTimer";

type InputEvent = React.ChangeEventHandler<HTMLInputElement> | undefined;
type FuncFilterSomeKeys =
  | React.KeyboardEventHandler<HTMLInputElement>
  | undefined;

const filteredKeys = ["Space", "Enter"]; //to complete typing

export default function useInputText() {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const typedWords = useSelector(selectTypedWords);
  const phraseSize = useSelector(selectPhraseSize);
  const { onTimeOver, gameFinished } = useTimer();
  const { gameOverAllWordsTyped, allLevelsFinished } = useBackdrop();
  const backdrop = useSelector(selectBackdropInfo);
  const level = useSelector(selectCurrentLevel);
  const currentLevel = useSelector(selectCurrentLevelInfo);
  const timerPaused = useSelector(selectTimerPaused);
  const wordToType = useSelector(selectWordToType);
  const timer = useSelector(selectTimer);
  const location = useLocation();
  const { handleOpen: openModalTrainingResult } = useContext(TrainingContext);
  const gamePaused = timerPaused && timer !== currentLevel.timeLimit;
  const inCasesToDoAnything =
    onTimeOver || gameFinished || backdrop.open || gamePaused;

  const inTraining = location.pathname === "/training";

  const checkWord = () => {
    if (onTimeOver) return doNotAnything();
    if (inputText === wordToType) {
      dispatch(increaseTypedWords());
      // if (!inTraining) {
      //   dispatch(increasePoints(wordToType.length));
      // }
      setInputText("");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setInputText("");
  }, [onTimeOver, gameFinished, typedWords]);

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [inputText]);

  useEffect(() => {
    if (typedWords === phraseSize) {
      dispatch(pauseTimer());
      if (inTraining) {
        console.log("Treino terminou");
        openModalTrainingResult();
        return;
      } else {
        dispatch(increasePoints(currentLevel.pointsToIncrease()));
      }

      if (!Levels[level + 1]) {
        dispatch(showMessageBackdrop(allLevelsFinished));
        return;
      }
      dispatch(showMessageBackdrop(gameOverAllWordsTyped));
    }
  }, [typedWords]);
  // useEffect(() => {
  //   if (typedWords === 1) {
  //     dispatch(playTimer());
  //   }
  // }, [typedWords]);
  useEffect(() => {
    console.log(currentLevel.timeLimit);
  }, [currentLevel]);
  useEffect(() => {
    if (inputText.length > 0 && typedWords === 0 && timerPaused) {
      dispatch(playTimer());
    }
  }, [inputText]);

  const filterSomeKeys: FuncFilterSomeKeys = (e) => {
    if (inCasesToDoAnything) return doNotAnything();
    if (filteredKeys.includes(e.code)) {
      checkWord();
      return false;
    }
  };

  const type: InputEvent = (e) => {
    if (inCasesToDoAnything) return doNotAnything();
    const value = e.target.value;
    setInputText(value.trim());
  };

  const textDisplay = inputText.split("").map((str, key) => (
    <Text
      component="span"
      key={key}
      variant="h4"
      // color={str !== wordToType[key] ? "red" : "inherit"}
      sx={(theme) => ({
        color: str !== wordToType[key] ? theme.palette.error.main : "inherit",
      })}
    >
      {str}
    </Text>
  ));

  return { textDisplay, error, filterSomeKeys, inputText, type, filteredKeys };
}
