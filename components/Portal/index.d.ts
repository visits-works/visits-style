import React from 'react';
export interface Props {
    children: React.ReactNode;
    container?: HTMLElement;
    disabled?: boolean;
}
declare const Portal: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default Portal;
