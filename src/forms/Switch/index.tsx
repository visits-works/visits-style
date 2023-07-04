import React, { InputHTMLAttributes, forwardRef } from 'react';
import { styled,  css } from 'styled-components';
import findColorInvert from '../../utils/findColorInvert';
import disabledColor from '../../utils/disabledColor';
import type { ThemeType } from '../../types';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /** trueの場合にON/OFFのラベルを表示します */
  showLabel?: boolean;
  /** ONの時に、色を指定します。 */
  background?: string;
  /** 丸の色を設定します。 */
  anchorColor?: string;
  /**
   * ONになるときのラベル
   * @default 'ON'
   */
  onLabel?: string;
  /**
   * OFFになるときのラベル
   * @default 'OFF'
   */
  offLabel?: string;
}

const Switch = forwardRef<HTMLInputElement, Props>(({
  className, showLabel, background, anchorColor,
  onLabel = 'ON', offLabel = 'OFF', ...rest
}, ref) => {
  const id = `switch_${rest.name}`;
  return (
    <InputWrapper
      className={className}
      showLabel={showLabel}
      background={background}
      anchorColor={anchorColor}
      labelTextOn={onLabel}
      labelTextOff={offLabel}
      disabled={rest.disabled}
    >
      <input id={id} type="checkbox" {...rest} ref={ref} />
      <label htmlFor={id} aria-label={id} />
    </InputWrapper>
  );
});
Switch.displayName = 'Switch';

export default Switch;

const labelStyle = css`
  label:before {
    position: absolute;
    display: block;
    content: '${({ offLabel }: any) => offLabel}';
    top: 0.5rem;
    right: 0.6875rem;
    font-size: 0.825rem;
    line-height: 0.825rem;
    color: ${({ theme }: any) => theme.textLight};
  }

  input:checked ~ label:before {
    content: '${({ onLabel }: any) => onLabel}';
    right: unset;
    left: 0.6875rem;
    color: ${({ theme }: any) => findColorInvert(theme, theme.primary)};
  }
`;

interface InputWrapperProps extends Pick<Props, 'anchorColor'|'background'|'showLabel'|'disabled'> {
  labelTextOn: string;
  labelTextOff: string;
}

function shouldForwardProp(name: string) {
  return (
    name !== 'labelTextOn'
    && name !== 'labelTextOff'
    && name !== 'anchorColor'
    && name !== 'background'
    && name !== 'showLabel'
  );
}

const InputWrapper = styled.span.withConfig({ shouldForwardProp })<InputWrapperProps>`
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
  ${({ disabled, theme }) => (disabled
    ? css`
      cursor: default;

      label {
        ${disabledColor(theme as ThemeType)}

        &:after {
          background: ${theme.disabled};
        }
      }

      input:checked ~ label {
        background: ${theme.grey};
      }
    `
    : undefined)}
`;
