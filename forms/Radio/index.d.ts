import { InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    children?: any;
    checked?: boolean;
}
export default function Radio({ className, style, children, ...rest }: Props): JSX.Element;
export {};
