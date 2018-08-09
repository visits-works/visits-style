import { FlattenInterpolation, ThemeProps } from 'styled-components';
import { ThemeType } from '../../styled';
export interface InputProps {
    name: string;
    value?: string | number;
    onChange: () => void;
    onBlur: () => void;
    disabled?: boolean;
}
declare const _default: FlattenInterpolation<ThemeProps<ThemeType>>[];
export default _default;
