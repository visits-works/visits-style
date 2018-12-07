import { HTMLAttributes } from 'react';
import { ColorType } from '../../types';
interface Props extends HTMLAttributes<HTMLDivElement> {
    /** 色の指定 */
    color?: ColorType;
    /** 横幅 */
    width?: string;
    /** 縦幅 */
    height?: string;
    /** spinnerの太さ */
    borderSize?: string;
}
declare const Spinner: import("styled-components").StyledComponent<"div", any, Props, never>;
export default Spinner;
