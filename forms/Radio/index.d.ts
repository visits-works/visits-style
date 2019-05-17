import { InputHTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    children?: any;
    checked?: boolean;
    color?: ColorType;
}
export default function Radio({ className, color, style, children, ...rest }: Props): JSX.Element;
export {};
