import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTypedWords } from "../store/App.selectors";
import { increaseTypedWords } from "../store/App.store";
import { Text } from "../styles/General";

type InputEvent = React.ChangeEventHandler<HTMLInputElement> | undefined;
type FuncFilterSomeKeys =
  | React.KeyboardEventHandler<HTMLInputElement>
  | undefined;

const filteredKeys = ["Space", "Enter"];

export default function useInputText(wordToType: string) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const typedWords = useSelector(selectTypedWords);

  const checkWord = () => {
    if (inputText === wordToType) {
      dispatch(increaseTypedWords());
      setInputText("");
    }
  };

  const filterSomeKeys: FuncFilterSomeKeys = (e) => {
    if (filteredKeys.includes(e.code)) {
      checkWord();
      return false;
    }
  };

  const type: InputEvent = (e) => {
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

  return { textDisplay, filterSomeKeys, inputText, type, filteredKeys };
}
