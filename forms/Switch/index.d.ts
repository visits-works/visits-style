import React, { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    /** trueの場合にON/OFFのラベルを表示します */
    showLabel?: boolean;
    /** ONの時に、色を指定します。 */
    background?: string;
    /** 丸の色を設定します。 */
    anchorColor?: string;
    /**
     * ONになるときのラベル
     * @default 'ON'
     */
    onLabel?: string;
    /**
     * OFFになるときのラベル
     * @default 'OFF'
     */
    offLabel?: string;
}
declare const Switch: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default Switch;
