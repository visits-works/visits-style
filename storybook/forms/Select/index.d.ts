import React, { SelectHTMLAttributes } from 'react';
import { SizeType } from '../../types';
type ItemType = {
    id: string | number;
    name: string;
    [key: string]: any;
} | string;
export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    placeholder?: string;
    /** { id: string | number, name: string, ...rest } | string */
    options: ItemType[];
    outline?: boolean;
    /** エラーの発生時の表示テキスト */
    error?: string | any;
    /** 捕捉テキスト */
    help?: string | any;
    /** selectのサイズ */
    inputSize?: SizeType;
    /** optionのカスタムrender */
    render?: (label: string) => any;
    /** placehoderを選択可能にする */
    optional?: boolean;
    /** エラーが発生しても、エラーメッセージを出さないようにする */
    noErrorMessage?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default _default;
