import React from 'react';
import {SearchBarProps} from './SearchBar.props';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Images } from '../../../configs/images'
import './SearchBar.styles.css'

export const SearchBar: React.FC<SearchBarProps> = ({
  height,
  padding = 0,
  margin = 0,
  titleInput,
  onSearchEvent
}) => {
  return (
    <div  className='searchbar' style={{padding, margin}}>
      <TextInput width={250} height={48} placeholderInput={titleInput || 'Search...'}></TextInput>
      <Button onClick={onSearchEvent} variant='only-icon' linkIcon={Images.SearchIcon} width={60} height={50} ></Button>
    </div>
  );
};
