import { HTMLAttributes } from 'react';
import { ColorType, SizeType } from '../../types';
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** ボタンの色 */
    color?: ColorType;
    /** ボタンのサイズ */
    size?: SizeType;
    /** 背景が透明なボタンでする */
    outline?: boolean;
    /** 丸いボタンで表示する */
    round?: boolean;
    /** アイコンボタンとしてpaddingを同じにする */
    icon?: boolean;
}
declare const _default: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export default _default;
