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
    imageWidth = '22px',
    imageHeight = '22px',
    ...rest
}) => {
    return (
        <button 
            onClick={onClick} 
            className={`atom-button ${variant} ${isActive? 'active': ''} `} {...rest} >
            {linkIcon && <Image width={imageWidth} height={imageHeight} margin= "0 0 0 0" srcImg={linkIcon} />}
            {title && <Text children={title} fontSize={14} fontWeight={300} margin= "0 10px" color="#1a1a1a" />}
        </button>
    );
};
