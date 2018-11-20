import { PureComponent, HTMLAttributes } from 'react';
import { SizeType } from '../../types';
interface Props extends HTMLAttributes<HTMLSelectElement> {
    placeholder?: string;
    options: Array<{
        id: string | number;
        name: string;
    }> | string[];
    size?: SizeType;
    outline?: boolean;
    error?: string;
    help?: string;
    disabled?: boolean;
}
export default class Select extends PureComponent<Props> {
    static defaultProps: {
        name: null;
        onChange: () => void;
        options: never[];
    };
    renderItem: () => any;
    render(): JSX.Element;
}
export {};
