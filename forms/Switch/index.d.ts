import { InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    /** trueの場合にON/OFFのラベルを表示します */
    showLabel?: boolean;
    /** ONの時に、色を指定します。 */
    background?: string;
    /** 丸の色を設定します。 */
    anchorColor?: string;
}
export default function Switch({ className, height, showLabel, background, anchorColor, ...rest }: Props): JSX.Element;
export {};
