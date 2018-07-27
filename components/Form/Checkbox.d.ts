import { PureComponent, ReactNode } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    placeholder?: string;
    children?: ReactNode;
    checked?: boolean;
}
export default class Checkbox extends PureComponent<Props> {
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
