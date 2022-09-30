import React from 'react';
import {StatusInboxProps} from './StatusInbox.props';
import './StatusInbox.styles.css';

import {Text} from '../../atoms/Text';
import {IconStatus} from "../../atoms/IconStatus";

export const StatusInbox: React.FC<StatusInboxProps> = ({
  content,
  color,
  onClick,
  isActive= false,
}) => {
  return (
      <div className={`status-inbox ${isActive === true ? 'active' : ''}`} onClick={onClick}>
          <IconStatus backgroundColor={color} />
          <Text children={content} width={306} fontWeight={500} fontSize={14} margin={'0'}/>
      </div>
  );
};
