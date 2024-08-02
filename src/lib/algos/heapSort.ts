import { Bars } from "../randomBars";
import swap from "../swap";

export function* heapSort(
  array: Array<{ id: string; value: number }>
): Generator<Array<Bars>, Array<Bars>, [Bars, Bars]> {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    yield* heapify(array, i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    const next = swap(array[0], array[i]);
    yield next;
    [array[0], array[i]] = next;

    yield* heapify(array, 0, i);
  }

  return array;
}

function* heapify(
  heap: Array<{ id: string; value: number }>,
  index: number,
  heapSize = heap.length
): Generator<Array<Bars>, void, [Bars, Bars]> {
  let largest = index;
  const left = index * 2 + 1,
    right = index * 2 + 2;

  if (left < heapSize && heap[left].value > heap[largest].value) {
    yield [heap[largest], heap[left]];
    largest = left;
  }
  if (right < heapSize && heap[right].value > heap[largest].value) {
    yield [heap[largest], heap[right]];
    largest = right;
  }
  if (largest !== index) {
    const next = swap(heap[index], heap[largest]);
    yield next;
    [heap[index], heap[largest]] = next;
    yield* heapify(heap, largest, heapSize);
  }
}
