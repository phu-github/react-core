import React from 'react';
import {PriorityStatusProps} from './PriorityStatus.props';
import './PriorityStatus.styles.css';
import {Text} from '../../atoms/Text';
import {IconStatus} from "../../atoms/IconStatus";


export const PriorityStatus: React.FC<PriorityStatusProps> = ({
    content
}) => {
  return (
      <div >
          <IconStatus></IconStatus>
          <Text children={content}></Text>
      </div>
  );
};
