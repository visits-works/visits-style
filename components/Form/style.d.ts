export interface InputProps {
    name: string;
    value?: string | number;
    onChange: () => void;
    onBlur: () => void;
}
declare const _default: "\n  font-size: 1em;\n  position: relative;\n  text-align: left;\n  clear: both;\n  color: inherit;\n\n  &:disabled {\n    box-shadow: none;\n    background-color: rgb(128, 128, 128, 0.15);\n  }\n  &:readonly {\n    box-shadow: none;\n    background-color: rgb(128, 128, 128, 0.15);\n  }\n";
export default _default;
