// @flow
import styled, { type ReactComponentStyled } from 'styled-components';
import { fullhd, desktop, tablet, mobile, gutter, smallGutter } from '../../styles/variables';
import Row from './Row';

type Props = {
  width?: number,
}

const Container: ReactComponentStyled<Props> = styled.div`
  position: relative;
  margin: 0 auto;
  width: auto;

  @media (max-width: ${fullhd}px) {
    max-width: ${fullhd - (gutter * 2)}px;
    width: ${({ fluid }) => fluid ? 'auto' : `${fullhd - (gutter * 2)}px`};
  }

  @media (max-width: ${desktop}px) {
    max-width: ${({ fluid }) => fluid ? 'none' : `${desktop - (gutter * 2)}px`};
    width: ${({ fluid }) => fluid ? 'auto' : `${desktop - (gutter * 2)}px`};
  }

  @media (max-width: ${tablet}px) {
    max-width: ${tablet - (smallGutter * 2)}px;
    width: ${tablet - (smallGutter * 2)}px;
  }

  @media (max-width: ${mobile}px) {
    max-width: ${mobile - smallGutter}px;
    width: ${mobile - smallGutter}px;
  }
`;
Container.displayName = 'Container';

export default Container;
