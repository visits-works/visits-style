import React, { HTMLAttributes, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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
  const [height, setHeight] = useState<number | 'auto'>('auto');
  const [className, setClassName] = useState('exited');
  const ref = useRef<HTMLDivElement | null>(null);
  const prevHeight = useRef<number>(0);
  const init = useRef(true);

  useEffect(() => {
    if (
      height !== 0
      && height !== 'auto'
      && height !== prevHeight.current
    ) {
      prevHeight.current = height;
    }
  }, [height]);

  useEffect(() => {
    if (init.current) {
      init.current = false;
      const frameId = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.display = 'block';
          prevHeight.current = ref.current.offsetHeight;
          ref.current.style.display = '';
          setHeight(0);
        }
      });
      return () => cancelAnimationFrame(frameId);
    }

    setClassName(show ? 'entering' : 'exiting');
    const frameIds = [] as number[];
    frameIds[0] = requestAnimationFrame(() => {
      frameIds[1] = requestAnimationFrame(() => {
        setHeight((h) => {
          if (!show) return 0;
          if (!ref.current) return h;
          if (ref.current.offsetHeight > 0) return ref.current.offsetHeight;
          return prevHeight.current;
        });
      });
    });
    const timeoutId = setTimeout(() => setClassName(show ? 'entered' : 'exited'), timeout);

    return () => {
      frameIds.forEach(cancelAnimationFrame);
      clearTimeout(timeoutId);
    };
  }, [show, timeout]);
  const opacity = height > 0 ? 1 : 0;

  return (
    <div {...rest}>
      {header}
      <AnimatedContent
        className={className}
        timeout={timeout}
        aria-hidden={!show}
        ref={ref}
        style={{ height, opacity }}
      >
        {children}
      </AnimatedContent>
    </div>
  );
}

const AnimatedContent = styled.div<{ timeout: number }>`
  will-change: opacity, height, transform;
  transition-property: opacity, height, transform;
  transition-duration: ${({ timeout }) => timeout}ms;
  transition-timing-function: ease-in-out;

  &.exited {
    display: none;
    visibility: hidden;
  }

  &.exited, &.entering, &.exiting {
    overflow: hidden;
  }

  &.exiting, &.entering {
    visibility: visible;
  }

  &.exiting {
    transform: translateY(-0.625rem);
  }

  &.entered {
    visibility: visible;
  }
`;
