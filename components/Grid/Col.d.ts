/// <reference types="react" />
interface ColProps {
    narrow?: boolean;
    size?: ColSizeType;
    offset?: ColSizeType;
    auto?: boolean;
}
declare const Col: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ColProps, ThemeType, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ColProps>;
export default Col;
