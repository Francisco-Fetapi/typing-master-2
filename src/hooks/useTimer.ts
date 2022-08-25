import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMessageBackdrop } from "../store/App.store";
import useBackdrop from "./useBackdrop";
import { selectTimeLimit } from "../store/App.selectors";

export default function useTimer() {
  const timeLimit = useSelector(selectTimeLimit);
  const [seconds, setSeconds] = useState(timeLimit);
  const toDecrease = timeLimit !== 0;
  const backdrop = useBackdrop();
  const dispatch = useDispatch();

  let interval: any;

  const startTimer = () => {
    interval = setTimeout(() => {
      setSeconds(toDecrease ? seconds - 1 : seconds + 1);
    }, 1000);
  };

  // useEffect(() => {
  //   if (typedWords > 0 && !interval) {
  //     startTimer();
  //   }
  // }, [typedWords]);

  const onTimeLimit = () => {
    clearTimeout(interval);
    dispatch(showMessageBackdrop(backdrop.gameOverTimeLimit));
  };

  useEffect(() => {
    if (toDecrease && seconds === 0) {
      onTimeLimit();
    } else {
      startTimer();
    }
  }, [seconds]);

  const data = {
    seconds: seconds % 60,
    minutes: Math.floor(seconds / 60),
  };

  return data;
}
