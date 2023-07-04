import React, { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    children?: any;
    checked?: boolean;
    indeterminate?: boolean;
}
declare const Checkbox: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement | null>>;
export default Checkbox;
