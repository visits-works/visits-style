/// <reference types="react" />
import { ColSizeType } from '../../types';
interface ColProps {
    /** 固定の幅を指定する場合 */
    narrow?: boolean;
    /** 1-12のサイズ */
    size?: ColSizeType;
    /** 1-12の左のoffset */
    offset?: ColSizeType;
    /** 1-12基準のサイズを画面サイズのよって可変にする */
    auto?: boolean;
}
declare const Col: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ColProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ColProps>;
export default Col;
