import { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** レスポンシブなイメージを追加する */
    image?: string;
    /** タイトル */
    title?: string;
    /** ヘッダーの右側に追加する */
    headerOptions?: any;
    /** header部分（イメージ）を横並びにする */
    horizontal?: boolean;
    /** footer */
    footer?: any;
    /** 色の指定 */
    color?: ColorType;
}
export default function Card({ image, title, children, horizontal, footer, color, style, ...rest }: Props): JSX.Element;
export {};
