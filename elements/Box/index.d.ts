import { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** 色指定 */
    color?: ColorType;
    /** borderを非表示する */
    borderless?: boolean;
}
declare const _default: import("styled-components").StyledComponent<"div", any, Props, never>;
export default _default;
