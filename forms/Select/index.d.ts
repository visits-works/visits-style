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
    /** selectのサイズ */
    inputSize?: SizeType;
    /** optionのカスタムrender */
    render?: (label: string) => any;
    /** placehoderを選択可能にする */
    optional?: boolean;
}
export default function Select({ options, placeholder, render, help, error, className, inputSize, outline, optional, ...rest }: Props): JSX.Element;
export {};
