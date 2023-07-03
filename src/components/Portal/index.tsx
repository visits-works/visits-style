import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

export interface Props {
  children: React.ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
}

const Portal = React.forwardRef(({ children, container, disabled }: Props, ref) => {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (disabled) {
      setMountNode(null);
      return;
    }
    if (!container) {
      let dom = document.getElementById('visits-style-portals');
      if (!dom) {
        dom = document.createElement('div');
        dom.id = 'visits-style-portals';
        document.body.appendChild(dom);
      }
      setMountNode(dom);
      return;
    }
    setMountNode(container);
  }, [container, disabled]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
});
Portal.displayName = 'Portal';

export default Portal;
