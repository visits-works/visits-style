import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
interface Props {
    value: number;
    max: number;
    size?: SizeType;
    color: ColorType;
}
export declare const Progress: StyledComponentClass<React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & Props, any, React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & Props>;
export default Progress;
