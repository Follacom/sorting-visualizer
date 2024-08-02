import { Bars } from "./randomBars";

export default function swap(a: Bars, b: Bars, key: keyof Bars = "value") {
  return [
    { ...a, [key]: b[key] },
    { ...b, [key]: a[key] },
  ];
}
