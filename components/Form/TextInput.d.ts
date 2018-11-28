import { PureComponent, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    /** 'text' | 'number' | 'password' | 'email' | 'tel' | 'search' */
    type: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
    /** エラーの発生時の表示テキスト */
    error?: string | any;
    /** 捕捉テキスト */
    help?: string | any;
    /** ボックス系のデザインでする */
    outline?: boolean;
    /** 左側のアイコン */
    leftIcon?: any;
    /** 右側のアイコン */
    rightIcon?: any;
    style?: any;
}
export default class TextInput extends PureComponent<Props> {
    static defaultProps: {
        type: string;
        value: string;
        maxLength: number;
        onChange: () => void;
    };
    render(): JSX.Element;
}
export {};
