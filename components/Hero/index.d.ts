import React, { HTMLAttributes } from 'react';
import { ColorType, SizeType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** 背景の色 */
    color?: ColorType;
    /** small | medium | large | full */
    size?: SizeType | 'full';
    /**  */
    children?: React.ReactChild;
    /** childrenの中央揃え */
    center?: boolean;
    /** カスタムヘッダー */
    header?: React.ReactElement<any>;
}
export default function Hero({ children, color, size, center, header, ...rest }: Props): JSX.Element;
export {};
