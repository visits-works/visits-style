import { PureComponent, HTMLAttributes } from 'react';
import { ColorType, CSSType } from '../../types';
interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
    /** trueの場合開始します */
    loading: boolean;
    /** バーの色の指定 */
    color?: ColorType;
    /** バーのCSS positionの指定 */
    position?: 'absolute' | 'fixed' | 'sticky';
    /** バーの背景の色の自由指定 */
    background?: string;
    /** バーの縦幅の定義 */
    size?: string;
    /** バーのアニメーションのduration指定 (単位：ms) */
    duration?: number;
    css?: CSSType;
}
export default class LoadingBar extends PureComponent<LoadingProps> {
    static defaultProps: {
        loading: boolean;
        color: string;
        position: string;
        background: string;
        size: string;
        duration: number;
    };
    render(): JSX.Element;
}
export {};
