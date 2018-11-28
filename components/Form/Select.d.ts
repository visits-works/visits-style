import { Component, HTMLAttributes } from 'react';
import { SizeType } from '../../types';
declare type ItemType = {
    id: string | number;
    name: string;
    [key: string]: any;
} | string;
interface Props extends HTMLAttributes<HTMLSelectElement> {
    name: string;
    value: string | number;
    placeholder?: string;
    options: Array<ItemType>;
    size?: SizeType;
    outline?: boolean;
    error?: string | any;
    help?: string | any;
    disabled?: boolean;
    render?: (label: string) => any;
}
export default class Select extends Component<Props> {
    static defaultProps: {
        name: null;
        onChange: () => void;
        options: never[];
    };
    shouldComponentUpdate(props: Props): boolean;
    renderLabel: (label: string) => any;
    renderItem: () => JSX.Element[];
    render(): JSX.Element;
}
export {};
