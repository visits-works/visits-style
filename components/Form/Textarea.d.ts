import { PureComponent } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    placeholder?: string;
    value?: string;
    col?: number;
    row?: number;
}
export default class Textarea extends PureComponent<Props> {
    static defaultProps: {
        placeholder: null;
        value: string;
        col: number;
        row: number;
        onChange: () => void;
    };
    render(): JSX.Element;
}
export {};
