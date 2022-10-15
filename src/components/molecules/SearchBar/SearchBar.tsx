import React from 'react';
import {SearchBarProps} from './SearchBar.props';
import './SearchBar.styles.scss';
import { Input } from '../../atoms/Input'; 
import { Button } from '../../atoms/Button';

export const SearchBar: React.FC<SearchBarProps> = ({
    mVariant,
    mLinkIcon,
}) => {
  return (
    <div className={`${mVariant}`}>
        <Input variant='input-search' backgroundColor='transparent' border='none' />
        <Button 
            variant = "btn-search"
            linkIcon = {mLinkIcon} 
        />
    </div>
  );
};