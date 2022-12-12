import React from 'react';
import {CheckInputProps} from './CheckInput.props';
import {Text} from '../Text';
import './CheckInput.styles.css';
import {CheckBox} from "../CheckBox";


export const CheckInput: React.FC<CheckInputProps> = ({
  content= '',
  width= 'calc(100% - 16px)',
  height=30,
  isChecked ,
  onChange,
  value,
  id,
}) => {
  return (
    <div className={'check-input'} style={{width, height}} >
      <input id={id} value={id} className={'cursor'} type={"checkbox"} checked={isChecked} onChange={onChange}></input>
      <Text children={content} margin={'0 0 0 8px'} />
    </div>
  );
};
