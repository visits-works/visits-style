import React from 'react';
import { ThemeType, ColorType, StyledComponentClass } from '../../styled';
interface Props {
    color?: ColorType;
    borderless?: boolean;
    style?: any;
}
declare const Box: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, ThemeType, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Box;
