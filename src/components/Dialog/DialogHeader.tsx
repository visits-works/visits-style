import { type HTMLAttributes, type ReactNode, useMemo } from 'react';
import clsx from 'clsx';

import Button from 'elements/Button';

interface DialogHeaderProps extends HTMLAttributes<HTMLElement> {
  closeIcon: ReactNode;
  onClose?: () => void;
}
export default function DialogHeader({
  className, onClose, children, closeIcon, ...rest
}: DialogHeaderProps) {
  const headerName = useMemo(() => clsx(
    'relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left',
    className,
  ), [className]);
  return (
    <header className={headerName} {...rest}>
      {children}
      {onClose ? (
        <Button className="absolute top-0 right-0 p-1.5" variant="ghost" size="none" onClick={onClose}>
          {closeIcon}
        </Button>
      ) : null}
    </header>
  );
}
