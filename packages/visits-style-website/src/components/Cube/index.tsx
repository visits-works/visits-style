import styled from 'styled-components';
// @ts-ignore
import { findColorInvert } from '@utils';

export default styled.div`
  display: inline-block;
  background-color: ${({ color }) => color};
  color: ${({ theme, color }) => findColorInvert(theme, color)};

  width: 150px;
  height: 150px;
  text-align: right;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0.5rem;
`;
