import { PureComponent, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    children?: any;
    checked?: boolean;
}
export default class Checkbox extends PureComponent<Props> {
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
