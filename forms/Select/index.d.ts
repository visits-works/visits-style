import { SelectHTMLAttributes } from 'react';
import { SizeType } from '../../types';
declare type ItemType = {
    id: string | number;
    name: string;
    [key: string]: any;
} | string;
interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    placeholder?: string;
    options: ItemType[];
    outline?: boolean;
    error?: string | any;
    help?: string | any;
    inputSize?: SizeType;
    render?: (label: string) => any;
    disabled?: boolean;
}
export default function Select({ options, placeholder, render, help, error, className, inputSize, outline, ...rest }: Props): JSX.Element;
export {};
