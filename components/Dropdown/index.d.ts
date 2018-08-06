import React, { Component } from 'react';
import { ColorType, SizeType, StyledComponentClass, ThemeType } from '../../styled';
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
}
interface State {
    show: boolean;
    style: any;
}
export default class Dropdown extends Component<Props, State> {
    state: {
        show: boolean;
        style: {};
    };
    static Item: StyledComponentClass<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ThemeType, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
    static Divider: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeType, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
    shouldComponentUpdate(props: Props, state: State): boolean;
    openDropdown: () => void;
    closeDropdown: () => void;
    onClickChild: (props: {
        onClick?: (() => void) | undefined;
    }) => () => void;
    element: React.RefObject<HTMLDivElement>;
    render(): JSX.Element;
}
export {};
