import React from 'react';
import { ColorType, SizeType, StyledComponentClass } from '../../styled';
interface Props {
    label: React.ReactNode;
    color?: ColorType;
    children?: React.ReactNode | React.ReactNode;
    right?: boolean;
    size?: SizeType;
}
interface State {
    show: boolean;
    style: any;
}
export default class Dropdown extends React.Component<Props, State> {
    state: {
        show: boolean;
        style: {};
    };
    static Item: StyledComponentClass<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, import("../../../../../../../Users/sung/Develop/visits-style/src/styled").ThemeType, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
    static Divider: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../../../../../../Users/sung/Develop/visits-style/src/styled").ThemeType, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
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
