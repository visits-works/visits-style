import { type HTMLAttributes, useRef, useEffect, type ReactNode } from 'react';

import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * ボタンなどの表示するラベル\
   * showを変更するロジックのイベントが必要となります
  */
  header: ReactNode;
  /** trueの場合、内容を開きます */
  show: boolean;
  /**
   * アニメーションの時間\
   * 0に設定すると、即時に反応します
   * @default 300
   */
  timeout?: number;
}

export default function Accordion({ header, show, children, timeout = 300, ...rest }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prevHeight = useRef<number>(0);
  const timeoutRef = useRef<number>(0);
  const init = useRef(true);

  useEffect(() => { timeoutRef.current = timeout; }, [timeout]);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.style.overflow = 'hidden';
    ref.current.style.opacity = '1';

    if (init.current) {
      init.current = false;
      ref.current.style.height = show ? 'auto' : '0px';
      if (show) {
        // cache prev calculated height after 1 frame draw
        window.requestAnimationFrame(() => {
          if (!ref.current) return;
          prevHeight.current = ref.current.offsetHeight;
        });
      } else {
        // explicitly calculate auto height
        window.requestAnimationFrame(() => {
          if (!ref.current) return;
          ref.current.style.height = 'auto';
          prevHeight.current = ref.current.offsetHeight;
          ref.current.style.height = '0px';
        });
        ref.current.style.opacity = '0';
      }
      return;
    }

    if (!show) {
      ref.current.style.height = `${prevHeight.current}px`;
    }

    const frameIds = [] as number[];
    frameIds[0] = window.requestAnimationFrame(() => {
      frameIds[1] = window.requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.height = `${show ? prevHeight.current : 0}px`;
        ref.current.style.opacity = show ? '1' : '0';
      });
    });

    let timeoutId: number;
    const timeoutCallback = () => {
      if (!ref.current) return;
      if (show) {
        ref.current.style.height = 'auto';
        ref.current.style.overflow = '';
        ref.current.style.opacity = '';

        // cache prev calculated height after 1 frame draw
        window.requestAnimationFrame(() => {
          if (ref.current) {
            prevHeight.current = ref.current.offsetHeight;
          }
        });
      } else {
        ref.current.style.height = '0px';
      }
    };

    if (timeoutRef.current === 0) {
      timeoutCallback();
    } else {
      timeoutId = window.setTimeout(timeoutCallback, timeoutRef.current);
    }

    return () => {
      frameIds.forEach(window.cancelAnimationFrame);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [show]);

  return (
    <div {...rest}>
      {header}
      <div
        className="transition-all ease-in-out overflow-hidden"
        role="region"
        aria-hidden={!show}
        ref={ref}
        style={{ transitionDuration: `${timeout}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
