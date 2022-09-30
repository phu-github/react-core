import React, {useState} from 'react';
import {CheckedDropdownProps} from './CheckedDropdown.props';
import './CheckedDropdown.styles.css';
import {CheckInput} from "../../atoms/CheckInput";
import {Button} from "../../atoms/Button";
import {TextInput} from "../../atoms/TextInput";


export const CheckedDropdown: React.FC<CheckedDropdownProps> = ({
    arrContent= [
      {
        id: 1,
        name: 'Auto Test 1'
      },
      {
        id: 2,
        name: 'Auto Test 2'
      },
      {
        id: 3,
        name: 'Auto Test 3'
      }
    ],
    width= 200,
    height=240,
}) => {
  const [checkedList, setCheck] = useState<any[]>([]);

  const handleCheckBox = (e:any) => {
      let sel:any[] = checkedList;
      if(e.target.checked) {
        e.target.checked = true;
      } else {
        let find = sel.indexOf(e.target.value);
        if (find > -1) {
          sel.splice(find, 1)
        }
      }
      setCheck(sel);
  }

  const checkClear = () => {
    document.querySelectorAll('input[type="checkbox"]').forEach(item => {
      const checkbox = document.getElementById(item.id) as HTMLInputElement | null;
      if(checkbox) {
        checkbox.checked = false;
      }
    });
    setCheck([]);
  };


  return (
      <div className={'dropdown'} style={{width, height}}>
          <TextInput placeholderInput={'Search'} width={182} padding={'0 0 0 16px'} height={40} margin={'0 0 8px 0'}/>
          <Button title={'Clear selected items'} width={182} onClick={checkClear} margin={'0 0 8px 0'}/>
          <div className="checked-dropdown" >
              {
                arrContent?.map((content, index:number) => {
                  return <CheckInput id={content.id} content={content.name} onChange={(e:any) => handleCheckBox(e)}/>
                })
              }
          </div>
      </div>

  );
};
