import type { HTMLAttributes, ReactNode } from 'react';

import Button from 'elements/Button';
import Base from 'elements/Base';

interface DialogHeaderProps extends HTMLAttributes<HTMLElement> {
  closeIcon: ReactNode;
  onClose?: () => void;
}
export default function DialogHeader({
  onClose, children, closeIcon, ...rest
}: DialogHeaderProps) {
  return (
    <Base as="header" classList={['relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left']} {...rest}>
      {children}
      {onClose ? (
        <Button className="absolute top-0 right-0 p-1.5" variant="ghost" size="none" onClick={onClose}>
          {closeIcon}
        </Button>
      ) : null}
    </Base>
  );
}
