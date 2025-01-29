import { type HTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';

import Button from 'elements/Button';
import CloseIcon from 'elements/Icons/Close';

interface DialogHeaderProps extends HTMLAttributes<HTMLElement> {
  onClose?: () => void;
}
export default function DialogHeader({ className, onClose, children, ...rest }: DialogHeaderProps) {
  const headerName = useMemo(() => clsx(
    'relative flex flex-col space-y-2 text-center text-xl mb-2 sm:text-left',
    className,
  ), [className]);
  return (
    <header className={headerName} {...rest}>
      {children}
      {onClose ? (
        <Button className="absolute top-0 right-0 w-6 h-6 p-1.5" variant="ghost" size="icon" onClick={onClose}>
          <CloseIcon />
        </Button>
      ) : null}
    </header>
  );
}
