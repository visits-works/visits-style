import { HTMLAttributes } from 'react';
import { styled, css, keyframes } from 'styled-components';
import type { ExecutionContext } from 'styled-components/dist/types';

import { ColorType } from '../../types';

export interface Props extends HTMLAttributes<HTMLDivElement>{
  /** 色の指定 */
  color?: ColorType;
  /** サイズ */
  size?: string;
  /** spinnerの太さ */
  borderSize?: string;
}

export default function Spinner(props: Props) {
  return <div />;
}

// interface SpinnerGetColorConfig extends ExecutionContext {
//   color?: ColorType;
// }

// function getColor({ theme, color }: SpinnerGetColorConfig) {
//   const value = (!color || color === 'light') ? theme.background : theme[color];

//   return css`
//     border-color: ${value};
//     border-right-color: ${theme.border};
//     border-top-color: ${theme.border};
//   `;
// }

// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(359deg);
//   }
// `;

// function shouldForwardProp(name: string) {
//   return (
//     name !== 'color'
//     && name !== 'size'
//     && name !== 'borderSize'
//   );
// }

// const Spinner = styled.div.withConfig({ shouldForwardProp })<Props>`
//   display: inline-block;
//   width: ${({ size }) => (size || '100%')};
//   height: ${({ size }) => (size || '100%')};
//   margin: 0;
//   padding: 0;
//   position: relative;

//   &:after {
//     display: block;
//     top: 0;
//     left: 0;
//     animation: ${spin} 750ms infinite linear;
//     border: ${({ borderSize }) => borderSize} solid;
//     border-radius: 100%;
//     ${getColor}
//     content: "";
//     height: 100%;
//     width: 100%;
//     position: absolute;
//   }
// `;
// Spinner.defaultProps = {
//   borderSize: '2px',
// };

// export default Spinner;
