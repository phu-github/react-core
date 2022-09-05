import React from 'react';
import {ImageProps} from './Image.props';
import './Image.styles.css';

export const Image: React.FC<ImageProps> = ({
    variant = 'default',
    srcImg,
    width = '200px',
    height = 'auto',
    backgroundColor = 'transparent',
    borderRadius = '0px',
    border = 0,
    margin = '0px',
    onClick
}) => {
  return (
    <img
        className={`atom-image ${variant}`}
        src={srcImg} style={{width, height, backgroundColor, borderRadius, border, margin
      }}
      onClick={onClick}
    />
  );
};
