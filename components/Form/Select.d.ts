import { Component, SelectHTMLAttributes } from "react";
import { SizeType, CSSType } from "../../types";
declare type ItemType = {
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
export {};
