import * as React from 'react';
interface Props {
    title?: string;
    size?: ColSizeType;
    domId?: string;
    show?: boolean;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    color?: ColorType;
    closeModal: () => void;
}
export default class Modal extends React.Component<Props> {
    static defaultProps: {
        domId: string;
        show: boolean;
        color: string;
    };
    constructor(props: Props);
    shouldComponentUpdate(props: Props): boolean;
    componentWillUnmount(): void;
    element: HTMLDivElement;
    render(): React.ReactPortal;
}
export {};
