export default function merge(a: string, b?: string) {
  if (!b) return a;
  // eslint-disable-next-line prefer-template
  return a + ' ' + b;
}
