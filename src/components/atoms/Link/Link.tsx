import React from 'react';
import {Link as LinkItem } from "react-router-dom";
import {LinkProps} from './Link.props';
import './Link.styles.scss';

export const Link: React.FC<LinkProps> = ({
  variant,
  children,
  url="/home",
}) => {
    return (
        <LinkItem className={`atom-link ${variant}`} to ={url}>
            {children}
        </LinkItem>
    );
};
