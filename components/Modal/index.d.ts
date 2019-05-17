import { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** trueの場合、モーダルを表示します。 */
    show?: boolean;
    /** モーダルのbodyに入れる内容 */
    children?: any;
    /** モーダルのbackground色 */
    color?: ColorType;
    /** モーダルを閉じる処理 */
    closeModal: () => void;
    /** オーバーレイのクリックでモーダルクローズ */
    closeOnOverlay?: boolean;
    /** escボタンでクローズ */
    closeOnEsc?: boolean;
    /** モーダルの表示・非表示のアニメーション速度 */
    timeout?: number;
    /** モーダル外に表示するElements */
    external?: any;
}
export default function Modal({ show, children, timeout, color, closeModal, external, className, closeOnOverlay, closeOnEsc, ...rest }: Props): JSX.Element;
export {};
