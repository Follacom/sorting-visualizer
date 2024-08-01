export default function swap(
  a: { id: string; value: number },
  b: { id: string; value: number }
) {
  return [
    { ...a, value: b.value },
    { ...b, value: a.value },
  ];
}
