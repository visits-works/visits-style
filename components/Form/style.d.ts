export interface InputProps {
    /** inputの対象名 */
    name: string;
    value?: string | number;
    onChange: (e?: any) => void;
    onBlur?: (e?: any) => void;
    disabled?: boolean;
}
declare const _default: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>[];
export default _default;
