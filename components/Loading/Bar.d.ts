import React, { PureComponent } from 'react';
import { StyledComponentClass, ThemeType } from '../../styled';
export declare const Bar: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeType, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
interface Props {
    loading: boolean;
}
export default class LoadingBar extends PureComponent<Props> {
    static defaultProps: {
        loading: boolean;
    };
    render(): JSX.Element;
}
export {};
