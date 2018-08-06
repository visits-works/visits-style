import React, { Component } from 'react';
import { ColSizeType, ColorType } from '../../styled';
interface Props {
    /** ヘッダーのタイトル文言 */
    title?: string;
    /** 1~12のモーダルサイズ */
    size?: ColSizeType;
    /** 特定のdomで表示したい場合はそのidを指定してください */
    domId?: string;
    /** trueの場合、モーダルを表示します。 */
    show?: boolean;
    /** モーダルのbodyに入れる内容 */
    children?: React.ReactNode;
    /** モーダルのfooterに入れる内容 */
    footer?: React.ReactNode;
    /** モーダルの色 */
    color?: ColorType;
    /** モーダルを閉じる処理 */
    closeModal: () => void;
    /** オーバーレイのクリックでモーダルクローズ */
    closeOnOverlay?: boolean;
    /** escボタンでクローズ */
    closeOnEsc?: boolean;
}
export default class Modal extends Component<Props> {
    static defaultProps: {
        domId: string;
        show: boolean;
        color: string;
    };
    constructor(props: Props);
    shouldComponentUpdate(props: Props): boolean;
    componentWillUnmount(): void;
    onKeyDown: (e: any) => void;
    onClickOverlay: () => void;
    handleContentOnMouse: () => void;
    getModal: () => JSX.Element | undefined;
    element: HTMLDivElement;
    shouldClose: boolean | null;
    render(): React.ReactPortal;
}
export {};
