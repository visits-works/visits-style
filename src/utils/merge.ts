
export default function merge(a: string, b?: string) {
  if (!b) return a;
  return a + ' ' + b;
}
