import { PureComponent, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    children?: any;
    checked?: boolean;
}
export default class Radio extends PureComponent<Props> {
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
