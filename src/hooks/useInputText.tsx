import { useState } from "react";

type InputEvent = React.ChangeEventHandler<HTMLInputElement> | undefined;

export default function useInputText() {
  const [inputText, setInputText] = useState("");

  const type: InputEvent = (e) => {
    setInputText(e.target.value);
  };

  const textDisplay = inputText
    .split("")
    .map((str, key) => (
      <span key={key}>{str === " " ? <span>&nbsp;</span> : str}</span>
    ));

  return { textDisplay, inputText, type };
}
