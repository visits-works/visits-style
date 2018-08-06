import { CSSProperties } from 'react';
import { ColorType } from '../../styled';
interface Props {
    color?: ColorType;
    /** borderを非表示する */
    borderless?: boolean;
    style?: CSSProperties;
}
export default function (props: Props): JSX.Element;
export {};
