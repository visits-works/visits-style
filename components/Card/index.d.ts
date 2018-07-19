import * as React from 'react';
interface Props {
    /** レスポンシブなイメージを追加する */
    image?: string;
    /** タイトル */
    title?: string;
    /** ヘッダーの右側に追加する */
    headerOptions?: React.ReactNode;
    /** header部分（イメージ）を横並びにする */
    horizontal?: boolean;
    /** footer */
    footer?: React.ReactNode;
    color?: ColorType;
    style?: any;
}
export default class Card extends React.PureComponent<Props> {
    renderHeader: () => JSX.Element | null;
    render(): JSX.Element;
}
export {};
