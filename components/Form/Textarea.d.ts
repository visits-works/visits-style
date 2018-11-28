import { Component, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    value?: string;
    col?: number;
    row?: number;
    /** エラーの発生時の表示テキスト */
    error?: string | any;
    /** 捕捉テキスト */
    help?: string | any;
}
export default class Textarea extends Component<Props> {
    static defaultProps: {
        value: string;
        col: number;
        row: number;
        onChange: () => void;
    };
    shouldComponentUpdate(props: Props): boolean;
    render(): JSX.Element;
}
export {};
