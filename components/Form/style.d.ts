export interface InputProps {
    /** inputの対象名 */
    name: string;
    value?: string | number;
    onChange: () => void;
    onBlur: () => void;
    disabled?: boolean;
}
declare const _default: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../types").ThemeType>>[];
export default _default;
