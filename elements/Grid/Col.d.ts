import { ColSizeType } from '../../types';
interface ColProps {
    /** 1-12のサイズ */
    size?: ColSizeType;
    /** 1-12の左のoffset */
    offset?: ColSizeType;
    /** 1-12基準のサイズを画面サイズのよって可変にする */
    auto?: boolean;
}
declare const Col: import("styled-components").StyledComponent<"div", any, ColProps, never>;
export default Col;
