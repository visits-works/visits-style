import { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** 色の指定 */
    color?: ColorType;
    /** サイズ */
    size?: string;
    /** spinnerの太さ */
    borderSize?: string;
}
declare const Spinner: import("styled-components").StyledComponent<"div", any, Props, never>;
export default Spinner;
