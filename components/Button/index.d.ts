import React from 'react';
import { ColorType, SizeType, ThemeType, StyledComponentClass } from '../../styled';
interface ButtonProps {
    /** ボタンの色 */
    color?: ColorType;
    /** ボタンのサイズ */
    size?: SizeType;
    /** 背景が透明なボタンでする */
    outline?: boolean;
    /** ボタンのクリックイベント */
    onClick?: () => void;
    /** 全体幅のボタンで設定 */
    full?: boolean;
}
declare const Button: StyledComponentClass<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps, ThemeType, React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>;
export default Button;
