import React from 'react';
import { SizeType, ColorType, StyledComponentClass, ThemeType } from '../../styled';
interface Props {
    value: number;
    max: number;
    size?: SizeType;
    height?: string;
    color: ColorType;
}
export declare const Progress: StyledComponentClass<React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & Props, ThemeType, React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & Props>;
export default Progress;
