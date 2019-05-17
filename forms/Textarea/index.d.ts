import { TextareaHTMLAttributes } from 'react';
interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** エラーの発生時の表示テキスト */
    error?: string | any;
    /** 捕捉テキスト */
    help?: string | any;
}
export default function Textarea({ className, help, error, style, ...rest }: Props): JSX.Element;
export {};
