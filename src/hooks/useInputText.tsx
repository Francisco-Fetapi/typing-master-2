import { useEffect, useState } from "react";
const notAllowedKeys = [
  "Shift",
  "Control",
  "CapsLock",
  "Backspace",
  "Escape",
  "Meta",
  "Alt",
  "ContextMenu",
  "Dead",
  "Enter",
];

type EventType = (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
type InputEvent = React.ChangeEventHandler<HTMLInputElement> | undefined;

export default function useInputText() {
  const [inputText, setInputText] = useState("");
  // const type: EventType = (e) => {
  //   if (notAllowedKeys.includes(e.key)) {
  //     return;
  //   }
  //   setMyText((prev) => prev + e.key);
  // };
  const type: InputEvent = (e) => {
    console.log(inputText);
    setInputText(e.target.value);
  };

  const textDisplay = inputText
    .split("")
    .map((str) => <span>{str === " " ? <span>&nbsp;</span> : str}</span>);

  return { textDisplay, inputText, type };
}
