import React from 'react';
import { ColorType } from '../../types';
interface Props {
    /** 色の指定 */
    color?: ColorType;
    /** 横幅 */
    width?: string;
    /** 縦幅 */
    height?: string;
    /** spinnerの太さ */
    borderSize?: string;
    style?: any;
}
declare const Spinner: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Props>;
export default Spinner;
