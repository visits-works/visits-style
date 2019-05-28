import { HTMLAttributes } from 'react';
import { ColorType, SizeType } from '../../types';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    color?: ColorType;
    size?: SizeType;
    pure?: boolean;
    underline?: boolean;
}
declare const _default: import("styled-components").StyledComponent<"button", any, Props, never>;
export default _default;
