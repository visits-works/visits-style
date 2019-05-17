import { ColorType } from '../../types';
interface TooltipProps {
    /** 吹き出しとして表示したい内容 */
    label: any;
    /** マウスオーバーの対象になるelement */
    children: any;
    /** 吹き出しの背景色の指定 */
    color?: ColorType;
    /** 表示される場所 */
    position?: 'top' | 'left' | 'right' | 'bottom';
}
export default function Tooltip({ children, position, label, color, ...rest }: TooltipProps): JSX.Element;
export {};
