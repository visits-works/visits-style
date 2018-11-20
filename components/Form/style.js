import { css } from 'styled-components';
import disabledColor from '../../utils/disabledColor';
export default css `
  font-size: 1em;
  text-align: left;
  color: inherit;

  &:disabled, [disabled] {
    ${({ theme }) => disabledColor(theme)}
  }
  &:readonly {
    ${({ theme }) => disabledColor(theme)}
  }
`;
