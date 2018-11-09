import { PureComponent, ReactNode } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    children: ReactNode;
    checked?: boolean;
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
