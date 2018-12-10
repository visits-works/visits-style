import React, { PureComponent, HTMLAttributes } from 'react';
import { ColorType, ColSizeType, CSSType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** ヘッダーのタイトル文言 */
    title?: any;
    /** 1~12のモーダルサイズ */
    size?: ColSizeType;
    /** trueの場合、モーダルを表示します。 */
    show?: boolean;
    /** モーダルのbodyに入れる内容 */
    children?: any;
    /** モーダルのfooterに入れる内容 */
    footer?: any;
    /** モーダルの色 */
    color?: ColorType;
    /** モーダルを閉じる処理 */
    closeModal: () => void;
    /** オーバーレイのクリックでモーダルクローズ */
    closeOnOverlay?: boolean;
    /** escボタンでクローズ */
    closeOnEsc?: boolean;
    /** overlayの背景の設定 */
    shadowColor?: string;
    /** カスタムCSS定義 */
    css?: CSSType;
}
export default class Modal extends PureComponent<Props> {
    static defaultProps: {
        show: boolean;
        color: string;
        size: number;
        shadowColor: string;
    };
    componentWillUnmount(): void;
    onKeyDown: (e: any) => void;
    onClickOverlay: () => void;
    element?: HTMLDivElement;
    shouldClose: boolean | null;
    render(): React.ReactPortal | null;
}
export {};
