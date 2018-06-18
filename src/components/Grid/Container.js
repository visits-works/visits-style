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

  @media (min-width: ${fullhd}px) {
    max-width: ${({ fluid }) => fluid ? 'none' : `${fullhd}px`};
    margin-right: ${({ fluid }) => fluid ? '0.75rem' : '5%'};
    margin-left: ${({ fluid }) => fluid ? '0.75rem' : '5%'};
  }

  @media (max-width: ${desktop}px) {
    max-width: ${({ fluid }) => fluid ? 'none' : `${desktop}px`};
    margin-right: ${({ fluid }) => fluid ? '0.75rem' : '5%'};
    margin-left: ${({ fluid }) => fluid ? '0.75rem' : '5%'};
  }

  @media (max-width: ${tablet}px) {
    max-width: ${({ fluid }) => fluid ? 'none' : `${tablet}px`};
    margin-right: ${({ fluid }) => fluid ? '0.5rem' : '5%'};
    margin-left: ${({ fluid }) => fluid ? '0.5rem' : '5%'};
  }

  @media (max-width: ${mobile}px) {
    max-width: ${({ fluid }) => fluid ? 'none' : `${mobile}px`};
    margin-right: ${({ fluid }) => fluid ? '0.5rem' : '3%'};
    margin-left: ${({ fluid }) => fluid ? '0.5rem' : '3%'};
  }
`;
Container.displayName = 'Container';

export default Container;
