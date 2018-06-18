import { css } from 'styled-components';

export default css`
  font-size: 1rem;

  &[disabeld] {
    box-shadow: none;
  }
  &[readonly] {
    box-shadow: none;
  }
`;
