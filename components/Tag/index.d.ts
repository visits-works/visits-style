import { HTMLAttributes, PureComponent } from 'react';
import { ColorType, CSSType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** タグの内容 */
    children: any;
    /** Xボタンの追加＋クリック時のイベントハンドラー */
    onClose?: () => void;
    /** クリック時のイベントハンドラー */
    onClick?: () => void;
    /** 色の指定 */
    color?: ColorType;
    /** カスタムCSS定義 */
    css?: CSSType;
}
export default class Tag extends PureComponent<Props> {
    static defaultProps: {
        children: null;
        onClose: null;
        onClick: null;
        color: null;
    };
    render(): JSX.Element;
}
export {};
