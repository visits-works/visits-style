import styled, { css } from 'styled-components';
import Col from './Col';
import { mediaFullHD, mediaTablet } from '../../utils/media';

export default styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -${({ theme }) => theme.gutter / 2}px;
  padding: ${({ theme }) => theme.gutter / 2}px;

  ${mediaTablet} {
    margin: -${({ theme }) => theme.smallGutter / 2}px;
    padding: ${({ theme }) => theme.smallGutter / 2}px;
  }
`;
