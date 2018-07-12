import * as React from 'react';
interface Props {
    error?: string;
    help?: string;
    label?: string;
    children: React.ReactChildren;
}
export default class Field extends React.PureComponent<Props> {
    renderMessage(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
