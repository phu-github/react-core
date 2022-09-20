import React, { useState } from 'react';
import { SideBarProps } from './SideBar.props';
import './SideBar.styles.scss';
import {SideBarItem} from "./SideBarItem";

export const SideBar: React.FC<SideBarProps> = ({
    sidebarArr= [],
}) => {

  const [active, setActive] = useState(sidebarArr[0]);

  const handleSideBar = (leftNavBtn: any) => {
    setActive(leftNavBtn);
  }

  return (
      <div className="m-sidebar">
        {
            sidebarArr?.map((sidebarItem: any, index) =>
                <SideBarItem key={index} sidebarItem ={sidebarItem} />
            )
        }
      </div>
  );
};
