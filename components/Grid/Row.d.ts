import React from 'react';
import { ThemeType } from '../../styled';
interface Props {
    width?: string;
    multiline?: boolean;
    vcenter?: boolean;
    center?: boolean;
    noGutter?: boolean;
}
declare const Row: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, ThemeType, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Row;
