import { Bars } from "../randomBars";
import swap from "../swap";

export default function* bubbleSort(
  arr: Array<Bars>
): Generator<Array<Bars>, void, [Bars, Bars]> {
  for (let index = 0; index < arr.length; index++) {
    for (let jdex = 0; jdex < arr.length - index - 1; jdex++) {
      const next =
        arr[jdex].value > arr[jdex + 1].value
          ? swap(arr[jdex], arr[jdex + 1])
          : [arr[jdex], arr[jdex + 1]];
      yield next;
      [arr[jdex], arr[jdex + 1]] = next;
    }
  }
}

export const href = "/bubble";
