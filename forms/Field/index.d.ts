import { ReactNode, HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    children: ReactNode;
    required?: boolean;
}
export default function Field({ label, children, required, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
