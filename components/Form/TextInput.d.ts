import { PureComponent } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    placeholder?: string;
    /** 'text' | 'number' | 'password' | 'email' | 'phone' */
    type: 'text' | 'number' | 'password' | 'email' | 'phone';
}
export default class TextInput extends PureComponent<Props> {
    static defaultProps: {
        name: null;
        type: string;
        placeholder: null;
        value: string;
        onChange: () => void;
    };
    render(): JSX.Element;
}
export {};
