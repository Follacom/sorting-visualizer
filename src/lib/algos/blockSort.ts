import { Bars } from "../randomBars";
import mergeSort from "./mergeSort";

export default function* blockSort(
  arr: Array<Bars>,
  blockSize = arr.length / 5
) {
  const blocks = [];
  for (let i = 0; i < arr.length; i += blockSize) {
    const block = [];

    for (let j = i; j < i + blockSize && j < arr.length; j++) {
      block.push(arr[j]);
    }

    yield* mergeSort(block);
    blocks.push(block);
  }

  const result = [];
  while (blocks.length > 0) {
    let minIdx = 0;
    for (let i = 1; i < blocks.length; i++) {
      if (blocks[i][0].value < blocks[minIdx][0].value) {
        minIdx = i;
      }
    }

    
    result.push(blocks[minIdx][0]);
    blocks[minIdx].shift();

    if (blocks[minIdx].length === 0) {
      blocks.splice(minIdx, 1);
    }
  }

  return result;
}
