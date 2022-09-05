  import React from 'react';
import {TextProps} from './Text.props';
import './Text.styles.css';

export const Text: React.FC<TextProps> = ({
    varient = '',
    children,
}) => {
  return (
    <p className={`atom-text ${varient}`}>
        {children}
    </p>
  );
};
