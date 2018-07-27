import { PureComponent, ReactNode } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    value: string | number;
    children?: ReactNode;
}
export default class Radio extends PureComponent<Props> {
    static defaultProps: {
        name: null;
        children: null;
        onChange: () => void;
    };
    id: string;
    render(): JSX.Element;
}
export {};
