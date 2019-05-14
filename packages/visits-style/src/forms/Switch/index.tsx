import React, { useRef, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /** trueの場合にON/OFFのラベルを表示します */
  showLabel?: boolean;
  /** ONの時に、色を指定します。 */
  background?: string;
  /** 丸の色を設定します。 */
  anchorColor?: string;
}

export default function Switch({
  className, height, showLabel, background, anchorColor,
  ...rest
}: Props) {
  const id = useRef(`switch_${rest.name}`);

  return (
    <Wrapper
      className={className}
      height={height}
      showLabel={showLabel}
      background={background}
      anchorColor={anchorColor}
    >
      <input id={id.current} type="checkbox" {...rest} />
      <label htmlFor={id.current} />
    </Wrapper>
  );
}

const labelStyle = css`
  label:before {
    position: absolute;
    display: block;
    content: 'OFF';
    top: 0.45rem;
    right: 0.6875rem;
    font-size: 0.75rem;
    color: ${({ theme }: any) => theme.textLight};
  }

  input:checked ~ label:before {
    content: 'ON';
    right: unset;
    left: 0.6875rem;
    color: ${({ theme }: any) => findColorInvert(theme, theme.primary)};
  }
`;

const Wrapper = styled.span<{ showLabel?: boolean, background?: string, anchorColor?: string }>`
  display: inline-block;
  cursor: pointer;
  line-height: 1.25;
  position: relative;

  input {
    display: none;
  }

  label {
    position: relative;
    display: block;
    height: 1.875rem;
    min-width: 5rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 1.25rem;
    cursor: pointer;
    will-change: background-color;
    transition: background-color 300ms ease;
    box-shadow: inset 0 0.25rem 0.25rem rgba(0,0,0,0.05);

    &:after {
      position: absolute;
      display: block;
      left: 0.375rem;
      top: 0.2rem;
      width: 1.375rem;
      height: 1.375rem;
      border-radius: 100%;
      background: ${({ theme, anchorColor }) => anchorColor || theme.white};
      content: '';
      text-align: right;
      border: 1px solid ${({ theme }) => theme.border};
      will-change: left;
      transition: left 300ms ease;
      box-shadow: 0 0 0.375rem rgba(0,0,0,0.1);
    }
  }

  input:checked ~ label {
    background: ${({ theme, background }) => (background || theme.primary)};
    box-shadow: inset 0 0.25rem 0.25rem rgba(0,0,0,0.15);
    &:after {
      left: calc(100% - 1.75rem);
      box-shadow: 0 0 0.375rem rgba(0,0,0,0.15);
    }
  }

  ${({ showLabel }) => (showLabel ? labelStyle : undefined)}
`;
