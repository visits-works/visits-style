import { HTMLAttributes } from 'react';
import { ColorType, SizeType } from '../../types';
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** ボタンの色 */
    color?: ColorType;
    /** ボタンのサイズ */
    size?: SizeType;
    /** 背景が透明なボタンでする */
    outline?: boolean;
    /** 全体幅のボタンで設定 */
    full?: boolean;
}
declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export default Button;
