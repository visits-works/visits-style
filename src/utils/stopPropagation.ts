import type { MouseEvent } from 'react';

export default function stopPropagation(e?: MouseEvent<Element>) {
  if (!e) return;
  e.stopPropagation();
  e.preventDefault();
}
