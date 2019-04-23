import { Component, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    children?: any;
    checked?: boolean;
}
export default class Checkbox extends Component<Props> {
    static defaultProps: {
        name: null;
        children: null;
        checked: boolean;
        onChange: () => void;
    };
    id: string;
    render(): JSX.Element;
}
export {};
