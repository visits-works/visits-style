import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface Props {
  children: React.ReactNode;
  container?: HTMLElement;
  disabled?: boolean;
}

const Portal = React.forwardRef(({ children, container, disabled }: Props, ref) => {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (disabled) return;
    setMountNode(container || document.body);
  }, [container, disabled]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
});
Portal.displayName = 'Portal';

export default Portal;
