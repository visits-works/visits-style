import { PureComponent } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    placeholder?: string;
    /** 'text' | 'number' | 'password' | 'email' | 'phone' */
    type: 'text' | 'number' | 'password' | 'email' | 'phone';
    /** エラーの発生時の表示テキスト */
    error?: string;
    /** 捕捉テキスト */
    help?: string;
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
        onChange: () => void;
    };
    render(): JSX.Element;
}
export {};
