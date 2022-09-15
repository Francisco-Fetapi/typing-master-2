export function timeTransformer(time: string) {
  // time format example 12m:44s;

  const [minutes, seconds] = time.split(":");
  let minutesNumber = +minutes.replace("m", "");
  let secondsNumber = +seconds.replace("s", "");

  return minutesNumber * 60 + secondsNumber;
}

export function timeTransformer2(seconds: number) {
  if (seconds === Infinity) {
    return "Indeterminado";
  }
  const seconds2 = seconds % 60;
  const minutes = Math.floor(seconds / 60);

  return `${minutes.toString().padStart(2, "0")}m:${seconds2
    .toString()
    .padStart(2, "0")}s`;
}
