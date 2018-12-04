import { PureComponent, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    children: any;
}
export default class Switch extends PureComponent<Props> {
    static defaultProps: {
        children: null;
        onChange: () => void;
    };
    id: string;
    render(): JSX.Element;
}
export {};
