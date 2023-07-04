import { HTMLAttributes } from 'react';
import { ColorType, SizeType } from '../../types';
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /** 現状の進捗 */
    value: number;
    /** 進捗の最大値 */
    max: number;
    /** バーのサイズ */
    size?: SizeType;
    /** sizeを使わないときの縦幅を指定する */
    height?: string;
    /**
     * バーの色
     * @default 'primary'
     */
    color?: ColorType;
}
export default function Progress({ value, max, color, ...rest }: ProgressProps): import("react/jsx-runtime").JSX.Element;
