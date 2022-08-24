import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTypedWords } from "../store/App.selectors";

export default function useTimer(totalTime: number) {
  const [seconds, setSeconds] = useState(totalTime);
  const typedWords = useSelector(selectTypedWords);
  const toDecrease = totalTime !== 0;

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

  useEffect(() => {
    if (toDecrease && seconds === 0) {
      clearInterval(interval);
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
