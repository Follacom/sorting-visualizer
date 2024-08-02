import { Bars } from "../randomBars";
import swap from "../swap";

export default function* bogoSort(
  arr: Array<Bars>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  while (!sorted(arr)) {
    arr = yield* shuffle(arr);
  }
  return arr;
}

function* shuffle(
  arr: Array<Bars>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  let m = arr.length,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    const next =
      arr[i].value > arr[m].value ? swap(arr[i], arr[m]) : [arr[i], arr[m]];
    yield next;
    [arr[i], arr[m]] = next;
  }

  return arr;
}

function sorted(arr: Array<Bars>) {
  let sorted = true;
  for (let index = arr.length - 1; index > 0; index--) {
    sorted = sorted && arr[index].value > arr[index - 1].value;
  }
  return sorted;
}

export const href = "/bogo";
