import React, { Component, PureComponent } from 'react';
declare type PositionType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
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
    /** 定義不要、コンテナ側への操作系 */
    clear: () => void;
}
export declare class ToastItem extends PureComponent<ToastProps> {
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
    fixed?: boolean;
}
export default class ToastContainer extends Component<ContainerProps> {
    static defaultProps: {
        toasts: never[];
        position: string;
        fixed: boolean;
    };
    constructor(props: ContainerProps);
    shouldComponentUpdate(props: ContainerProps): boolean;
    getSnapshotBeforeUpdate(props: ContainerProps): void;
    componentWillUnmount(): void;
    clear: (id: string) => () => void;
    renderToast: () => JSX.Element;
    element: HTMLDivElement;
    render(): React.ReactPortal | null;
}
export {};
