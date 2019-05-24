import { ReactNode, HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    children: ReactNode;
    required?: boolean;
    htmlFor?: string;
}
export default function Field({ label, children, htmlFor, required, ...rest }: Props): JSX.Element;
export {};
