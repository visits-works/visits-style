import React from 'react';
import { ColorType, SizeType } from '../../styled';
interface Props {
    label: React.ReactNode;
    color?: ColorType;
    children?: Array<React.ReactElement<any>>;
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
