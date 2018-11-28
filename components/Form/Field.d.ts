import { PureComponent, ReactNode, HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    children: ReactNode;
}
export default class Field extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
