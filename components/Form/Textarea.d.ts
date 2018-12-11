import { Component, TextareaHTMLAttributes } from 'react';
interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
