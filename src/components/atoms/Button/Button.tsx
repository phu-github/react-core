import React from 'react';
import {ButtonProps} from './Button.props';
import './Button.styles.scss';
import {Image} from '../Image'
import {Text} from '../Text'

export const Button: React.FC<ButtonProps> = ({
    variant='btn-style',
    title,
    linkIcon,
    linkIconPlus,
    isActive,
    onClick,
    txtVariant,
    imgVariant,
    imgVariantPlus,
}) => {

    return (
        <button className={`${variant} ${isActive? 'active' : ''}`} onClick={onClick} >
            {linkIcon && <Image variant={imgVariant} srcImg={linkIcon} />}
            {title && <Text variant={txtVariant} children={title} />}
            {linkIconPlus && <Image variant={imgVariantPlus} srcImg={linkIconPlus} />}
        </button>
    );
};
