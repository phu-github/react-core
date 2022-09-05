import {ReactNode} from 'react';
export interface LinkProps {
    variant?: string;   
    text?: string;
    url?: string;
    color?: string;
    fontSize? :string;
    children?: ReactNode | string;
}
