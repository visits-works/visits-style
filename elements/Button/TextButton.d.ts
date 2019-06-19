import { HTMLAttributes } from 'react';
import { ColorType, SizeType } from '../../types';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** ボタンの色 */
    color?: ColorType;
    /** ボタンのサイズ */
    size?: SizeType;
    /** ボタン的な幅を全部無くしてテキストのように表示する */
    pure?: boolean;
    /** マウスオーバーするとテキストにunderlineが付く */
    underline?: boolean;
    /** 丸いボタンで表示する */
    round?: boolean;
    /** アイコンボタンとしてpaddingを同じにする */
    icon?: boolean;
}
declare const _default: import("styled-components").StyledComponent<"button", any, Props, never>;
export default _default;
