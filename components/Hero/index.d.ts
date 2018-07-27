import React from 'react';
import { ColorType, SizeType } from '../../styled';
interface Props {
    color?: ColorType;
    size?: SizeType | 'full';
    children?: React.ReactChild;
    center?: boolean;
    background?: string;
    header?: React.ReactElement<any>;
}
export default function Hero({ children, color, size, center, header }: Props): JSX.Element;
export {};
