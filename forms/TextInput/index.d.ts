import { InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    /** 'text' | 'number' | 'password' | 'email' | 'tel' | 'search' */
    type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
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
}
export default function TextInput({ className, outline, error, style, help, leftIcon, rightIcon, type, maxLength, ...rest }: Props): JSX.Element;
export {};
