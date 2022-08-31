import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimer, showMessageBackdrop } from "../store/App.store";
import useBackdrop from "./useBackdrop";
import {
  selectLevel,
  selectPhraseSize,
  selectTimeLimit,
  selectTimer,
  selectTimerPaused,
  selectTypedWords,
} from "../store/App.selectors";
import doNotAnything from "../helpers/doNotAnything";

export default function useTimer() {
  const timeLimit = useSelector(selectTimeLimit);
  const level = useSelector(selectLevel);
  const seconds = useSelector(selectTimer);
  const timerPaused = useSelector(selectTimerPaused);
  const toDecrease = timeLimit !== 0;
  const onTimeOver = toDecrease && seconds === 0;
  const backdrop = useBackdrop();
  const dispatch = useDispatch();
  const typedWords = useSelector(selectTypedWords);
  const phraseSize = useSelector(selectPhraseSize);

  const gameFinished = typedWords === phraseSize;

  let interval = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    resetTimer();
  }, [timeLimit]);

  const handleTimer = () => {
    interval.current = setTimeout(() => {
      if (timerPaused) return doNotAnything();
      if (seconds) {
        const value = toDecrease ? seconds - 1 : seconds + 1;
        dispatch(setTimer(value));
      }
    }, 1000);
  };

  function stopTimer() {
    if (interval.current) {
      clearTimeout(interval.current);
    }
  }
  function resetTimer() {
    stopTimer();
    dispatch(setTimer(timeLimit));
  }

  const onTimeLimit = () => {
    stopTimer();
    dispatch(showMessageBackdrop(backdrop.gameOverTimeLimit));
  };

  if (gameFinished) {
    stopTimer();
  }

  useEffect(() => {
    if (onTimeOver && !gameFinished) {
      onTimeLimit();
    } else if (!gameFinished) {
      handleTimer();
    }
  }, [seconds, gameFinished, timerPaused]);

  const data = {
    seconds: (seconds || 0) % 60,
    minutes: Math.floor((seconds || 0) / 60),
    onTimeOver,
    stopTimer,
    resetTimer,
    gameFinished,
  };

  return data;
}
