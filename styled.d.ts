import React from 'react';
import * as st from 'styled-components';
import { StyledComponentClass } from 'styled-components';
export declare type ColorType = 'light' | 'primary' | 'info' | 'link' | 'success' | 'warning' | 'danger' | 'dark' | 'text';
export declare type SizeType = 'small' | 'medium' | 'large';
export declare type ColSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type AlignType = 'left' | 'right' | 'center';
export interface InputProps {
    name: string;
    value?: string | number;
    onChange: (e?: React.ChangeEvent<any>) => void;
    onBlur?: (e?: React.ChangeEvent<any>) => void;
}
export interface ThemeType {
    primary: string;
    link: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
    dark: string;
    black: string;
    white: string;
    text: string;
    textDark: string;
    textLight: string;
    textStrong: string;
    background: string;
    border: string;
    borderHover: string;
    borderActive: string;
    color: any;
}
declare const styled: st.ThemedBaseStyledInterface<ThemeType>, css: st.ThemedCssFunction<ThemeType>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: st.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: st.SimpleInterpolation[]) => string, ThemeProvider: React.ComponentClass<st.ThemeProviderProps<ThemeType>, React.ComponentState>;
export { StyledComponentClass };
export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
