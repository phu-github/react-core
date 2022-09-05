import {ReactNode} from 'react';

export interface ButtonProps {
    variant?: string;
    isActive?: boolean
    linkIcon?:string;
    title?: string;
    onClick?: () => void;
    imageWidth?: string | number;
    imageHeight?: string | number;
    textVariant?: string;
}
