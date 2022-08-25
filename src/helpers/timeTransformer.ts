export function timeTransformer(time: string) {
  // time format example 12m:44s;

  const [minutes, seconds] = time.split(":");
  let minutesNumber = +minutes.replace("m", "");
  let secondsNumber = +seconds.replace("s", "");

  return minutesNumber * 60 + secondsNumber;
}
