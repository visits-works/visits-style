import { InterpolationValue, FlattenInterpolation, ThemeProps } from 'styled-components';
import { ThemeType, css } from '../../styled';
import disabledColor from '../../utils/disabledColor';

export interface InputProps {
  name: string;
  value?: string | number;
  onChange: () => void;
  onBlur: () => void;
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
