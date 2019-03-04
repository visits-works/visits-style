import { PureComponent, ReactNode, HTMLAttributes } from 'react';
import { CSSType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    children: ReactNode;
    required?: boolean;
    htmlFor?: string;
    css?: CSSType;
}
export default class Field extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
