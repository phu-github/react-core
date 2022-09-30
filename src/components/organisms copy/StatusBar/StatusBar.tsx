import React from 'react';
import {StatusBarProps} from './StatusBar.props';
import './StatusBar.styles.css';

import {Text} from '../../atoms/Text';
import {IconStatus} from "../../atoms/IconStatus";

export const StatusBar: React.FC<StatusBarProps> = ({
    statusBarArr= [
        {
            color: '#B00020',
            content: 'High priority'
        },
        {
            color: '#FCAB10',
            content: 'Medium'
        },
        {
            color: '#9DC914',
            content: 'Low'
        },
        {
            color: '#808888',
            content: 'Unkown'
        }
        ],
    margin,
}) => {
  return (
      <div className="status-bar" style={{margin}}>
          {
              statusBarArr?.map( (element, index) =>
                  <div className={"status-item"} key={index}>
                      <IconStatus backgroundColor={element.color} />
                      <Text fontSize={14} fontWeight={500} children={element.content}/>
                  </div>
              )
          }
      </div>
  );
};
