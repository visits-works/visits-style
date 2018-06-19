import { css } from 'styled-components';
import { clearFix } from 'polished';

export default css`
  font-size: 1em;
  position: relative;
  text-align: left;
  ${clearFix()}

  &[disabeld] {
    box-shadow: none;
  }
  &[readonly] {
    box-shadow: none;
  }
`;
