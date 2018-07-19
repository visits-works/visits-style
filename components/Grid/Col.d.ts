import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
interface ColProps {
    narrow?: boolean;
    size?: ColSizeType;
    offset?: ColSizeType;
    auto?: boolean;
}
declare const Col: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ColProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & ColProps>;
export default Col;
