import React from 'react';
import {DropDownGroupProps} from './DropDownGroup.props';
import './DropDownGroup.styles.css';
import {DropDownList} from '../../atoms/DropDownList'


export const DropDownGroup: React.FC<DropDownGroupProps> = ({
    DropDownArr = [
        {
            id: 1,
            content: 'Status'
        },
        {
            id: 1,
            content: 'Priority'
        },
        {
            id: 1,
            content: 'Category'
        },
    ]
}) => {

  return (
      <div className="drop-down-gr">
        {
            DropDownArr?.map(( ele:any,key:number) =>
                <DropDownList key={key} labelTitle={ele.content} selectedTitle={'All'}/>
            )
        }
      </div>
  );
};
