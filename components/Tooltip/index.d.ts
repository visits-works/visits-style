import { RefObject, PureComponent } from 'react';
interface TooltipProps {
    label: any;
    children: any;
    color?: ColorType;
    position?: 'top' | 'left' | 'right' | 'bottom';
    style?: any;
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
export {};
