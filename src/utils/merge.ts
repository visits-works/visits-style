import { twMerge } from 'tailwind-merge';

export default function merge(a: string, b?: string) {
  if (!b) return a;
  return twMerge(a, b);
}
