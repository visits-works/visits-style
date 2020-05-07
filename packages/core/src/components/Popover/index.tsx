/* eslint-disable no-param-reassign */
import React, {
  Children, cloneElement, useState, useRef, HTMLAttributes, useEffect,
  forwardRef, useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import { Placement } from '@popperjs/core';

import Portal from '../Portal';
import Box from '../../elements/Box';
import usePopper from '../../hooks/usePopper';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** ボタンの内容 */
  label: React.ReactElement;
  /** 内容のリスト */
  children?: React.ReactNode | React.ReactNode;
  /**
   * 吹き出しの背景色
   * @default 'background'
   */
  color?: string;
  /** 右の基準でリストを表示する */
  right?: boolean;
  /**
   * 表示される場所
   * @default 'bottom-end'
   */
  position?: Placement;

  /**
   * ツールチップが表示される間隔
   * @default '{ x: 0, y: 6 }'
   */
  offset?: { x: number; y: number; };

  /** 閉じた場合のコールバック */
  onClose?: () => void;
  /** 開けた場合のコールバック */
  onOpen?: () => void;
  /** コンテンツを出さない */
  disabled?: boolean;
}

export interface PopoverRef {
  open: () => void;
  close: () => void;
}

const Popover = forwardRef(({
  position, label, children, color = 'background',
  onOpen, onClose, disabled, className = '',
  offset = { x: 0, y: 6 },
  ...rest
}: Props, ref: React.Ref<PopoverRef>) => {
  const parent = useRef<HTMLDivElement | null>(null);
  const popover = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const [openPopper, closePopper] = usePopper(
    parent,
    popover,
    {
      placement: position,
      offset,
    },
  );

  const handleFocus = () => {
    setOpen(true);
    requestAnimationFrame(openPopper);
    if (onOpen) onOpen();
  };

  const handleBlur = () => {
    setOpen(false);
    closePopper();
    if (onClose) onClose();
  };

  useEffect(() => {
    if (disabled && open) {
      setOpen(false);
      closePopper();
    }
  }, [disabled, open, closePopper]);

  useImperativeHandle(ref, () => ({
    open: handleFocus,
    close: handleBlur,
  }));

  return (
    <>
      {cloneElement(Children.only(label), {
        ref: parent,
        tabIndex: 0,
        role: 'button',
        onClick: handleFocus,
        disabled,
      })}
      {open && (
        <Portal>
          <Tooltip
            role="tooltip"
            className={className}
            ref={popover}
            color={color}
            {...rest}
          >
            {children}
          </Tooltip>
          <Shadow onClick={handleBlur} />
        </Portal>
      )}
    </>
  );
});
Popover.displayName = 'Popover';

export default Popover;

const Tooltip = styled(Box)`
  display: flex;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: auto;
  z-index: 40;
`;

const Shadow = styled.div`
  position: fixed;
  z-index: 38;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
