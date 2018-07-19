import * as React from 'react';
interface Props extends InputProps {
    value: string | number;
    children?: React.ReactChild;
}
export default class Radio extends React.PureComponent<Props> {
    static defaultProps: {
        name: null;
        children: null;
        onChange: () => void;
    };
    id: string;
    render(): JSX.Element;
}
export {};
