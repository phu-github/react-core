import React, {useState} from 'react';
import {SearchFilterProps} from './SearchFilter.props';
import { TextInput } from '../../atoms/TextInput';
import './SearchFilter.styles.css'
import {Image} from "../../atoms/Image";

export const SearchFilter: React.FC<SearchFilterProps> = ({
  height,
  widthTextInput,
  padding ,
  margin = 0,
  titleInput,
  borderColor,
  borderRadius,
  iconSrc,
  cssClass,
  onSearchEvent,
  handleKeyDownEvent
}) => {
  const [changeInput, setChangeInput] = useState<string>('');

  const handleChangeInput = (param:any) => {
    // @ts-ignore
    setChangeInput(param);
    onSearchEvent && onSearchEvent(param)
  };


  return (
    <div className={'search-filter ' + cssClass} style={{padding, margin}}>
        <Image cssClass="icon-search" width={18} srcImg={iconSrc} color='#B3B8B8' onClick={() => {}}/>
        <TextInput
            width={widthTextInput}
            height={height}
            borderRadius={borderRadius}
            borderColor={borderColor}
            placeholderInput={titleInput || 'Search by keywords'}
            onChangeInput={handleChangeInput}
            onKeyDownEvent={handleKeyDownEvent}
            value={changeInput}></TextInput>
    </div>
  );
};
