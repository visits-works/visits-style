import { useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

export interface Props {
  children: ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
}

export default function Portal({ children, container, disabled }: Props) {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!container) {
      let dom = document.getElementById('visits-style-portals');
      if (!dom) {
        dom = document.createElement('div');
        dom.id = 'visits-style-portals';
        document.body.appendChild(dom);
      }
      return setMountNode(dom);
    }
    setMountNode(container);
  }, [container]);

  if (disabled || !mountNode) return null;
  return createPortal(children, mountNode);
}
