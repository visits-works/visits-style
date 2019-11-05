import { useRef, useCallback, AriaAttributes } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
import useForceUpdate from './useForceUpdate';
import isClient from '../utils/isClient';

interface Attributes extends AriaAttributes {
  role?: string;
  lang?: string;
  class?: string;
  hidden?: boolean;
  id?: string;
  tabIndex?: number;
  title?: string;
}

export default function useDiv(
  show: boolean, attrs?: Attributes,
): [HTMLDivElement | null, () => void] {
  const div = useRef<HTMLDivElement | null>(null);
  const mounted = useRef(false);
  const update = useForceUpdate();

  const onExited = useCallback(() => {
    if (mounted.current && div.current) {
      document.body.removeChild(div.current);
      mounted.current = false;
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isClient && !div.current) {
      const elem = document.createElement('div');
      if (attrs) {
        // @ts-ignore
        Object.keys(attrs).map((key) => elem.setAttribute(key, String(attrs[key])));
      }
      div.current = elem;
    }
    return onExited;
  // TODO: useLayoutEffect is triggered twice when attrs is in the deps
  }, [onExited]);

  useIsomorphicLayoutEffect(() => {
    if (isClient && show && div.current) {
      document.body.appendChild(div.current);
      mounted.current = true;
      update();
    }
  }, [show, update]);

  return [div.current, onExited];
}
