import React, { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
declare type PositionType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    /** 認識ID */
    id: string;
    /** 表示する内容 */
    message?: React.ReactNode;
    /** 背景の色 */
    color?: ColorType;
    /** 表示される時間 nullの場合は自動で閉じられません */
    duration: number | null;
    /** 押したら閉じられる */
    clearOnClick?: boolean;
}
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    /** 表示するToastのリスト */
    toasts: ToastProps[];
    /** toastを消すタイミングのコールバック */
    clear: (id: string) => void;
    /** top, top-right, top-left, bottom, bottom-right, bottom-left */
    position?: PositionType;
    /** margin */
    margin?: string;
    /** スクロールしても固定として表示する */
    fixed?: boolean;
}
export default function Toast({ toasts, clear, fixed, style, margin, ...rest }: ContainerProps): JSX.Element;
export {};
