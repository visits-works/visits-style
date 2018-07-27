import React from 'react';
import { ThemeType, StyledComponentClass } from '../../styled';
interface Props {
    width?: string;
    multiline?: boolean;
    vcenter?: boolean;
    center?: boolean;
    noGutter?: boolean;
}
declare const Row: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, ThemeType, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Row;
