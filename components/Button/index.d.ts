import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
interface ButtonProps {
    color?: ColorType;
    size?: SizeType;
    outline?: boolean;
    onClick?: () => void;
}
declare const Button: StyledComponentClass<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps, any, React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>;
export default Button;
