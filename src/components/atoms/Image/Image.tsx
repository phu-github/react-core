import React from 'react';
import {ImageProps} from './Image.props';
import './Image.styles.css';

export const Image: React.FC<ImageProps> = ({
    variant = '',
    srcImg,
    onClick
}) => {
  return (
    <img
        className={`atom-image ${variant}`} src={srcImg} onClick={onClick}
    />
  );
};
