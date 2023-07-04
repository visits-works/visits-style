import { HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** ボタンなどの表示するラベル */
    header: any;
    show: boolean;
    /**
     * アニメーションの時間
     * @default 300
     */
    timeout?: number;
}
export default function Accordion({ header, show, children, timeout, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
