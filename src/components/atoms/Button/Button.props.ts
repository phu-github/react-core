import {ReactNode} from 'react';

export interface ButtonProps {
    variant?: string;
    isActive?: boolean
    title?: string;
    onClick?: () => void;
    // text
    txtVariant?: string;
    // image 1
    linkIcon?:string;
    imgVariant?: string;
    // image 2
    linkIconPlus?:string;
    imgVariantPlus?: string;
}
