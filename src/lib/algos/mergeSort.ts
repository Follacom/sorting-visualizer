import { Bars } from "../randomBars";
import swap from "../swap";

export default function* mergeSort(
  arr: Array<Bars>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }

  const mid = Math.ceil(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);

  const merged1 = yield* mergeSort(left);
  const merged2 = yield* mergeSort(right);

  return yield* merge(merged1, merged2);
}

function* merge(
  left: Array<{ id: string; value: number }>,
  right: Array<{ id: string; value: number }>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  const array = [];
  while (left.length && right.length) {
    let next;
    if (left[0].value > right[0].value) {
      next = swap(left[0], right[0]);
      [left[0], right[0]] = next;
      left.push(right.shift()!);
      array.push(left.shift()!);
      for (let index = left.length - 1; index > 0; index--) {
        [left[index - 1], left[index]] = swap(left[index - 1], left[index]);
      }
    } else {
      next = [left[0], right[0]];
      array.push(left.shift()!);
    }
    yield next;
  }

  return [...array, ...left, ...right];
}
