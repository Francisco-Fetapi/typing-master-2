import React from "react";

export default function useTimer(totalSeconds: number) {
  let milisseconds = 0;
  let seconds = 0;
  let minutes = 0;

  return { milisseconds, seconds, minutes, totalSeconds };
}
