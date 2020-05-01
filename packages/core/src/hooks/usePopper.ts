import { useRef, useMemo, useCallback, MutableRefObject } from 'react';
import {
  Options as PopperOptions,
  VirtualElement,
  Instance,
  Placement,
  PositioningStrategy,
} from '@popperjs/core';
import { popperGenerator, defaultModifiers } from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import offset from '@popperjs/core/lib/modifiers/offset';
import arrow from '@popperjs/core/lib/modifiers/arrow';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const createPopper = popperGenerator({
  defaultModifiers: [...defaultModifiers, preventOverflow, offset, arrow],
});

interface Options {
  placement?: Placement;
  strategy?: PositioningStrategy;
  offset?: { x: number; y: number; };
}

export default function usePopper(
  referenceElement: Element | MutableRefObject<Element | null> | VirtualElement | null,
  popperElement: HTMLElement | MutableRefObject<HTMLElement | null> | null,
  options: Partial<Options> = {},
) {
  const instance = useRef<Instance | null>(null);

  const popperOptions = useMemo(() => ({
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: [
      { name: 'preventOverflow', enabled: true },
      (options.offset && {
        name: 'offset',
        options: { offset: [options.offset.x, options.offset.y] },
      }),
    ].filter(Boolean),
  } as PopperOptions), [
    options.placement,
    options.strategy,
    options.offset,
  ]);


  useIsomorphicLayoutEffect(() => {
    if (instance.current) {
      instance.current.setOptions(popperOptions);
    }
  }, [popperOptions]);

  useIsomorphicLayoutEffect(() => () => {
    if (instance.current) {
      instance.current.destroy();
      instance.current = null;
    }
  }, []);

  const open = useCallback(() => {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    // @ts-ignore
    const refEl = referenceElement.current || referenceElement;
    // @ts-ignore
    const pEl = popperElement.current || popperElement;

    if (refEl === null || pEl === null) return;
    if (instance.current !== null) return;

    instance.current = createPopper(
      refEl,
      pEl,
      popperOptions,
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popperOptions]);

  const close = useCallback(() => {
    if (instance.current) {
      instance.current.destroy();
      instance.current = null;
    }
  }, []);

  return [open, close];
}
