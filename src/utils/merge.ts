import clsx, { type ClassValue as ClsxValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ClassValue = ClsxValue;

export const cn = clsx;

export function merge(a: string, b?: string) {
  if (!b) return a;
  return twMerge(a, b);
}
