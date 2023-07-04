import React, { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * 'text' | 'number' | 'password' | 'email' | 'tel' | 'search'
     * @default 'text'
     */
    type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
    /** エラーの発生時の表示テキスト */
    error?: string;
    /** 捕捉テキスト */
    help?: string;
    /** ボックス系のデザインでする */
    outline?: boolean;
    /** 左側のアイコン */
    leftIcon?: React.ReactNode;
    /** 右側のアイコン */
    rightIcon?: React.ReactNode;
    /** エラーが発生しても、エラーメッセージを出さないようにする */
    noErrorMessage?: boolean;
}
declare const TextInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default TextInput;
