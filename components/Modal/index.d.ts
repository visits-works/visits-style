import React, { PureComponent, HTMLAttributes } from 'react';
import { ColorType, ColSizeType, CSSType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** ヘッダーのタイトル文言 */
    title?: any;
    /** 1~12のモーダルサイズ */
    size?: ColSizeType;
    /** 特定のdomで表示したい場合はそのidを指定してください */
    domId?: string;
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
    css?: CSSType;
}
export default class Modal extends PureComponent<Props> {
    static defaultProps: {
        domId: string;
        show: boolean;
        color: string;
    };
    constructor(props: Props);
    componentWillUnmount(): void;
    onKeyDown: (e: any) => void;
    onClickOverlay: () => void;
    handleContentOnMouse: () => void;
    getModal: () => JSX.Element;
    element?: HTMLDivElement;
    shouldClose: boolean | null;
    render(): React.ReactPortal | null;
}
export {};
