import React, { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    children?: any;
    checked?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default _default;
