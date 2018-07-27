import * as React from 'react';
import { ColorType } from '../../styled';
interface Props {
    /** aaa */
    children?: Node;
    /** aaa */
    onClose?: () => void;
    /** aaa */
    onClick?: () => void;
    /**  */
    color?: ColorType;
}
export default class Tag extends React.PureComponent<Props> {
    static defaultProps: {
        children: null;
        onClose: null;
        onClick: null;
        color: null;
    };
    render(): JSX.Element;
}
export {};
