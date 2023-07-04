import React, { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** trueの場合、モーダルを表示します。 */
    show?: boolean;
    /** モーダルのbodyに入れる内容 */
    children?: React.ReactNode;
    /**
     * モーダルのbackground色
     * @default 'background'
     */
    color?: ColorType;
    /** モーダルを閉じる処理 */
    closeModal: () => void;
    /** オーバーレイのクリックでモーダルクローズ */
    closeOnOverlay?: boolean;
    /** escボタンでクローズ */
    closeOnEsc?: boolean;
    /**
     * モーダルの表示・非表示のアニメーション速度
     * @default 200
     */
    timeout?: number;
    /**
     * モーダル外に表示するElements
     * \
     * もしclick eventがある場合はstopPropagationをしないとモーダルが閉じられます。
     */
    external?: React.ReactNode;
    /** モーダルのtransition exitが完了した時に発火されるcallback */
    onExited?: () => void;
}
export default function Modal({ show, children, timeout, color, closeModal, external, closeOnOverlay, closeOnEsc, onExited, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
