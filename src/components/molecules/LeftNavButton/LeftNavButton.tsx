// import React, { useState } from 'react';
// import {LeftNavButtonProps} from './LeftNavButton.props';
// import './LeftNavButton.styles.css';
// import {Button} from "../../atoms/Button";

// interface LeftNavButton {
//   id?: number; name?: string; linkIcon?: string; activeObject?: string;
// }

// export const LeftNavButton: React.FC<LeftNavButtonProps> = ({
//     leftNavBtnArr=[],
// }) => {

//   const [active, setActive] = useState([...leftNavBtnArr] as any);
  

//   const handleNavLeftBtn = (index: number) => {
//     let activeTemp = [...leftNavBtnArr];

//     // Way to clone array object by using .map + rest
//     let array2 = activeTemp.map((a: any) => {
//       var returnValue = {...a};
//       if (a.id == index) {
//         returnValue.activeObject = "active";
//       }
//       return returnValue
//     });

//     setActive([...array2]);
//   }
//   console.log("active=", active);
//   return (
//       <div className="button-section-group fixed">
//         {
//             active?.map((btn:any) =>  <Button isActive={btn.activeObject} onClick={() =>handleNavLeftBtn(btn.id)} key={btn.id} title={btn.name} linkIcon={btn.linkIcon } />)
//         }
//       </div>
//   );
// };

import React, { useState } from 'react';
import { LeftNavButtonProps } from './LeftNavButton.props';
import './LeftNavButton.styles.css';
import { Button } from "../../atoms/Button";


export const LeftNavButton: React.FC<LeftNavButtonProps> = ({
    leftNavBtnArr=[],
}) => {

  const [active, setActive] = useState(leftNavBtnArr[0]);
  

  const handleNavLeftBtn = (leftNavBtn: any) => {
    setActive(leftNavBtn);
  }
  console.log("active=", active);
  return (
      <div className="m-navigation fixed">
        {
			leftNavBtnArr?.map((leftNavBtn: any, index) =>  
				<Button
                    variant='btn-icon-text'
					key={index} 
					isActive={active === leftNavBtn} 
					onClick={() =>handleNavLeftBtn(leftNavBtn)} 
					title={leftNavBtn.name} 
					linkIcon={leftNavBtn.linkIcon } 
				/>)
        }
      </div>
  );
};
