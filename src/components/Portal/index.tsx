import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

export interface Props {
  children: React.ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
}

export default function Portal({ children, container, disabled }: Props) {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (disabled) return setMountNode(null);
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
  }, [container, disabled]);

  return mountNode ? createPortal(children, mountNode) : null;
}
