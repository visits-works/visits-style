import React, { TextareaHTMLAttributes } from 'react';
export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** エラーの発生時の表示テキスト */
    error?: string | any;
    /** 捕捉テキスト */
    help?: string | any;
    /** エラーが発生しても、エラーメッセージを出さないようにする */
    noErrorMessage?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
