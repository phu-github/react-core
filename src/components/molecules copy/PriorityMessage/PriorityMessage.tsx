import React from 'react'

import { PriorityMessageProps } from './PriorityMessage.props'
import './PriorityMessage.styles.css';

export const PriorityMessage: React.FC<PriorityMessageProps> = ({
  padding = 0,
  margin = 0,
  backgroundColor = '',
  color = '',
  width = 'auto',
  height = 'auto',
  children
}) => {

  return (
    <div style={{ backgroundColor, padding, margin, color, width, height}}>
        {children}
    </div>
  )
}
