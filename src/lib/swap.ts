import { Bars } from "./randomBars";

export default function swap(
  a: Bars,
  b: Bars
) {
  return [
    { ...a, value: b.value },
    { ...b, value: a.value },
  ];
}
