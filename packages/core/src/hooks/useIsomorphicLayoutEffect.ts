import { useEffect, useLayoutEffect } from 'react';
import isClient from '../utils/isClient';

const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
