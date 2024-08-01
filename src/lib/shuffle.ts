import type randomBars from "./randomBars";
import swap from "./swap";

export default function shuffle(bars: ReturnType<typeof randomBars>) {
  let l = bars.length,
    i;
  while (l) {
    i = Math.floor(Math.random() * l--);
    [bars[i], bars[l]] = swap(bars[i], bars[l]);
  }
  return bars;
}
