import { useState } from "react";
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

export default function useInputText() {
  const [myText, setMyText] = useState("");
  const type: EventType = (e) => {
    if (notAllowedKeys.includes(e.key)) {
      return;
    }
    setMyText((prev) => prev + e.key);
  };
  window.onkeyup = type;

  return { myText, type };
}
