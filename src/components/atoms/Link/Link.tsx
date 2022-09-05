import React from 'react';
// import {Colors} from '../../../configs/colors';
import {LinkProps} from './Link.props';
import './Link.styles.css';

export const Link: React.FC<LinkProps> = ({
  variant,
  children,
  url,
}) => {
    return (
        <a className={`atom-text ${variant}`} href={url}>
            {children}
        </a>
    );
};
