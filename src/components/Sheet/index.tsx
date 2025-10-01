import { useEffect, useMemo, useRef, type HTMLAttributes } from 'react';
import { useFloating, useTransitionStyles, FloatingOverlay, useId } from '@floating-ui/react';
import clsx from 'clsx';

import Portal from '../Portal';
import merge from '../../utils/merge';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** trueの場合、モーダルを表示します。 */
  open?: boolean;
  /**
   * モーダルの表示・非表示のアニメーション速度
   * @default '{ open: 250, close: 150 }'
   */
  timeout?: number | { open: number; close: number; };
  onOpenChange?: (open: boolean) => void;
  /** 開けた場合のコールバック */
  onOpen?: () => void;
  /** モーダルのtransition exitが完了した時に発火されるcallback */
  onExited?: () => void;
  overlay?: boolean;
  /**
   * sheetが表示されれう場所
   * @defaut 'right'
  */
  position?: 'left' | 'right' | 'top' | 'bottom';
  unstyled?: boolean;
}

const defaultTimeout = { open: 250, close: 150 };

export default function Sheet({
  open, timeout = defaultTimeout, onOpenChange, position = 'right', overlay, onExited, onOpen, ...rest
}: Props) {
  const nodeId = useId();
  const isTransMountedRef = useRef(false);
  const openRef = useRef(onOpen);
  const exitRef = useRef(onExited);

  const { refs, context } = useFloating({ open, onOpenChange, nodeId });
  const { isMounted, styles } = useTransitionStyles(context, {
    duration: timeout,
    initial() {
      let transform = 'translateX(75%)';
      if (position === 'left') {
        transform = 'translateX(-75%)';
      } else if (position === 'top') {
        transform = 'translateY(-75%)';
      } else if (position === 'bottom') {
        transform = 'translateY(75%)';
      }
      return { opacity: 0, transform };
    },
  });

  useEffect(() => {
    if (isTransMountedRef.current === isMounted) return;
    isTransMountedRef.current = isMounted;
    if (isMounted) {
      openRef.current?.();
      return;
    }

    exitRef.current?.();
  }, [isMounted]);

  const name = useMemo(() => clsx(
    'fixed transition-transform z-30',
    {
      'top-0 right-0 h-full max-h-screen': position === 'right',
      'top-0 left-0 h-full max-h-screen': position === 'left',
      'top-0 left-0 right-0 w-full max-w-screen': position === 'top',
      'bottom-0 left-0 right-0 w-full max-w-screen': position === 'bottom',
    },
  ), [position]);

  exitRef.current = onExited;
  openRef.current = onOpen;

  return (
    <Portal disabled={!isMounted}>
      {overlay ? (
        <FloatingOverlay
          className="bg-backdrop"
          style={{ opacity: styles.opacity }}
          onClick={() => onOpenChange?.(false)}
        />
      ) : null}
      <div
        ref={refs.setFloating}
        className={name}
        role="dialog"
        style={styles}
      >
        <SheetContent {...rest} />
      </div>
    </Portal>
  );
}

interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
  unstyled?: boolean;
}

export function SheetContent({ className, unstyled, ...rest }: SheetContentProps) {
  const name = useMemo(() => (unstyled ? className : merge(clsx(
    'relative bg-background min-w-full min-h-full border border-input shadow-lg',
  ), className)), [unstyled, className]);
  return <div className={name} {...rest} />;
}
