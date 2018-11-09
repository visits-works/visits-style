import { PureComponent } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
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
