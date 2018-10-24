/// <reference types="react" />
interface Props {
    size?: SizeType;
    full?: boolean;
    headerStyle?: any;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    hover?: boolean;
}
declare const Table: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLTableElement> & import("react").TableHTMLAttributes<HTMLTableElement> & Props, ThemeType, import("react").ClassAttributes<HTMLTableElement> & import("react").TableHTMLAttributes<HTMLTableElement> & Props>;
export default Table;
