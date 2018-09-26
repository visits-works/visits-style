import { PureComponent } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    placeholder?: string;
    value?: string;
    col?: number;
    row?: number;
    /** エラーの発生時の表示テキスト */
    error?: string;
    /** 捕捉テキスト */
    help?: string;
}
export default class Textarea extends PureComponent<Props> {
    static defaultProps: {
        value: string;
        col: number;
        row: number;
        onChange: () => void;
    };
    render(): JSX.Element;
}
export {};