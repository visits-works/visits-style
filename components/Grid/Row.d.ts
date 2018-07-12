import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
interface Props {
    width?: string;
    multiline?: boolean;
    vcenter?: boolean;
    center?: boolean;
    noGutter?: boolean;
}
declare const Row: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Row;
