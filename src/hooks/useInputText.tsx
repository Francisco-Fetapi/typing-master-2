import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import doNotAnything from "../helpers/doNotAnything";
import { selectPhraseSize, selectTypedWords } from "../store/App.selectors";
import {
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

const filteredKeys = ["Space", "Enter"];

export default function useInputText(wordToType: string) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const typedWords = useSelector(selectTypedWords);
  const phraseSize = useSelector(selectPhraseSize);
  const { onTimeOver } = useTimer();
  const { gameOverAllWordsTyped } = useBackdrop();

  const checkWord = () => {
    if (onTimeOver) return doNotAnything();
    if (inputText === wordToType) {
      dispatch(increaseTypedWords());
      setInputText("");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [inputText]);

  useEffect(() => {
    setInputText("");
  }, [onTimeOver]);

  useEffect(() => {
    if (typedWords === phraseSize) {
      dispatch(pauseTimer());
      dispatch(showMessageBackdrop(gameOverAllWordsTyped));
    }
  }, [typedWords]);
  useEffect(() => {
    if (typedWords === 1) {
      dispatch(playTimer());
    }
  }, [typedWords]);

  const filterSomeKeys: FuncFilterSomeKeys = (e) => {
    if (onTimeOver) return doNotAnything();
    if (filteredKeys.includes(e.code)) {
      checkWord();
      return false;
    }
  };

  const type: InputEvent = (e) => {
    if (onTimeOver) return doNotAnything();
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
