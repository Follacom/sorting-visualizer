import { Bars } from "../randomBars";
import swap from "../swap";

export default function* cocktailSort(
  arr: Array<Bars>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  let isSorted = false,
    start = 0,
    end = arr.length;
  while (!isSorted) {
    for (let i = start; i < end - 1; i++) {
      let next = [arr[i], arr[i + 1]];
      if (arr[i].value > arr[i + 1].value) {
        next = swap(arr[i], arr[i + 1]);
        [arr[i], arr[i + 1]] = next;
        isSorted = false;
      }
      yield next;
    }

    end--;

    if (isSorted) break;

    isSorted = true;

    for (let j = end - 1; j > start; j--) {
      let next = [arr[j - 1], arr[j]];
      if (arr[j - 1].value > arr[j].value) {
        next = swap(arr[j - 1], arr[j]);
        [arr[j - 1], arr[j]] = next;
        isSorted = false;
      }
      yield next;
    }

    start++;
  }

  return arr;
}

export const href = "/cocktail"
