import { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** 色指定 */
    color?: ColorType;
    /** borderを非表示する */
    borderless?: boolean;
    style?: any;
}
declare const Box: import("styled-components").StyledComponent<"div", any, Props, never>;
export default Box;
