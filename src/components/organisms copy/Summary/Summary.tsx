import React from 'react'
import { Text } from '../../atoms/Text'
import { Card } from '../../molecules/Card';
import { SummaryProps } from './Summary.props'
import './Summary.styles.css';

export const Summary: React.FC<SummaryProps> = ({
  title = '',
  txtColor = 'black',
  borderColor = 'black',
  borderRadius = 0,
  border = '',
  height = '',
  width = '',
  fontSize = 10,
  fontFamily = '',
  backgroundColor = 'white',
  padding,
  margin,
  children,
}) => {
  return (
    <Card
    width={width}
    height={height}
    padding={padding}
    title={title}
    fontWeight='400'
    margin={margin}
    fontSize={fontSize}
    txtColor={txtColor}
    border={border}
    borderRadius={borderRadius}
    borderColor={borderColor}
    backgroundColor={backgroundColor}
    fontFamily={fontFamily}
    >
      <div className='summary-container'>
        {children}
      </div>
    </Card>
  )
}
