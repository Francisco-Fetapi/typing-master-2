import { useEffect, useState } from "react";

export default function useTimer(totalTime: number) {
  const [seconds, setSeconds] = useState(totalTime);
  const toDecrease = totalTime !== 0;

  let interval: any;

  const startTimer = () => {
    interval = setTimeout(() => {
      setSeconds(toDecrease ? seconds - 1 : seconds + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, [seconds]);

  const data = {
    seconds: seconds % 60,
    minutes: Math.floor(seconds / 60),
  };

  return data;
}
