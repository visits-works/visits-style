import React, { HTMLAttributes, useRef, useEffect } from 'react';
import styled from 'styled-components';

import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンなどの表示するラベル */
  header: any;
  show: boolean;
  /**
   * アニメーションの時間
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
        requestAnimationFrame(() => {
          if (ref.current) {
            prevHeight.current = ref.current.offsetHeight;
          }
        });
      } else {
        // explicitly calculate auto height
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.height = 'auto';
            prevHeight.current = ref.current.offsetHeight;
            ref.current.style.height = '0px';
          }
        });
        ref.current.style.opacity = '0';
      }
      return;
    }

    if (!show) {
      ref.current.style.height = `${prevHeight.current}px`;
    }

    const frameIds = [] as number[];
    frameIds[0] = requestAnimationFrame(() => {
      frameIds[1] = requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.height = `${show ? prevHeight.current : 0}px`;
        ref.current.style.opacity = show ? '1' : '0';
      });
    });

    const timeoutId = setTimeout(() => {
      if (!ref.current) return;
      if (show) {
        ref.current.style.height = 'auto';
        ref.current.style.overflow = '';
        ref.current.style.opacity = '';

        // cache prev calculated height after 1 frame draw
        requestAnimationFrame(() => {
          if (ref.current) {
            prevHeight.current = ref.current.offsetHeight;
          }
        });
      } else {
        ref.current.style.height = '0px';
      }
    }, timeoutRef.current);

    return () => {
      frameIds.forEach(cancelAnimationFrame);
      clearTimeout(timeoutId);
    };
  }, [show]);

  return (
    <div {...rest}>
      {header}
      <AnimatedContent
        aria-hidden={!show}
        ref={ref}
        style={{ transitionDuration: `${timeout}ms` }}
      >
        {children}
      </AnimatedContent>
    </div>
  );
}

const AnimatedContent = styled.div`
  will-change: opacity, height, transform;
  transition-property: opacity, height, transform;
  transition-timing-function: ease-in-out;
`;
