import { useEffect, useLayoutEffect } from 'react';

const isClient = (
  typeof window !== 'undefined'
  && typeof window.document !== 'undefined'
  && typeof window.document.createElement !== 'undefined'
);

const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
