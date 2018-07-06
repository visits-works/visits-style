import { css } from 'styled-components';

export default css`
  font-size: 1em;
  position: relative;
  text-align: left;
  clear: both;

  &[disabeld] {
    box-shadow: none;
  }
  &[readonly] {
    box-shadow: none;
  }
`;
