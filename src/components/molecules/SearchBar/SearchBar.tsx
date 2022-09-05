import React from 'react';
import {SearchBarProps} from './SearchBar.props';
import './SearchBar.styles.css';
import { Input } from '../../atoms/Input'; 
import { Button } from '../../atoms/Button';

export const SearchBar: React.FC<SearchBarProps> = ({
    mLinkIcon,
}) => {
  return (
    <div className="m-search-bar">
        <Input variant='input-search' backgroundColor='transparent' border='none' />
        <Button 
            variant = "btn-search" 
            linkIcon = {mLinkIcon} 
        />
    </div>
  );
};