// @flow
import styled, { type ReactComponentStyled, css } from 'styled-components';
import { rem } from 'polished';
import Col from './Col';
import { fullhd, widescreen, desktop, tablet, mobile, gutter, smallGutter } from '../../styles/variables';

type Props = {
  width?: string,
  multiline?: boolean,
  vcenter?: boolean,
  noGutter?: boolean,
}

function renderGutter({ noGutter }: Props) {
  if (noGutter) {
    return css`
      margin-right: 0;
      margin-left: 0;
  
      > ${Col} {
        padding-right: 0;
        padding-left: 0;
      }
    `;
  } else {
    const value = rem(gutter / 2);
    const smallValue = rem(smallGutter / 2);
    return css`
      @media (max-width: ${fullhd}px) {
        margin-left: -${value};
        margin-right: -${value};
    
        &:last-child {
          margin-bottom: -${value};
        }
    
        &:not(:last-child) {
          margin-bottom: calc(1.5rem - ${value});
        }

        > ${Col} {
          padding-right: ${value};
          padding-left: ${value};
        }
      }

      @media (max-width: ${tablet}px) {
        margin-left: -${smallValue};
        margin-right: -${smallValue};
    
        &:last-child {
          margin-bottom: -${smallValue};
        }
    
        &:not(:last-child) {
          margin-bottom: calc(1.5rem - ${smallValue});
        }

        > ${Col} {
          padding-right: ${smallValue};
          padding-left: ${smallValue};
        }
      }
    `;
  }
}

const Row: ReactComponentStyled<Props> = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;

  ${({ vcenter }) => vcenter ? 'align-items: center;' : ''}
  ${({ center }) => center ? 'justify-content: center;' : ''}

  ${renderGutter}
`;

Row.displayName = 'Row';
Row.defaultProps = {
  vcenter: false,
  noGutter: false,
}

export default Row;
