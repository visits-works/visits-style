import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
interface Props {
    color?: ColorType;
    borderless?: boolean;
    style?: any;
}
declare const Box: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Box;
