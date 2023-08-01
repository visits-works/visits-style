import React from 'react';

export default function stopPropagation(e?: React.MouseEvent<Element>) {
  if (!e) return;
  e.stopPropagation();
  e.preventDefault();
}
