/// <reference types="react" />
interface Props {
    /** 固定幅 */
    width?: string;
    /** 向く数の行で対応できるようにする */
    multiline?: boolean;
    /** 縦の中央揃えにする */
    vcenter?: boolean;
    /** 横幅の中央揃えにする */
    center?: boolean;
    /** Colの間隔をなくす */
    noGutter?: boolean;
}
declare const Row: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & Props, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & Props>;
export default Row;
