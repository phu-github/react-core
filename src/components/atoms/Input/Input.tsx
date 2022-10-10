import React from 'react';
import {InputProps} from './Input.props';


export const Input: React.FC<InputProps> = ({
    variant = "",
    width = '200px',
    height = '21px',
    fontWeight = 300,
    fontSize = '0.88rem',
    color = 'black',
    backgroundColor = 'transparent',
    type = 'text',
    name = 'default',
    padding = "0 5px",
    margin = 0,
    border = '1px solid black',
    borderRadius = 'none',
    placeholder = 'Enter here ...',
}) => {
  return (
    <input 
        className={`${variant}`}
        type={type} 
        placeholder={placeholder} 
        name={name} 
        style={{ width, height, fontWeight, fontSize, color, backgroundColor, border, borderRadius, padding, margin }}
    />
  );
};
