import React from 'react'
import { Text } from '../../atoms/Text'
import { CardProps } from './Card.props'
import './Card.styles.css';

export const Card: React.FC<CardProps> = ({
  title = '',
  txtColor = 'black',
  borderColor = 'black',
  borderRadius = 0,
  border = '',
  height = 'auto',
  width = 'auto',
  fontSize = 10,
  fontFamily = '',
  backgroundColor = 'white',
  padding= 0,
  margin= 0,
  txtMargin= 0,
  classNames,
  children
}) => {
  return (
    <div 
    style={{
      width,
      height,
      backgroundColor,
      border,
      borderColor,
      borderRadius,
      fontFamily,
      padding,
      margin,
    }} className={`card-border-box`}>
      {title && <Text fontSize={fontSize} margin={`${txtMargin}`} fontWeight={'400'} color={txtColor} cssClass='card-title'>{title}</Text>}
    {children}

    </div>
  )
}
