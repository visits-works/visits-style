import { PureComponent, HTMLAttributes } from 'react';
import { ColorType, SizeType, CSSType } from '../../types';
interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /** 現状の進捗 */
    value: number;
    /** 進捗の最大値 */
    max: number;
    /** バーのサイズ */
    size?: SizeType;
    /** sizeを使わないときの縦幅を指定する */
    height?: string;
    /** バーの色 */
    color?: ColorType;
    /** カスタムCSS定義 */
    css?: CSSType;
}
export default class Progress extends PureComponent<ProgressProps> {
    static defaultProps: {
        color: string;
    };
    render(): JSX.Element;
}
export {};
