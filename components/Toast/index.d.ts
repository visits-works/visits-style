import * as React from 'react';
import { Component, PureComponent } from 'react';
import { ColorType } from '../../types';
interface ToastType {
    id: string;
    title?: string;
    message?: React.ReactChildren;
    color?: ColorType;
}
interface ToastProps extends ToastType {
    clear: () => void;
    duration?: number;
    styles?: any;
}
export declare class Toast extends PureComponent<ToastProps> {
    componentDidMount(): void;
    timer: any;
    render(): JSX.Element;
}
interface ContainerProps {
    toasts: Array<ToastType>;
    duration?: number;
    clear: (id: string) => void;
}
export default class ToastContainer extends Component<ContainerProps> {
    static defaultProps: {
        toasts: never[];
        duration: number;
    };
    constructor(props: ContainerProps);
    componentWillUnmount(): void;
    clear: (id: string) => () => void;
    renderToast: () => JSX.Element;
    element: HTMLDivElement;
    render(): React.ReactPortal;
}
export {};
