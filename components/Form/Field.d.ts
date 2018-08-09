import { PureComponent, ReactNode } from 'react';
interface Props {
    label?: string;
    children: ReactNode;
    style?: any;
}
export default class Field extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
