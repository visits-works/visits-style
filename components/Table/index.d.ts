import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
interface Props {
    size?: SizeType;
    full?: boolean;
    headerStyle?: any;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    hover?: boolean;
}
declare const Table: StyledComponentClass<React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & Props, any, React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & Props>;
export default Table;
