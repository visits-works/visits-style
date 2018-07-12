import * as React from 'react';
import { InputProps } from './types';
interface Props extends InputProps {
    placeholder?: string;
    type: 'text' | 'number' | 'password' | 'email' | 'phone';
    value?: string | number;
}
export default class TextInput extends React.PureComponent<Props> {
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
