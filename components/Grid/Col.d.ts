import React from 'react';
import { ColSizeType, StyledComponentClass, ThemeType } from '../../styled';
interface ColProps {
    narrow?: boolean;
    size?: ColSizeType;
    offset?: ColSizeType;
    auto?: boolean;
}
declare const Col: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ColProps, ThemeType, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ColProps>;
export default Col;
