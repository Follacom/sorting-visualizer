import bogoSort, { href as bogoHref } from "./bogoSort";
import bubbleSort, { href as bubbleHref } from "./bubbleSort";
import cocktailSort, { href as cocktailHref } from "./cocktailSort";
import gnomeSort from "./gnomeSort";
import { heapSort } from "./heapSort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";

export default [
  {
    sort: bubbleSort,
    href: bubbleHref,
    title: "Bubble Sort",
  },
  {
    sort: bogoSort,
    href: bogoHref,
    title: "Bogo Sort",
  },
  {
    sort: cocktailSort,
    href: cocktailHref,
    title: "Cocktail Sort",
  },
  {
    sort: gnomeSort,
    href: cocktailHref,
    title: "Gnome Sort",
  },
  {
    sort: mergeSort,
    href: cocktailHref,
    title: "Merge Sort",
  },
  {
    sort: insertionSort,
    href: cocktailHref,
    title: "Insertion Sort",
  },
  {
    sort: heapSort,
    href: cocktailHref,
    title: "Heap Sort",
  },
];
