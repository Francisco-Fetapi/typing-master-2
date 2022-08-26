import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPhraseSize, selectTypedWords } from "../store/App.selectors";
import { increaseTypedWords, showMessageBackdrop } from "../store/App.store";
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
    if (inputText === wordToType && !onTimeOver) {
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
      dispatch(showMessageBackdrop(gameOverAllWordsTyped));
    }
  }, [typedWords]);

  const filterSomeKeys: FuncFilterSomeKeys = (e) => {
    if (filteredKeys.includes(e.code)) {
      checkWord();
      return false;
    }
  };

  const type: InputEvent = (e) => {
    const value = e.target.value;
    if (onTimeOver) return;
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
