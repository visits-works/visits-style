import * as React from 'react';
interface Props extends InputProps {
    placeholder?: string;
    value?: string;
    col?: number;
    row?: number;
}
export default class Textarea extends React.PureComponent<Props> {
    static defaultProps: {
        placeholder: null;
        value: string;
        col: number;
        row: number;
        onChange: () => void;
    };
    render(): JSX.Element;
}
export {};
