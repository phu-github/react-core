import React, { useState } from 'react';
import { SideBarProps } from './SideBar.props';
import './SideBar.styles.scss';
import {SideBarItem} from "./SideBarItem";

export const SideBar: React.FC<SideBarProps> = ({ sidebarArr= [] }) => {

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
