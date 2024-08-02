import { Bars } from "../randomBars";
import swap from "../swap";

export default function* insertionSort(
  arr: Array<Bars>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    console.log("current", current.value);
    let j = i;

    while (j > 0 && current.value < arr[j - 1].value) {
      console.log(arr[j].value, arr[j - 1].value);
      console.log("----");
      const next = swap(arr[j], arr[j - 1]);
      yield next;
      [arr[j], arr[j - 1]] = next;
      j--;
    }
  }

  return arr;
}
