import React from 'react';
import type { Placement } from '@floating-ui/core';
import { ColorType } from '../../types';
export interface TooltipProps {
    /** 吹き出しとして表示したい内容 */
    label: React.ReactNode;
    /** マウスオーバーの対象になるelement */
    children: React.ReactElement;
    /** 吹き出しの背景色の指定 */
    color?: ColorType;
    /**
     * 表示される場所
     * @default 'bottom'
     */
    position?: Placement;
    /**
     * ツールチップが表示される間隔, 単位はpx
     * @default '{ x: 0, y: 6 }'
     */
    offset?: {
        x: number;
        y: number;
    };
    /** 吹き出し表示座標を対象のElementではなくマウスカーソルにする */
    clientPoint?: boolean;
    /** 吹き出しを出さない */
    disabled?: boolean;
    className?: string;
}
export default function Tooltip({ children, position, label, color, className, offset, clientPoint, disabled, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
