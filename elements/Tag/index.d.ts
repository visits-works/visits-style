import { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** タグの内容 */
    children: any;
    /** Xボタンの追加＋クリック時のイベントハンドラー */
    onClose?: () => void;
    /** クリック時のイベントハンドラー */
    onClick?: () => void;
    /** 色の指定 */
    color?: ColorType;
    /** 丸くする */
    round?: boolean;
}
export default function Tag({ children, onClose, ...rest }: Props): JSX.Element;
export {};
