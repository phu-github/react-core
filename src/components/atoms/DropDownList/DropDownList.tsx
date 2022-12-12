import React, {useEffect, useRef, useState} from 'react';
import {DropDownListProps} from './DropDownList.props';
import './DropDownList.styles.css';

export const DropDownList: React.FC<DropDownListProps> = ({
    width,
    height,
    disabled,
    labelTitle,
    selectedTitle,
    children,
    data,
    margin,
    variant,
    variantDropdown,
    onSelectItem,
    onSelectActions,
    itemSelected
}) => {
    const refEvent = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectItem = (item:any) => {
        if (onSelectItem) {
            setIsOpen(false);
            onSelectItem(item.content, variant);
        }
    }

    const handleClickOutSide = (event:any) => {
        //@ts-ignore
        if(refEvent.current && !refEvent.current.contains(event.target)){
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutSide, false);
        return () => {
            document.addEventListener("click", handleClickOutSide, false);
        };

    }, []);

    return (
       <div className={`dropdown-list ${variantDropdown} ${disabled?'disabled':''}`} ref={refEvent} style={{margin, height, width}}>
           <label className={isOpen ? 'opened': ''}>{labelTitle} {labelTitle && ":"} <span className='selected-title' onClick={handleClick}>{itemSelected || selectedTitle} {variantDropdown === 'actions-dropdown' && <span className='arrow-action'></span>}</span></label>
          {
            isOpen && <div className={'dropdown-content ' + variantDropdown + '-for-action'} id={variantDropdown}>
              {
                variant !== 'checkbox' && data && <ul>
                  {
                      data && data.map((item: any) => <li key={item.id} onClick={() => variantDropdown === 'actions-dropdown' ? onSelectActions && setIsOpen(false): handleSelectItem(item)}>{item.content}</li>)
                  }
                </ul>
              }

                {
                    children
                }
            </div>
          }
       </div>
    );
};
