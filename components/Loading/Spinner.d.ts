import React from 'react';
import { ColorType, ThemeType, StyledComponentClass } from '../../styled';
interface Props {
    color?: ColorType;
    style?: any;
    width?: string;
    height?: string;
    borderSize?: string;
}
declare const Spinner: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, ThemeType, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Spinner;
