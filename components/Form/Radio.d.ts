import { Component, InputHTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    children?: any;
    checked?: boolean;
    button?: boolean;
    color?: ColorType;
}
export default class Radio extends Component<Props> {
    static defaultProps: {
        name: null;
        children: null;
        checked: boolean;
        button: boolean;
        onChange: () => void;
    };
    id: string;
    render(): JSX.Element;
}
export {};
