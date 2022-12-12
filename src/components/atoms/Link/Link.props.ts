import {ReactNode} from 'react';
export interface LinkProps {
    variant?: string;   
    text?: string;
    url?: string;
    children?: ReactNode | string;
    to?: string;
    isLink?: boolean;
}
