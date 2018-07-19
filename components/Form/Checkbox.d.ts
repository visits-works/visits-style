import * as React from 'react';
interface Props extends InputProps {
    placeholder?: string;
    children?: React.ReactChild;
    checked?: boolean;
}
export default class Checkbox extends React.PureComponent<Props> {
    static defaultProps: {
        name: null;
        placeholder: null;
        children: null;
        checked: boolean;
        onChange: () => void;
    };
    render(): JSX.Element;
}
export {};
