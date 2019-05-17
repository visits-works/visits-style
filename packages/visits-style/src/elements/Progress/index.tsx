import React, { HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import setSize from '../../utils/setSize';
import { ColorType, SizeType } from '../../types';

interface ProgressProps extends HTMLAttributes<HTMLDivElement>{
  /** 現状の進捗 */
  value: number;
  /** 進捗の最大値 */
  max: number;
  /** バーのサイズ */
  size?: SizeType;
  /** sizeを使わないときの縦幅を指定する */
  height?: string;
  /** バーの色 */
  color?: ColorType;
}

export default function Progress({ value, max, color = 'primary', ...rest }: ProgressProps) {
  const percent = useMemo(() => Math.round((value / max) * 100), [value, max]);
  return (
    <Wrapper color={color} {...rest}>
      <div
        role="progressbar"
        className={value !== max ? 'in-progress' : undefined}
        style={{ width: `${percent > 100 ? 100 : percent}%` }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<ProgressProps>`
  position: relative;
  display: block;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.background};

  ${({ size, height }) => height || setSize('height', size)}

  & > div[role="progressbar"] {
    position: relative;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius};
    background-color: ${({ color, theme }) => (theme[color!] || color)};

    &.in-progress {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    will-change: width;

    transition-property: width;
    transition-duration: 350ms;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 1;
  }
`;
