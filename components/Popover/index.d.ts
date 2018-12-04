import React, { Component } from 'react';
import { Props as BoxProps } from '../Box';
interface Props extends BoxProps {
    /** ボタンの内容 */
    label: React.ReactNode;
    /** 内容のリスト */
    children?: React.ReactNode | React.ReactNode;
    /** 右の基準でリストを表示する */
    right?: boolean;
    /** 吹き出しが表示される場所 */
    position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
}
interface State {
    show: boolean;
    style: any;
}
export default class Popover extends Component<Props, State> {
    static defaultProps: {
        position: string;
        color: string;
        style: {};
    };
    state: {
        show: boolean;
        style: {};
    };
    shouldComponentUpdate(props: Props, state: State): boolean;
    openDropdown: () => void;
    closeDropdown: () => void;
    render(): JSX.Element;
}
export {};
