/// <reference types="react" />
import { SizeType } from '../../types';
interface Props {
    size?: SizeType;
    full?: boolean;
    headerStyle?: any;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    hover?: boolean;
}
declare const Table: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLTableElement> & import("react").TableHTMLAttributes<HTMLTableElement> & Props, any, import("react").ClassAttributes<HTMLTableElement> & import("react").TableHTMLAttributes<HTMLTableElement> & Props>;
export default Table;
