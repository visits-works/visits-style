import * as React from 'react';
import { ColorType } from '../../types';
interface Props {
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
    align?: 'left' | 'right';
    /** cssのスタイルを入れてください */
    style?: any;
    children?: React.ReactChildren | any;
}
declare type State = {
    show: boolean;
};
export default class AppBar extends React.PureComponent<Props, State> {
    static defaultProps: {
        color: null;
        brand: null;
        fixed: boolean;
        sticky: boolean;
        fluid: boolean;
        backdrop: boolean;
        style: null;
    };
    static Item: import("../../../../../../../Users/sung/Develop/visits-style/node_modules/styled-components").StyledComponentClass<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, any, React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
    state: {
        show: boolean;
    };
    toggleMenu: () => void;
    render(): JSX.Element;
}
export {};
