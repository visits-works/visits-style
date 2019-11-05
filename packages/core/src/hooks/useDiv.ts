import { useRef, AriaAttributes } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
import useForceUpdate from './useForceUpdate';

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

  const onExited = () => {
    if (mounted.current && div.current) {
      document.body.removeChild(div.current);
      mounted.current = false;
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      div.current = document.createElement('div');
      if (attrs) {
        Object.keys(attrs).map((key) => div.current!.setAttribute(key, String(attrs[key])));
      }
    }
    return onExited;
  }, [attrs]);

  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined' && show && div.current) {
      document.body.appendChild(div.current);
      mounted.current = true;
      update();
    }
  }, [show, update]);

  return [div.current, onExited];
}
