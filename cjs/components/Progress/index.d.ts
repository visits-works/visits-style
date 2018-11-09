import { PureComponent } from 'react';
import { ColorType, SizeType } from '../../types';
interface ProgressProps {
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
    style?: any;
}
export default class Progress extends PureComponent<ProgressProps> {
    static defaultProps: {
        color: string;
    };
    render(): JSX.Element;
}
export {};
