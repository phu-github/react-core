  import React from 'react';
import {IconStatusProps} from './IconStatus.props';
import './IconStatus.styles.css';

export const IconStatus: React.FC<IconStatusProps> = ({
  width= 16,
  height = 16,
  backgroundColor= 'none',
  borderRadius= "50%",
    marginLeft,
    marginRight= 13,
  }) => {
  return (
      <div style={{width, height, backgroundColor, borderRadius, marginLeft, marginRight}}></div>
  );
};
