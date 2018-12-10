import { Component, HTMLAttributes } from "react";
import { SizeType, CSSType } from "../../types";
declare type ItemType = {
    id: string | number;
    name: string;
    [key: string]: any;
} | string;
interface Props extends HTMLAttributes<HTMLSelectElement> {
    name: string;
    value: string | number;
    placeholder?: string;
    options: ItemType[];
    size?: SizeType;
    outline?: boolean;
    error?: string | any;
    help?: string | any;
    disabled?: boolean;
    render?: (label: string) => any;
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
