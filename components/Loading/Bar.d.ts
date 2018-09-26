import React, { PureComponent } from 'react';
import { ThemeType } from '../../styled';
export declare const Bar: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeType, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
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
