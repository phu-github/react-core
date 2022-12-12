import React from 'react'
import './Textarea.styles.css';
import { TextareaProps } from './Textarea.props'

export const Textarea: React.FC<TextareaProps> = ({
    height = 0,
    width = 0,
    padding = 0,
    margin = 0,
    cols = 0 ,
    rows = 0, 
    className = '',
    color = '',
    backgroundColor = '' ,
    borderColor = '',
    isDisable = false, 
    onChange = () => {},
    value='',
    fontFamily,
    fontSize,
    children
}) => {
    return (
        <>
            <textarea 
            cols={cols} 
            rows={rows} 
            className={`${className}`} 
            style={{
                color,
                width,
                height,
                padding,
                margin,
                backgroundColor,
                borderColor,
                fontFamily,
                fontSize
            }}
            disabled= {isDisable}
            onChange={onChange}
            >
                {children}
            </textarea>
        </>
    )
}
