import guidGenerator from "./guid";
import shuffle from "./shuffle";

export type Bars = {
  id: string;
  value: number;
  color?: string;
};

export default function randomBars(range: number): Array<Bars> {
  const bars = Array.from({ length: range }, (_, index) => ({
    id: guidGenerator(),
    value: Math.floor((100 / range) * index + 10),
  }));

  shuffle(bars);

  return bars;
}
