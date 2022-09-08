import React from 'react';
import {ButtonProps} from './Button.props';
import './Button.styles.css';
import {Image} from '../Image'
import {Text} from '../Text'

export const Button: React.FC<ButtonProps> = ({
    variant='btn-style',
    title,
    linkIcon,
    isActive,
    onClick,
    txtVariant,
    imgVariant,
}) => {
    return (
        <button 
            onClick={onClick} 
            className={`atom-button ${variant} ${isActive? 'active': ''} `} >
            {linkIcon && <Image variant={imgVariant} srcImg={linkIcon} />}
            {title && <Text variant={txtVariant} children={title} />}
        </button>
    );
};
