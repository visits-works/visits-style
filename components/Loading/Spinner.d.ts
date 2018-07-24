import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
interface Props {
    color?: ColorType;
    style?: any;
    width?: string;
    height?: string;
    borderSize?: string;
}
declare const Spinner: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Spinner;
