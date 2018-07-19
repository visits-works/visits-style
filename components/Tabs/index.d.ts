import React, { Component } from 'react';
import { StyledComponentClass } from 'styled-components';
interface Props {
    /**  */
    color?: ColorType;
    align?: AlignType;
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
    static Item: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
        align?: any;
        active: boolean;
    }, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
        align?: any;
        active: boolean;
    }>;
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
export {};
