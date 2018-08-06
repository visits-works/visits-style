import React, { Component, PureComponent } from 'react';
import { ColorType } from '../../styled';
interface ToastType {
    id: string;
    title?: string;
    message?: React.ReactNode;
    color?: ColorType;
    duration?: number;
}
interface ToastProps extends ToastType {
    clear: () => void;
    styles?: any;
}
export declare class Toast extends PureComponent<ToastProps> {
    static defaultProps: {
        duration: number;
    };
    componentDidMount(): void;
    timer: any;
    render(): JSX.Element;
}
interface ContainerProps {
    toasts: ToastType[];
    clear: (id: string) => void;
}
export default class ToastContainer extends Component<ContainerProps> {
    static defaultProps: {
        toasts: never[];
    };
    constructor(props: ContainerProps);
    componentWillUnmount(): void;
    clear: (id: string) => () => void;
    renderToast: () => JSX.Element;
    element: HTMLDivElement;
    render(): React.ReactPortal;
}
export {};
