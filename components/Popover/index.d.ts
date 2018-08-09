import React, { Component } from 'react';
import { ColorType, SizeType } from '../../styled';
interface Props {
    /** ボタンの内容 */
    label: React.ReactNode;
    /** ボタンの色 */
    color?: ColorType;
    /** 内容のリスト */
    children?: React.ReactNode | React.ReactNode;
    /** 右の基準でリストを表示する */
    right?: boolean;
    /** ボタンのサイズ */
    size?: SizeType;
    position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
}
interface State {
    show: boolean;
    style: any;
}
export default class Popover extends Component<Props, State> {
    static defaultProps: {
        position: string;
    };
    state: {
        show: boolean;
        style: {};
    };
    shouldComponentUpdate(props: Props, state: State): boolean;
    openDropdown: () => void;
    closeDropdown: () => void;
    element: React.RefObject<HTMLDivElement>;
    render(): JSX.Element;
}
export {};
