import { CSSType, ThemeType } from '../types';
export declare function mediaMobile(str: TemplateStringsArray, ...args: any[]): ({ theme }: {
    theme: ThemeType;
}) => CSSType;
export declare function mediaTablet(str: TemplateStringsArray, ...args: any[]): ({ theme }: {
    theme: ThemeType;
}) => CSSType;
export declare function mediaDesktop(str: TemplateStringsArray, ...args: any[]): ({ theme }: {
    theme: ThemeType;
}) => CSSType;
export declare function mediaFullHD(str: TemplateStringsArray, ...args: any[]): ({ theme }: {
    theme: ThemeType;
}) => CSSType;
export declare function mediaUntilFullHD(str: TemplateStringsArray, ...args: any[]): CSSType;
