import React, { HTMLAttributes } from 'react';
import type { Placement } from '@floating-ui/core';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** ボタンの内容 */
    label: React.ReactElement;
    /** 内容のリスト */
    children?: React.ReactNode;
    /**
     * 吹き出しの背景色
     * @default 'background'
     */
    color?: string;
    /**
     * 表示される場所
     * @default 'bottom-end'
     */
    position?: Placement;
    /**
     * ツールチップが表示される間隔
     * @default '{ x: 0, y: 6 }'
     */
    offset?: {
        x: number;
        y: number;
    };
    /** 閉じた場合のコールバック */
    onClose?: () => void;
    /** 開けた場合のコールバック */
    onOpen?: () => void;
    /** コンテンツを出さない */
    disabled?: boolean;
}
export interface PopoverRef {
    open: () => void;
    close: () => void;
}
declare const Popover: React.ForwardRefExoticComponent<Props & React.RefAttributes<PopoverRef>>;
export default Popover;
