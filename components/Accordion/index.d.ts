import { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    header: any;
    show: boolean;
    timeout?: number;
}
export default function Accordion({ header, show, children, timeout, ...rest }: Props): JSX.Element;
export {};
