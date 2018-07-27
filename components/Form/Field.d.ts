import { PureComponent, ReactNode } from 'react';
interface Props {
    error?: string;
    help?: string;
    label?: string;
    children: ReactNode;
}
export default class Field extends PureComponent<Props> {
    renderMessage(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
