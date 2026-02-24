import clsx, { type ClassValue as ClsxValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ClassValue = ClsxValue;

export function cn(...args: ClsxValue[]) {
  if (!args.length) return '';
  return clsx(...args);
}

export function merge(a: string, b?: string) {
  if (!b) return a;
  return twMerge(a, b);
}
