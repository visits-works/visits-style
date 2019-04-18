import { HTMLAttributes } from 'react';
import { CSSType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    show: boolean;
    header: any;
    css?: CSSType;
}
export default function Accordion({ header, show, children, ...rest }: Props): JSX.Element;
export {};
