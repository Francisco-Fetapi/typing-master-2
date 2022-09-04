import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import doNotAnything from "../helpers/doNotAnything";
import { Levels } from "../Levels";
import {
  selectBackdropInfo,
  selectCurrentLevel,
  selectCurrentLevelInfo,
  selectPhraseSize,
  selectTimer,
  selectTimerPaused,
  selectTypedWords,
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

export default function useInputText(wordToType: string) {
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
  const timer = useSelector(selectTimer);
  const gamePaused = timerPaused && timer !== currentLevel.timeLimit;
  const inCasesToDoAnything =
    onTimeOver || gameFinished || backdrop.open || gamePaused;

  const location = useLocation();
  const inTraining = location.pathname === "/training";

  const checkWord = () => {
    if (onTimeOver) return doNotAnything();
    if (inputText === wordToType) {
      dispatch(increaseTypedWords());
      if (!inTraining) {
        dispatch(increasePoints(wordToType.length));
      }
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
        return;
      }
      if (!Levels[level + 1]) {
        dispatch(showMessageBackdrop(allLevelsFinished));
        return;
      }
      dispatch(showMessageBackdrop(gameOverAllWordsTyped));
    }
  }, [typedWords]);
  useEffect(() => {
    if (typedWords === 1) {
      dispatch(playTimer());
    }
  }, [typedWords]);

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
      color={str !== wordToType[key] ? "red" : "inherit"}
    >
      {str}
    </Text>
  ));

  return { textDisplay, error, filterSomeKeys, inputText, type, filteredKeys };
}
