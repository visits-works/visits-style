import { InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    children?: any;
    checked?: boolean;
}
export default function Checkbox({ className, children, ...rest }: Props): JSX.Element;
export {};
