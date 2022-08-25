import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMessageBackdrop } from "../store/App.store";
import useBackdrop from "./useBackdrop";
import {
  selectPhraseSize,
  selectTimeLimit,
  selectTypedWords,
} from "../store/App.selectors";

export default function useTimer() {
  const timeLimit = useSelector(selectTimeLimit);
  const [seconds, setSeconds] = useState(timeLimit);
  const toDecrease = timeLimit !== 0;
  const onTimeOver = toDecrease && seconds === 0;
  const backdrop = useBackdrop();
  const dispatch = useDispatch();
  const typedWords = useSelector(selectTypedWords);
  const phraseSize = useSelector(selectPhraseSize);

  const gameFinished = typedWords === phraseSize;

  let interval: any;

  const handleTimer = () => {
    interval = setTimeout(() => {
      setSeconds(toDecrease ? seconds - 1 : seconds + 1);
    }, 1000);
  };

  // useEffect(() => {
  //   if (typedWords > 0 && !interval) {
  //     handleTimer();
  //   }
  // }, [typedWords]);

  function stopTimer() {
    clearTimeout(interval);
  }
  function resetTimer() {
    setSeconds(timeLimit);
  }

  const onTimeLimit = () => {
    stopTimer();
    dispatch(showMessageBackdrop(backdrop.gameOverTimeLimit));
  };

  useEffect(() => {
    if (onTimeOver) {
      onTimeLimit();
    } else if (!gameFinished) {
      handleTimer();
    }
  }, [seconds]);

  const data = {
    seconds: seconds % 60,
    minutes: Math.floor(seconds / 60),
    onTimeOver,
    stopTimer,
    resetTimer,
  };

  return data;
}
