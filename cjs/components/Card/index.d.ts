import { PureComponent, ReactNode } from 'react';
import { ColorType } from '../../types';
interface Props {
    /** レスポンシブなイメージを追加する */
    image?: string;
    /** タイトル */
    title?: string;
    /** ヘッダーの右側に追加する */
    headerOptions?: ReactNode;
    /** header部分（イメージ）を横並びにする */
    horizontal?: boolean;
    /** footer */
    footer?: ReactNode;
    /** 色の指定 */
    color?: ColorType;
    /** カスタinline style */
    style?: any;
}
export default class Card extends PureComponent<Props> {
    renderHeader: () => JSX.Element | null;
    render(): JSX.Element;
}
export {};
