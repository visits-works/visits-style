import { RefObject, PureComponent } from 'react';
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
    style?: any;
}
interface State {
    show: boolean;
    style: any;
}
export default class Tooltip extends PureComponent<TooltipProps, State> {
    static defaultProps: {
        position: string;
        color: string;
    };
    state: {
        show: boolean;
        style: {};
    };
    openTooltip: () => void;
    closeTooltip: () => void;
    element: RefObject<HTMLDivElement>;
    render(): JSX.Element;
}
export {};
