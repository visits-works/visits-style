import { PureComponent } from 'react';
import { SizeType } from '../../styled';
import { InputProps } from './style';
interface Props extends InputProps {
    placeholder?: string;
    options: Array<{
        id: string | number;
        name: string;
    }> | string[];
    size?: SizeType;
    outline?: boolean;
    error?: string;
    help?: string;
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
