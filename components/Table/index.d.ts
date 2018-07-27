import React from 'react';
import { SizeType, StyledComponentClass, ThemeType } from '../../styled';
interface Props {
    size?: SizeType;
    full?: boolean;
    headerStyle?: any;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    hover?: boolean;
}
declare const Table: StyledComponentClass<React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & Props, ThemeType, React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & Props>;
export default Table;
