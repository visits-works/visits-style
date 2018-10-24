import * as React from 'react';
interface Props {
    /** タグの内容 */
    children: any;
    /** Xボタンの追加＋クリック時のイベントハンドラー */
    onClose?: () => void;
    /** クリック時のイベントハンドラー */
    onClick?: () => void;
    /** 色の指定 */
    color?: ColorType;
}
export default class Tag extends React.PureComponent<Props> {
    static defaultProps: {
        children: null;
        onClose: null;
        onClick: null;
        color: null;
    };
    render(): JSX.Element;
}
export {};
