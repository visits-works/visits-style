import React, { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** 色指定 */
    color?: ColorType;
    /** borderを非表示する */
    borderless?: boolean;
    style?: any;
}
declare const Box: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Box;
