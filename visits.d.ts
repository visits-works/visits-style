/// <reference types="react" />
declare module "components/Grid/Break" {
    export default function Break(): JSX.Element;
}
declare module "types" {
    import { BaseThemedCssFunction } from 'styled-components';
    export type ColorType = 'light' | 'primary' | 'info' | 'link' | 'success' | 'warning' | 'danger' | 'dark' | 'text' | string;
    export type SizeType = 'small' | 'medium' | 'large';
    export type ColSizeType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    export type AlignType = 'left' | 'right' | 'center';
    export type CSSType = ReturnType<BaseThemedCssFunction<ThemeType | any>> | string;
    export interface ThemeType {
        primary: string;
        link: string;
        info: string;
        success: string;
        warning: string;
        danger: string;
        dark: string;
        black: string;
        white: string;
        text: string;
        textDark: string;
        textLight: string;
        textStrong: string;
        background: string;
        border: string;
        borderHover: string;
        borderActive: string;
        fontSize: string;
        fontFamily: string;
        responsive: boolean;
        gutter: number;
        smallGutter: number;
        mobile: number;
        tablet: number;
        desktop: number;
        fullhd: number;
        radius: number;
        [key: string]: string | number | boolean | any;
    }
}
declare module "utils/media" {
    import { ThemeType } from "types";
    interface Props {
        theme: ThemeType;
    }
    export function mediaMobile({ theme }: Props): string;
    export function mediaTablet({ theme }: Props): string;
    export function mediaDesktop({ theme }: Props): string;
    export function mediaFullHD({ theme }: Props): string;
    export function mediaUntilFullHD({ theme }: Props): string;
}
declare module "components/Grid/Container" {
    interface Props {
        /**  */
        fluid?: boolean;
    }
    const Container: import("styled-components").StyledComponent<"div", any, Props, never>;
    export default Container;
}
declare module "components/Grid/Col" {
    import { ColSizeType } from "types";
    interface ColProps {
        /** 固定の幅を指定する場合 */
        narrow?: boolean;
        /** 1-12のサイズ */
        size?: ColSizeType;
        /** 1-12の左のoffset */
        offset?: ColSizeType;
        /** 1-12基準のサイズを画面サイズのよって可変にする */
        auto?: boolean;
    }
    const Col: import("styled-components").StyledComponent<"div", any, ColProps, never>;
    export default Col;
}
declare module "components/Grid/Row" {
    interface Props {
        /** 固定幅 */
        width?: string;
        /** 向く数の行で対応できるようにする */
        multiline?: boolean;
        /** 縦の中央揃えにする */
        vcenter?: boolean;
        /** 横幅の中央揃えにする */
        center?: boolean;
        /** Colの間隔をなくす */
        noGutter?: boolean;
    }
    const Row: import("styled-components").StyledComponent<"div", any, Props, never>;
    export default Row;
}
declare module "components/Content/Pre" {
    const Pre: import("styled-components").StyledComponent<"pre", any, {}, never>;
    export default Pre;
}
declare module "components/Content/Code" {
    const Code: import("styled-components").StyledComponent<"code", any, {}, never>;
    export default Code;
}
declare module "components/Content/H1" {
    const H1: import("styled-components").StyledComponent<"h1", any, {}, never>;
    export default H1;
}
declare module "components/Content/index" {
    const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    export { default as Pre } from "components/Content/Pre";
    export { default as Code } from "components/Content/Code";
    export { default as H1 } from "components/Content/H1";
    export default Content;
}
declare module "utils/findColorInvert" {
    import { ThemeType } from "types";
    export default function findColorInvert({ black, white }: ThemeType, color: string): string;
}
declare module "utils/boxShadow" {
    export default function boxShadow(size: string, color: string, amount?: number): import("styled-components").FlattenSimpleInterpolation;
}
declare module "utils/setSize" {
    import { SizeType } from "types";
    type SizePropsNameType = 'font-size' | 'height';
    export default function setSize(name: SizePropsNameType, size?: SizeType): string;
}
declare module "utils/disabledColor" {
    import { ThemeType, CSSType } from "types";
    export default function disabledColor(theme: ThemeType): CSSType;
}
declare module "components/Button/index" {
    import { HTMLAttributes } from 'react';
    import { ColorType, SizeType } from "types";
    interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
        /** ボタンの色 */
        color?: ColorType;
        /** ボタンのサイズ */
        size?: SizeType;
        /** 背景が透明なボタンでする */
        outline?: boolean;
        /** 全体幅のボタンで設定 */
        full?: boolean;
    }
    const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
    export default Button;
}
declare module "components/Button/ButtonGroup" {
    const ButtonGroup: import("styled-components").StyledComponent<"div", any, {}, never>;
    export default ButtonGroup;
}
declare module "components/Table/index" {
    import { SizeType } from "types";
    interface Props {
        size?: SizeType;
        full?: boolean;
        headerStyle?: any;
        bordered?: boolean;
        borderless?: boolean;
        striped?: boolean;
        hover?: boolean;
    }
    const Table: import("styled-components").StyledComponent<"table", any, Props, never>;
    export default Table;
}
declare module "components/Box/index" {
    import { HTMLAttributes } from 'react';
    import { ColorType } from "types";
    export interface Props extends HTMLAttributes<HTMLDivElement> {
        /** 色指定 */
        color?: ColorType;
        /** borderを非表示する */
        borderless?: boolean;
        style?: any;
    }
    const Box: import("styled-components").StyledComponent<"div", any, Props, never>;
    export default Box;
}
declare module "components/Progress/index" {
    import { PureComponent, HTMLAttributes } from 'react';
    import { ColorType, SizeType, CSSType } from "types";
    interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
        /** 現状の進捗 */
        value: number;
        /** 進捗の最大値 */
        max: number;
        /** バーのサイズ */
        size?: SizeType;
        /** sizeを使わないときの縦幅を指定する */
        height?: string;
        /** バーの色 */
        color?: ColorType;
        /** カスタムCSS定義 */
        css?: CSSType;
    }
    export default class Progress extends PureComponent<ProgressProps> {
        static defaultProps: {
            color: string;
        };
        render(): JSX.Element;
    }
}
declare module "components/Form/Field" {
    import { PureComponent, ReactNode, HTMLAttributes } from 'react';
    import { CSSType } from "types";
    interface Props extends HTMLAttributes<HTMLDivElement> {
        label?: string;
        children: ReactNode;
        required?: boolean;
        css?: CSSType;
    }
    export default class Field extends PureComponent<Props> {
        render(): JSX.Element;
    }
}
declare module "utils/hambuger" {
    import { CSSType } from "types";
    export default function hamburger(size: string): CSSType;
}
declare module "utils/arrow" {
    import { CSSType } from "types";
    export default function Arrow(color: string, direction?: string): CSSType;
}
declare module "utils/index" {
    export { default as findColorInvert } from "utils/findColorInvert";
    export { default as hambuger } from "utils/hambuger";
    export { default as boxShadow } from "utils/boxShadow";
    export { default as arrow } from "utils/arrow";
    export { default as setSize } from "utils/setSize";
    export * from "utils/media";
}
declare module "components/Form/HelpMessage" {
    export default function HelpMessage(help?: string, error?: string): JSX.Element | undefined;
}
declare module "components/Form/TextInput" {
    import { PureComponent, InputHTMLAttributes } from 'react';
    import { CSSType } from "types";
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        placeholder?: string;
        /** 'text' | 'number' | 'password' | 'email' | 'tel' | 'search' */
        type: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
        /** エラーの発生時の表示テキスト */
        error?: string | any;
        /** 捕捉テキスト */
        help?: string | any;
        /** ボックス系のデザインでする */
        outline?: boolean;
        /** 左側のアイコン */
        leftIcon?: any;
        /** 右側のアイコン */
        rightIcon?: any;
        /** カスタムCSS定義 */
        css?: CSSType;
    }
    export default class TextInput extends PureComponent<Props> {
        static defaultProps: {
            type: string;
            value: string;
            maxLength: number;
            onChange: () => void;
        };
        render(): JSX.Element;
    }
}
declare module "components/Form/Textarea" {
    import { Component, TextareaHTMLAttributes } from 'react';
    import { CSSType } from "types";
    interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
        /** エラーの発生時の表示テキスト */
        error?: string | any;
        /** 捕捉テキスト */
        help?: string | any;
        /** カスタムCSS定義 */
        css?: CSSType;
    }
    export default class Textarea extends Component<Props> {
        static defaultProps: {
            value: string;
            col: number;
            row: number;
            onChange: () => void;
        };
        shouldComponentUpdate(props: Props): boolean;
        render(): JSX.Element;
    }
}
declare module "components/Form/Checkbox" {
    import { Component, InputHTMLAttributes } from 'react';
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        children?: any;
        checked?: boolean;
    }
    export default class Checkbox extends Component<Props> {
        static defaultProps: {
            name: null;
            children: null;
            checked: boolean;
            onChange: () => void;
        };
        id: string;
        shouldComponentUpdate(props: Props): boolean;
        render(): JSX.Element;
    }
}
declare module "components/Form/Select" {
    import { Component, SelectHTMLAttributes } from "react";
    import { SizeType, CSSType } from "types";
    type ItemType = {
        id: string | number;
        name: string;
        [key: string]: any;
    } | string;
    interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
        placeholder?: string;
        options: ItemType[];
        outline?: boolean;
        error?: string | any;
        help?: string | any;
        inputSize?: SizeType;
        render?: (label: string) => any;
        disabled?: boolean;
        css?: CSSType;
    }
    export default class Select extends Component<Props> {
        static defaultProps: {
            name: null;
            value: string;
            onChange: () => void;
            options: never[];
        };
        shouldComponentUpdate(props: Props): boolean;
        renderLabel: (label: string) => any;
        renderItem: () => JSX.Element[];
        render(): JSX.Element;
    }
}
declare module "components/Form/Radio" {
    import { Component, InputHTMLAttributes } from 'react';
    import { ColorType } from "types";
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        value: string | number;
        children?: any;
        checked?: boolean;
        button?: boolean;
        color?: ColorType;
    }
    export default class Radio extends Component<Props> {
        static defaultProps: {
            name: null;
            children: null;
            checked: boolean;
            button: boolean;
            onChange: () => void;
        };
        id: string;
        shouldComponentUpdate(props: Props): boolean;
        render(): JSX.Element;
    }
}
declare module "components/Form/index" {
    export { default as Field } from "components/Form/Field";
    export { default as TextInput } from "components/Form/TextInput";
    export { default as Textarea } from "components/Form/Textarea";
    export { default as Checkbox } from "components/Form/Checkbox";
    export { default as Select } from "components/Form/Select";
    export { default as Radio } from "components/Form/Radio";
}
declare module "utils/setAlign" {
    export default function setAlign({ align }: {
        align?: 'left' | 'right' | 'center';
    }): "center" | "space-evenly" | "flex-end" | "flex-start";
}
declare module "components/AppBar/index" {
    import React, { PureComponent, HTMLAttributes } from 'react';
    import { ColorType, CSSType } from "types";
    interface Props extends HTMLAttributes<HTMLDivElement> {
        /** background色 */
        color?: ColorType;
        /** ロゴのイメージ、プロジェクト名など */
        brand?: React.ReactElement<any> | string;
        /** 定義された位置を固定にする */
        fixed?: boolean;
        /** (IE11不可)画面がスクロールされても上で貼り付けいるようにする */
        sticky?: boolean;
        /** 中央並びから自動幅で表示します */
        fluid?: boolean;
        /** 背景がblurされます（safari専用、他は透明度） */
        backdrop?: boolean;
        /** childrenに定義するElementの並び順を指定します。未定義は自動並び */
        align?: 'left' | 'right';
        /** カスタムCSS定義 */
        css?: CSSType;
    }
    type State = {
        show: boolean;
    };
    export default class AppBar extends PureComponent<Props, State> {
        static defaultProps: {
            color: null;
            brand: null;
            fixed: boolean;
            sticky: boolean;
            fluid: boolean;
            backdrop: boolean;
        };
        state: {
            show: boolean;
        };
        toggleMenu: () => void;
        render(): JSX.Element;
    }
}
declare module "components/Tag/index" {
    import { HTMLAttributes, PureComponent } from 'react';
    import { ColorType, CSSType } from "types";
    interface Props extends HTMLAttributes<HTMLDivElement> {
        /** タグの内容 */
        children: any;
        /** Xボタンの追加＋クリック時のイベントハンドラー */
        onClose?: () => void;
        /** クリック時のイベントハンドラー */
        onClick?: () => void;
        /** 色の指定 */
        color?: ColorType;
        /** カスタムCSS定義 */
        css?: CSSType;
    }
    export default class Tag extends PureComponent<Props> {
        static defaultProps: {
            children: null;
            onClose: null;
            onClick: null;
            color: null;
        };
        render(): JSX.Element;
    }
}
declare module "components/Hero/index" {
    import React, { HTMLAttributes } from 'react';
    import { ColorType, SizeType } from "types";
    interface Props extends HTMLAttributes<HTMLDivElement> {
        /** 背景の色 */
        color?: ColorType;
        /** small | medium | large | full */
        size?: SizeType | 'full';
        /**  */
        children?: React.ReactChild;
        /** childrenの中央揃え */
        center?: boolean;
        /** カスタムヘッダー */
        header?: React.ReactElement<any>;
    }
    export default function Hero({ children, color, size, center, header, ...rest }: Props): JSX.Element;
}
declare module "components/Tooltip/index" {
    import { RefObject, PureComponent } from 'react';
    import { ColorType, CSSType } from "types";
    interface TooltipProps {
        /** 吹き出しとして表示したい内容 */
        label: any;
        /** マウスオーバーの対象になるelement */
        children: any;
        /** 吹き出しの背景色の指定 */
        color?: ColorType;
        /** 表示される場所 */
        position?: 'top' | 'left' | 'right' | 'bottom';
        /** カスタムCSS定義 */
        css?: CSSType;
    }
    interface State {
        show: boolean;
        style: any;
    }
    export default class Tooltip extends PureComponent<TooltipProps, State> {
        static defaultProps: {
            position: string;
            color: string;
        };
        state: {
            show: boolean;
            style: {};
        };
        openTooltip: () => void;
        closeTooltip: () => void;
        element: RefObject<HTMLDivElement>;
        render(): JSX.Element;
    }
}
declare module "components/SideMenu/index" {
    export const SideMenu: import("styled-components").StyledComponent<"aside", any, {}, never>;
    export const MenuList: import("styled-components").StyledComponent<"ul", any, {}, never>;
    export const MenuLabel: import("styled-components").StyledComponent<"p", any, {}, never>;
}
declare module "components/Card/index" {
    import { PureComponent } from 'react';
    import { ColorType } from "types";
    interface Props {
        /** レスポンシブなイメージを追加する */
        image?: string;
        /** タイトル */
        title?: string;
        /** ヘッダーの右側に追加する */
        headerOptions?: any;
        /** header部分（イメージ）を横並びにする */
        horizontal?: boolean;
        /** footer */
        footer?: any;
        /** 色の指定 */
        color?: ColorType;
        /** ヘッダを */
        headerOnTop?: boolean;
        /** カスタinline style */
        style?: any;
    }
    export default class Card extends PureComponent<Props> {
        renderHeader: () => JSX.Element | null;
        render(): JSX.Element;
    }
}
declare module "components/Popover/index" {
    import React, { Component } from 'react';
    import { Props as BoxProps } from "components/Box/index";
    import { CSSType } from "types";
    interface Props extends BoxProps {
        /** ボタンの内容 */
        label: React.ReactNode;
        /** 内容のリスト */
        children?: React.ReactNode | React.ReactNode;
        /** 右の基準でリストを表示する */
        right?: boolean;
        /** 吹き出しが表示される場所 */
        position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
        /** カスタムCSS定義 */
        css?: CSSType;
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
}
declare module "components/Modal/index" {
    import React, { PureComponent, HTMLAttributes } from 'react';
    import { ColorType, ColSizeType, CSSType } from "types";
    interface Props extends HTMLAttributes<HTMLDivElement> {
        /** ヘッダーのタイトル文言 */
        title?: any;
        /** 1~12のモーダルサイズ */
        size?: ColSizeType;
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
        /** overlayの背景の設定 */
        shadowColor?: string;
        /** モーダル外に表示するElements */
        external?: any;
        /** カスタムCSS定義 */
        css?: CSSType;
    }
    export default class Modal extends PureComponent<Props> {
        static defaultProps: {
            show: boolean;
            color: string;
            size: number;
            shadowColor: string;
        };
        componentWillUnmount(): void;
        onKeyDown: (e: any) => void;
        onClickOverlay: () => void;
        element?: HTMLDivElement;
        shouldClose: boolean | null;
        render(): React.ReactPortal | null;
    }
}
declare module "components/Toast/index" {
    import React, { Component, PureComponent } from 'react';
    import { ColorType } from "types";
    type PositionType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
    interface ToastType {
        /** 認識ID */
        id: string;
        /** 表示する内容 */
        message?: React.ReactNode;
        /** 背景の色 */
        color?: ColorType;
        /** 表示される時間 nullの場合は自動で閉じられません */
        duration?: number | null;
    }
    interface ToastProps extends ToastType {
        clear: () => void;
    }
    export class ToastItem extends PureComponent<ToastProps> {
        static defaultProps: {
            duration: number;
        };
        componentDidMount(): void;
        render(): JSX.Element;
    }
    interface ContainerProps {
        /** 表示するToastのリスト */
        toasts: ToastType[];
        /** toastを消すタイミングのコールバック */
        clear: (id: string) => void;
        /** top, top-right, top-left, bottom, bottom-right, bottom-left */
        position?: PositionType;
        /** スクロールしても固定として表示する */
        fixed?: boolean;
    }
    export default class ToastContainer extends Component<ContainerProps> {
        static defaultProps: {
            toasts: never[];
            position: string;
            fixed: boolean;
        };
        shouldComponentUpdate(props: ContainerProps): boolean;
        componentDidUpdate(props: ContainerProps): void;
        componentWillUnmount(): void;
        clear: (id: string) => () => void;
        renderToast: () => JSX.Element;
        element?: HTMLDivElement;
        render(): React.ReactPortal | null;
    }
}
declare module "components/Tabs/index" {
    import React, { Component } from 'react';
    import { ColorType, AlignType } from "types";
    interface ItemProps {
        align?: any;
        active: boolean;
    }
    interface Props {
        /** 色指定 */
        color?: ColorType;
        /** left | right | center */
        align?: AlignType;
        /** 一気に表示する最大の数の指定 */
        maxItems?: number;
        children: any;
    }
    interface State {
        start: number;
        current?: number;
    }
    export default class Tabs extends Component<Props> {
        static defaultProps: {
            maxItems: number;
        };
        static getDerivedStateFromProps(props: Props, state: State): {
            current: number | undefined;
            start: number;
        };
        static Item: import("styled-components").StyledComponent<"div", any, ItemProps, never>;
        state: {
            start: number;
            current: null;
        };
        shouldComponentUpdate(props: Props, state: State): boolean;
        onNext: () => void;
        onPrev: () => void;
        getIndicatorPosition: () => React.CSSProperties | undefined;
        renderChildren: (child: React.ReactChild, index: number) => JSX.Element | null;
        render(): JSX.Element;
    }
}
declare module "components/Loading/Bar" {
    import { PureComponent, HTMLAttributes } from 'react';
    import { ColorType, CSSType } from "types";
    interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
        /** trueの場合開始します */
        loading: boolean;
        /** バーの色の指定 */
        color?: ColorType;
        /** バーのCSS positionの指定 */
        position?: 'absolute' | 'fixed' | 'sticky';
        /** バーの背景の色の自由指定 */
        background?: string;
        /** バーの縦幅の定義 */
        size?: string;
        /** バーのアニメーションのduration指定 (単位：ms) */
        duration?: number;
        css?: CSSType;
    }
    export default class LoadingBar extends PureComponent<LoadingProps> {
        static defaultProps: {
            loading: boolean;
            color: string;
            position: string;
            background: string;
            size: string;
            duration: number;
        };
        render(): JSX.Element;
    }
}
declare module "components/Loading/Spinner" {
    import { HTMLAttributes } from 'react';
    import { ColorType } from "types";
    interface Props extends HTMLAttributes<HTMLDivElement> {
        /** 色の指定 */
        color?: ColorType;
        /** 横幅 */
        width?: string;
        /** 縦幅 */
        height?: string;
        /** spinnerの太さ */
        borderSize?: string;
    }
    const Spinner: import("styled-components").StyledComponent<"div", any, Props, never>;
    export default Spinner;
}
declare module "components/index" {
    export { default as Break } from "components/Grid/Break";
    export { default as Container } from "components/Grid/Container";
    export { default as Row } from "components/Grid/Row";
    export { default as Col } from "components/Grid/Col";
    export { default as Content } from "components/Content/index";
    export * from "components/Content/index";
    export { default as Button } from "components/Button/index";
    export { default as ButtonGroup } from "components/Button/ButtonGroup";
    export { default as Table } from "components/Table/index";
    export { default as Box } from "components/Box/index";
    export { default as Progress } from "components/Progress/index";
    export * from "components/Form/index";
    export { default as AppBar } from "components/AppBar/index";
    export { default as Tag } from "components/Tag/index";
    export { default as Hero } from "components/Hero/index";
    export { default as Tooltip } from "components/Tooltip/index";
    export * from "components/SideMenu/index";
    export { default as Card } from "components/Card/index";
    export { default as Popover } from "components/Popover/index";
    export { default as Modal } from "components/Modal/index";
    export { default as Toast } from "components/Toast/index";
    export { default as Tabs } from "components/Tabs/index";
    export { default as LoadingBar } from "components/Loading/Bar";
    export { default as Spinner } from "components/Loading/Spinner";
}
declare module "theme/default" {
    import { ThemeType } from "types";
    const theme: ThemeType;
    export default theme;
}
declare module "styles/normalize" {
    /*! based on normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
    const normalized: any;
    export default normalized;
}
declare module "index" {
    export * from "components/index";
    export * from "utils/index";
    export * from "types";
    export { default as defaultTheme } from "theme/default";
    export { default as normalizeStyle } from "styles/normalize";
}
declare module "components/Form/Switch" {
    import { PureComponent, InputHTMLAttributes } from 'react';
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        children: any;
    }
    export default class Switch extends PureComponent<Props> {
        static defaultProps: {
            children: null;
            onChange: () => void;
        };
        id: string;
        render(): JSX.Element;
    }
}
