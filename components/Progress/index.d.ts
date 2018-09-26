import React from 'react';
import { SizeType, ColorType, ThemeType } from '../../styled';
interface ProgressProps {
    /** 現状の進捗 */
    value: number;
    /** 進捗の最大値 */
    max: number;
    /** バーのサイズ */
    size?: SizeType;
    /** sizeを使わないときの縦幅を指定する */
    height?: string;
    /** バーの色 */
    color: ColorType;
}
declare const Progress: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & ProgressProps, ThemeType, React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & ProgressProps>;
export default Progress;
