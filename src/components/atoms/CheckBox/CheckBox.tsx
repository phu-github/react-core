import React from 'react';
import {CheckBoxProps} from './CheckBox.props';
import './CheckBox.styles.css';
import {Image} from '../Image'
import {Text} from '../Text'

export const CheckBox: React.FC<CheckBoxProps> = ({
    id,
    width,
    height,
    border,
    borderRadius,
    disabled,
    checked,
    value,
    onChange
}) => {
    return (
        <input id={id} value={value} className={'cursor'} type={"checkbox"} style={{width, height, border, borderRadius}} disabled={disabled} checked={checked} onChange={onChange}></input>
    );
};
