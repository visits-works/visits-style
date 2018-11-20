import { css } from 'styled-components';
import disabledColor from '../../utils/disabledColor';

export interface InputProps {
  /** inputの対象名 */
  name: string;
  value?: string | number;
  onChange: (e?: any) => void;
  onBlur?: (e?: any) => void;
  disabled?: boolean;
}

export default css`
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
