import React from 'react';
import { SizeType, ThemeType } from '../../styled';
interface Props {
    size?: SizeType;
    full?: boolean;
    headerStyle?: any;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    hover?: boolean;
}
declare const Table: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & Props, ThemeType, React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & Props>;
export default Table;
