import { useState } from "react";
import { useDispatch } from "react-redux";
import { increaseTypedWords } from "../store/App.store";

type InputEvent = React.ChangeEventHandler<HTMLInputElement> | undefined;
type FuncFilterSomeKeys =
  | React.KeyboardEventHandler<HTMLInputElement>
  | undefined;

const filteredKeys = ["Space", "Enter"];

export default function useInputText(wordToType: string) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const checkWord = () => {
    if (inputText === wordToType) {
      dispatch(increaseTypedWords);
      // setInputText("");
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

  const textDisplay = inputText
    .split("")
    .map((str, key) => (
      <span key={key}>{str === " " ? <span>&nbsp;</span> : str}</span>
    ));

  return { textDisplay, filterSomeKeys, inputText, type, filteredKeys };
}
