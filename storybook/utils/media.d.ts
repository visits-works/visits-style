import { ThemeType } from '../types';
interface Props {
    theme: ThemeType;
}
export declare function mediaMobile({ theme }: Props): string;
export declare function mediaTablet({ theme }: Props): string;
export declare function mediaDesktop({ theme }: Props): string;
export declare function mediaFullHD({ theme }: Props): string;
export declare function mediaUntilFullHD({ theme }: Props): string;
export {};
