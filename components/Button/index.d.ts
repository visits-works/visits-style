import React from 'react';
import { ColorType, SizeType, ThemeType, StyledComponentClass } from '../../styled';
interface ButtonProps {
    color?: ColorType;
    size?: SizeType;
    outline?: boolean;
    onClick?: () => void;
    full?: boolean;
}
declare const Button: StyledComponentClass<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps, ThemeType, React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>;
export default Button;
