import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** ボタンの内容 */
    label: React.ReactNode;
    /** 内容のリスト */
    children?: React.ReactNode | React.ReactNode;
    /** 右の基準でリストを表示する */
    right?: boolean;
    /** 吹き出しが表示される場所 */
    position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
}
export default function Popover({ position, label, children, color, ...rest }: Props): JSX.Element;
export {};
