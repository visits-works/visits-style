/// <reference types="react" />
import { ColorType, SizeType } from '../../types';
interface ButtonProps {
    /** ボタンの色 */
    color?: ColorType;
    /** ボタンのサイズ */
    size?: SizeType;
    /** 背景が透明なボタンでする */
    outline?: boolean;
    /** 全体幅のボタンで設定 */
    full?: boolean;
    /** - */
    disabled?: boolean;
}
declare const Button: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps, any, import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>;
export default Button;