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
    /** 閉じた場合のコールバック */
    onClose?: () => void;
    /** 開けた場合のコールバック */
    onOpen?: () => void;
    /** コンテンツを出さない */
    disabled?: boolean;
}
export default function Popover({ position, label, children, color, onOpen, onClose, disabled, ...rest }: Props): JSX.Element;
export {};
