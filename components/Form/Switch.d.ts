import * as React from 'react';
import { InputProps } from './types';
interface Props extends InputProps {
    children: React.ReactChild;
    checked?: boolean;
}
export default class Switch extends React.PureComponent<Props> {
    static defaultProps: {
        children: null;
        onChange: () => void;
    };
    id: string;
    render(): JSX.Element;
}
export {};
