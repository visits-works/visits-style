import * as React from 'react';
import { InputProps } from './types';
interface Props extends InputProps {
    placeholder?: string;
    options: Array<{
        id: string | number;
        name: string;
    }>;
}
export default class Select extends React.PureComponent<Props> {
    static defaultProps: {
        name: null;
        placeholder: null;
        onChange: () => void;
        options: never[];
    };
    render(): JSX.Element;
}
export {};
