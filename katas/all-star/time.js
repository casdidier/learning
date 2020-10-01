function toTime(time) {
  const h = Math.floor(time / 3600);
  const m = Math.floor(time % 3600 / 60);
  return `${h} hour(s) and ${m} minute(s)`;
}

https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript 