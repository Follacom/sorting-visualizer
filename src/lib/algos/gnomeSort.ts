import { Bars } from "../randomBars";
import swap from "../swap";

export default function* gnomeSort(
  arr: Array<Bars>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  let i = 1; // start at 1 because we're comparing i-1 to i
  let j = 2; // start at 2 because we're comparing i-1 to i
  while (i < arr.length) {
    let next;
    if (arr[i - 1].value <= arr[i].value) {
      next = [arr[i - 1], arr[i]];
      i = j;
      j++;
    } else {
      next = swap(arr[i - 1], arr[i]);
      [arr[i - 1], arr[i]] = next;
      i--;
      if (i === 0) {
        i = j;
        j++;
      }
    }
    yield next;
  }

  return arr;
}
