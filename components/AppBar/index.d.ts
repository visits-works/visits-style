import React, { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** background色 */
    color?: ColorType;
    /** ロゴのイメージ、プロジェクト名など */
    brand?: React.ReactElement<any> | string;
    /** 定義された位置を固定にする */
    fixed?: boolean;
    /** (IE11不可)画面がスクロールされても上で貼り付けいるようにする */
    sticky?: boolean;
    /** 中央並びから自動幅で表示します */
    fluid?: boolean;
    /** 背景がblurされます（safari専用、他は透明度） */
    backdrop?: boolean;
    /** childrenに定義するElementの並び順を指定します。未定義は自動並び */
    align?: 'left' | 'right';
}
export default function AppBar({ children, align, brand, ...rest }: Props): JSX.Element;
export {};
